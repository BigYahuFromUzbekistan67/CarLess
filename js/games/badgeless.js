// BadgeLess - Logo Guessing Game

const BadgeLess = {
  currentLogo: null,
  currentDifficulty: null,
  wrongGuesses: 0,
  score: 0,
  totalRounds: 0,
  maxHintsShown: 0,
  originalImgElement: null,
  
  PIXEL_LEVELS: [32, 16, 8, 4, 2], // pixelation decreases with wrong guesses
  HINTS_AFTER_GUESSES: 3,
  
  init() {
    document.addEventListener('screenChange', (e) => {
      if (e.detail.screen === 'screen-badgeless-setup') {
        this.setupScreen();
      }
    });
  },
  
  setupScreen() {
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tier = parseInt(btn.dataset.tier);
        this.startGame(tier);
      });
    });
  },
  
  startGame(tier) {
    this.currentDifficulty = tier;
    this.score = 0;
    this.totalRounds = 0;
    this.nextRound();
  },
  
  nextRound() {
    this.wrongGuesses = 0;
    this.maxHintsShown = 0;
    
    const logos = getLogosByTier(this.currentDifficulty);
    this.currentLogo = logos[Math.floor(Math.random() * logos.length)];
    this.totalRounds++;
    
    Router.show('screen-badgeless');
    this.renderRound();
  },
  
  async renderRound() {
    const screen = document.getElementById('screen-badgeless');
    
    // Reset UI
    document.getElementById('bl-feedback').textContent = '';
    document.getElementById('bl-feedback').className = 'feedback';
    document.getElementById('bl-hints').innerHTML = '';
    document.getElementById('bl-answer-input').value = '';
    document.getElementById('bl-wrong-count').textContent = `Wrong guesses: ${this.wrongGuesses}`;
    document.getElementById('bl-score').textContent = `Score: ${this.score}`;
    document.getElementById('bl-round').textContent = `Round ${this.totalRounds}`;
    
    // Load and display logo
    const imgContainer = document.getElementById('bl-image-container');
    showLoading(imgContainer, 'Loading logo...');
    
    const imageUrl = await WikimediaAPI.getLogoUrl(this.currentLogo, 300);
    imgContainer.innerHTML = '';
    
    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.id = 'bl-logo-img';
      img.className = 'logo-image';
      img.crossOrigin = 'anonymous';
      imgContainer.appendChild(img);
      this.originalImgElement = img;
      
      img.onload = () => {
        this.applyDifficultyEffect(img);
      };
    } else {
      imgContainer.innerHTML = `<div class="no-image"><span>🏎️</span><p>${this.currentLogo.make}</p></div>`;
    }
    
    // Setup autocomplete
    const input = document.getElementById('bl-answer-input');
    createAutocomplete(input, searchMakes, (val) => {
      input.value = val;
    });
    
    // Submit button
    document.getElementById('bl-submit').onclick = () => this.checkAnswer();
    input.onkeydown = (e) => { if (e.key === 'Enter') this.checkAnswer(); };
    
    // Skip button
    document.getElementById('bl-skip').onclick = () => this.skipRound();
  },
  
  applyDifficultyEffect(img) {
    const container = document.getElementById('bl-image-container');
    
    if (this.currentDifficulty === 1) {
      // Full visibility
      img.style.filter = 'none';
      img.style.imageRendering = 'auto';
    } else if (this.currentDifficulty === 2) {
      // Pixelated, improving with wrong guesses
      const pixelLevel = this.PIXEL_LEVELS[Math.min(this.wrongGuesses, this.PIXEL_LEVELS.length - 1)];
      
      if (pixelLevel > 2) {
        // Apply CSS pixelation
        const scale = 1 / pixelLevel;
        img.style.imageRendering = 'pixelated';
        img.style.transform = `scale(${scale})`;
        img.style.transformOrigin = 'center';
        img.style.width = `${100 / scale}%`;
        
        // Use canvas for true pixelation
        const canvas = document.createElement('canvas');
        canvas.id = 'bl-logo-img';
        canvas.className = 'logo-image';
        const ctx = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 200;
        
        const sw = Math.max(1, Math.floor(canvas.width / pixelLevel));
        const sh = Math.max(1, Math.floor(canvas.height / pixelLevel));
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, sw, sh);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, canvas.width, canvas.height);
        
        img.replaceWith(canvas);
      } else {
        img.style.filter = 'none';
        img.style.imageRendering = 'auto';
      }
    } else if (this.currentDifficulty === 3) {
      // Color bar only
      img.style.display = 'none';
      
      // Try to extract colors after a small delay
      setTimeout(() => {
        try {
          const colors = extractColors(img);
          const colorBar = document.createElement('div');
          colorBar.id = 'bl-color-bar';
          colorBar.style.height = '80px';
          colorBar.style.borderRadius = '8px';
          colorBar.style.overflow = 'hidden';
          renderColorBar(colors, colorBar);
          container.appendChild(colorBar);
        } catch(e) {
          // CORS issue fallback
          container.innerHTML += `<p class="color-bar-fallback">Color analysis unavailable for this logo</p>`;
        }
      }, 100);
    }
  },
  
  checkAnswer() {
    const input = document.getElementById('bl-answer-input');
    const answer = input.value.trim().toLowerCase();
    const correct = this.currentLogo.make.toLowerCase();
    const feedback = document.getElementById('bl-feedback');
    
    if (!answer) return;
    
    if (answer === correct || correct.includes(answer) && answer.length > 3) {
      feedback.textContent = `✅ Correct! It's ${this.currentLogo.make}!`;
      feedback.className = 'feedback correct';
      this.score++;
      document.getElementById('bl-score').textContent = `Score: ${this.score}`;
      
      // Show full logo if difficulty > 1
      if (this.currentDifficulty > 1) {
        this.revealLogo();
      }
      
      const isNewRecord = ScoreManager.setHighScore('badgeless', this.score);
      
      setTimeout(() => {
        this.nextRound();
      }, 1500);
    } else {
      this.wrongGuesses++;
      feedback.textContent = `❌ Wrong! Try again...`;
      feedback.className = 'feedback wrong';
      document.getElementById('bl-wrong-count').textContent = `Wrong guesses: ${this.wrongGuesses}`;
      input.value = '';
      
      // Update image for difficulty 2
      if (this.currentDifficulty === 2) {
        this.reloadPixelated();
      }
      
      // Show hints after HINTS_AFTER_GUESSES wrong answers
      if (this.wrongGuesses >= this.HINTS_AFTER_GUESSES) {
        this.showNextHint();
      }
    }
  },
  
  async reloadPixelated() {
    const imageUrl = await WikimediaAPI.getLogoUrl(this.currentLogo, 300);
    if (!imageUrl) return;
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.onload = () => {
      this.originalImgElement = img;
      this.applyDifficultyEffect(img);
    };
  },
  
  revealLogo() {
    const container = document.getElementById('bl-image-container');
    WikimediaAPI.getLogoUrl(this.currentLogo, 300).then(url => {
      if (url) {
        const img = document.createElement('img');
        img.src = url;
        img.className = 'logo-image';
        container.innerHTML = '';
        container.appendChild(img);
      }
    });
  },
  
  showNextHint() {
    const hintIndex = this.wrongGuesses - this.HINTS_AFTER_GUESSES;
    const hints = this.currentLogo.hints || [];
    
    if (hintIndex < hints.length && hintIndex >= this.maxHintsShown) {
      this.maxHintsShown = hintIndex + 1;
      const hintsContainer = document.getElementById('bl-hints');
      const hintEl = document.createElement('div');
      hintEl.className = 'hint-item animate-in';
      hintEl.innerHTML = `💡 <strong>Hint ${this.maxHintsShown}:</strong> ${hints[hintIndex]}`;
      hintsContainer.appendChild(hintEl);
    }
  },
  
  skipRound() {
    const feedback = document.getElementById('bl-feedback');
    feedback.textContent = `The answer was: ${this.currentLogo.make}`;
    feedback.className = 'feedback info';
    this.revealLogo();
    
    setTimeout(() => {
      // Show result after skipping
      showResultScreen({
        gameId: 'badgeless',
        gameName: 'BadgeLess',
        score: this.score,
        maxScore: this.totalRounds,
        isNewRecord: ScoreManager.setHighScore('badgeless', this.score),
        onPlayAgain: () => Router.show('screen-badgeless-setup')
      });
    }, 2000);
  }
};

// PartLess - Car Parts Identification Game

const PartLess = {
  currentPart: null,
  score: 0,
  maxScore: 0,
  totalRounds: 0,
  usedPartIds: [],
  phase: 1, // 1 = name, 2 = function
  
  init() {
    document.addEventListener('screenChange', (e) => {
      if (e.detail.screen === 'screen-partless') {
        this.startGame();
      }
    });
  },
  
  startGame() {
    this.score = 0;
    this.maxScore = 0;
    this.totalRounds = 0;
    this.usedPartIds = [];
    this.nextRound();
  },
  
  nextRound() {
    const available = PARTS_DB.filter(p => !this.usedPartIds.includes(p.id));
    
    if (available.length === 0) {
      this.endGame();
      return;
    }
    
    this.currentPart = available[Math.floor(Math.random() * available.length)];
    this.usedPartIds.push(this.currentPart.id);
    this.totalRounds++;
    this.phase = 1;
    this.maxScore += 2; // 2 points per round (name + function)
    
    Router.show('screen-partless');
    this.renderPhase1();
  },
  
  async renderPhase1() {
    document.getElementById('prt-score').textContent = `Score: ${this.score}/${this.maxScore}`;
    document.getElementById('prt-round').textContent = `Round ${this.totalRounds}`;
    document.getElementById('prt-phase').textContent = 'Phase 1: What is this part?';
    document.getElementById('prt-feedback').textContent = '';
    document.getElementById('prt-feedback').className = 'feedback';
    
    // Load image
    const imgContainer = document.getElementById('prt-image');
    showLoading(imgContainer, 'Loading part image...');
    const imgUrl = await WikimediaAPI.getPartImage(this.currentPart, 400);
    imgContainer.innerHTML = '';
    
    if (imgUrl) {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.className = 'part-image';
      img.alt = 'Mystery car part';
      imgContainer.appendChild(img);
    } else {
      imgContainer.innerHTML = `<div class="no-image large"><span>⚙️</span><p>Car Part</p></div>`;
    }
    
    // Part location hint
    document.getElementById('prt-location').textContent = `📍 Found in: ${this.currentPart.location}`;
    
    // Build options
    const correct = this.currentPart.name;
    const wrongNames = shuffle(this.currentPart.wrongNames).slice(0, 3);
    const options = shuffle([correct, ...wrongNames]);
    
    this.renderOptions(options, correct, (isCorrect) => {
      setTimeout(() => this.renderPhase2(isCorrect), 1500);
    });
  },
  
  renderPhase2(phase1Correct) {
    if (phase1Correct) this.score++;
    document.getElementById('prt-score').textContent = `Score: ${this.score}/${this.maxScore}`;
    
    document.getElementById('prt-phase').textContent = `Phase 2: What does the ${this.currentPart.name} do?`;
    document.getElementById('prt-feedback').textContent = '';
    document.getElementById('prt-feedback').className = 'feedback';
    
    // Build function options
    const correct = this.currentPart.function;
    const wrongFunctions = shuffle(this.currentPart.wrongFunctions).slice(0, 3);
    const options = shuffle([correct, ...wrongFunctions]);
    
    this.renderOptions(options, correct, (isCorrect) => {
      if (isCorrect) this.score++;
      document.getElementById('prt-score').textContent = `Score: ${this.score}/${this.maxScore}`;
      
      const nextBtn = document.getElementById('prt-next');
      nextBtn.style.display = 'block';
      nextBtn.onclick = () => {
        nextBtn.style.display = 'none';
        this.nextRound();
      };
    });
  },
  
  renderOptions(options, correct, onComplete) {
    const container = document.getElementById('prt-options');
    container.innerHTML = '';
    
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        container.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
        
        const isCorrect = opt === correct;
        const feedback = document.getElementById('prt-feedback');
        
        if (isCorrect) {
          btn.classList.add('correct');
          feedback.textContent = '✅ Correct!';
          feedback.className = 'feedback correct';
        } else {
          btn.classList.add('wrong');
          feedback.textContent = `❌ Wrong! The answer was: "${correct}"`;
          feedback.className = 'feedback wrong';
          // Highlight correct
          container.querySelectorAll('.option-btn').forEach(b => {
            if (b.textContent === correct) b.classList.add('correct');
          });
        }
        
        onComplete(isCorrect);
      });
      container.appendChild(btn);
    });
  },
  
  endGame() {
    const isNewRecord = ScoreManager.setHighScore('partless', this.score);
    
    showResultScreen({
      gameId: 'partless',
      gameName: 'PartLess',
      score: this.score,
      maxScore: this.maxScore,
      isNewRecord,
      onPlayAgain: () => Router.show('screen-partless')
    });
  }
};

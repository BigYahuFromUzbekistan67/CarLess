// FactLess - Car Facts Quiz Game

const FactLess = {
  mode: 'find_truth', // 'find_truth' or 'find_lie'
  rounds: 5,
  currentRound: 0,
  score: 0,
  usedFactIds: [],
  currentFact: null,
  currentQuestion: null,
  
  init() {
    document.addEventListener('screenChange', (e) => {
      if (e.detail.screen === 'screen-factless-setup') {
        this.setupScreen();
      }
    });
  },
  
  setupScreen() {
    // Rounds selector
    document.querySelectorAll('.rounds-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.rounds-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.rounds = btn.dataset.rounds === 'inf' ? Infinity : parseInt(btn.dataset.rounds);
      });
    });
    
    // Mode selector
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.mode = btn.dataset.mode;
      });
    });
    
    // Start button
    document.getElementById('factless-start').onclick = () => this.startGame();
    
    // Set defaults
    document.querySelector('[data-rounds="5"]').classList.add('active');
    document.querySelector('[data-mode="find_truth"]').classList.add('active');
  },
  
  startGame() {
    this.currentRound = 0;
    this.score = 0;
    this.usedFactIds = [];
    this.nextRound();
  },
  
  nextRound() {
    this.currentRound++;
    
    // Check if game should end
    if (this.rounds !== Infinity && this.currentRound > this.rounds) {
      this.endGame();
      return;
    }
    
    // Pick a random fact not used yet
    const available = FACTS_DB.filter(f => !this.usedFactIds.includes(f.id));
    if (available.length === 0) {
      this.endGame();
      return;
    }
    
    this.currentFact = available[Math.floor(Math.random() * available.length)];
    this.usedFactIds.push(this.currentFact.id);
    this.currentQuestion = buildFactQuestion(this.currentFact, this.mode);
    
    Router.show('screen-factless');
    this.renderRound();
  },
  
  async renderRound() {
    // Header
    const roundsText = this.rounds === Infinity ? '∞' : this.rounds;
    document.getElementById('fl-round').textContent = `Round ${this.currentRound} / ${roundsText}`;
    document.getElementById('fl-score').textContent = `Score: ${this.score}`;
    document.getElementById('fl-mode-label').textContent = this.mode === 'find_truth' 
      ? '🔍 Find the TRUE fact' 
      : '🕵️ Find the FALSE fact';
    
    // Car name
    document.getElementById('fl-car-name').textContent = this.currentFact.carName;
    
    // Load car image
    const car = CARS_DB.find(c => c.id === this.currentFact.carId);
    const imgContainer = document.getElementById('fl-car-image');
    showLoading(imgContainer, 'Loading...');
    
    if (car) {
      const imgUrl = await WikimediaAPI.getCarImage(car, 400);
      imgContainer.innerHTML = '';
      if (imgUrl) {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.className = 'car-image-large';
        img.alt = car ? `${car.make} ${car.model}` : '';
        imgContainer.appendChild(img);
      } else {
        imgContainer.innerHTML = `<div class="no-image large"><span>🚗</span><p>${this.currentFact.carName}</p></div>`;
      }
    }
    
    // Render answer options
    const optionsContainer = document.getElementById('fl-options');
    optionsContainer.innerHTML = '';
    
    this.currentQuestion.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option;
      btn.dataset.index = index;
      btn.addEventListener('click', () => this.checkAnswer(option, btn));
      optionsContainer.appendChild(btn);
    });
    
    // Clear feedback
    document.getElementById('fl-feedback').textContent = '';
    document.getElementById('fl-feedback').className = 'feedback';
  },
  
  checkAnswer(selected, btn) {
    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    const isCorrect = selected === this.currentQuestion.correct;
    const feedback = document.getElementById('fl-feedback');
    
    if (isCorrect) {
      btn.classList.add('correct');
      feedback.textContent = '✅ Correct!';
      feedback.className = 'feedback correct';
      this.score++;
      document.getElementById('fl-score').textContent = `Score: ${this.score}`;
    } else {
      btn.classList.add('wrong');
      feedback.textContent = `❌ Wrong! The answer was: "${this.currentQuestion.correct}"`;
      feedback.className = 'feedback wrong';
      
      // Highlight correct answer
      document.querySelectorAll('.option-btn').forEach(b => {
        if (b.textContent === this.currentQuestion.correct) {
          b.classList.add('correct');
        }
      });
    }
    
    // Also show the correct answer label
    const correctType = this.mode === 'find_truth' ? 'TRUE fact' : 'FALSE fact';
    feedback.textContent += ` | The ${correctType}: "${this.currentQuestion.correct.substring(0, 60)}..."`;
    
    setTimeout(() => {
      if (this.rounds === Infinity || this.currentRound < this.rounds) {
        this.nextRound();
      } else {
        this.endGame();
      }
    }, 2500);
  },
  
  endGame() {
    const maxScore = this.rounds === Infinity ? this.currentRound - 1 : this.rounds;
    const isNewRecord = ScoreManager.setHighScore('factless', this.score);
    
    showResultScreen({
      gameId: 'factless',
      gameName: 'FactLess',
      score: this.score,
      maxScore: maxScore,
      isNewRecord,
      onPlayAgain: () => Router.show('screen-factless-setup')
    });
  }
};

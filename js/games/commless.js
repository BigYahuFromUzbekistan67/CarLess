// CommLess - F1 Team Radio Quiz Game

const CommLess = {
  currentRound: null,
  score: 0,
  totalRounds: 0,
  usedIds: [],
  currentTemplate: null, // 1 or 2
  
  init() {
    document.addEventListener('screenChange', (e) => {
      if (e.detail.screen === 'screen-commless') {
        this.startGame();
      }
    });
  },
  
  startGame() {
    this.score = 0;
    this.totalRounds = 0;
    this.usedIds = [];
    this.nextRound();
  },
  
  nextRound() {
    const available = RADIO_DB.filter(r => !this.usedIds.includes(r.id));
    
    if (available.length === 0) {
      this.endGame();
      return;
    }
    
    this.currentRound = available[Math.floor(Math.random() * available.length)];
    this.usedIds.push(this.currentRound.id);
    this.totalRounds++;
    
    // Randomly pick template 1 or 2 (if template 2 data available)
    const hasTemplate2 = this.currentRound.partialQuote && this.currentRound.missingPart;
    this.currentTemplate = hasTemplate2 && Math.random() > 0.5 ? 2 : 1;
    
    Router.show('screen-commless');
    this.renderRound();
  },
  
  renderRound() {
    document.getElementById('cl-score').textContent = `Score: ${this.score}`;
    document.getElementById('cl-round').textContent = `Round ${this.totalRounds}`;
    document.getElementById('cl-feedback').textContent = '';
    document.getElementById('cl-feedback').className = 'feedback';
    
    const radio = this.currentRound;
    
    if (this.currentTemplate === 1) {
      // Template 1: Full quote, guess the driver
      document.getElementById('cl-template-label').textContent = '🎙️ Who said this on team radio?';
      document.getElementById('cl-quote').textContent = `"${radio.fullQuote}"`;
      document.getElementById('cl-context').textContent = `${radio.team} — ${radio.year}`;
      
      // Build options: correct driver + 3 wrong
      const correct = radio.correctDriver;
      const wrongOptions = radio.wrongDrivers || getWrongDriverOptions(correct, 3);
      const options = shuffle([correct, ...wrongOptions.slice(0, 3)]);
      
      this.renderOptions(options, correct, (selected) => this.checkAnswerT1(selected, correct));
      
    } else {
      // Template 2: Incomplete quote, guess the missing part
      document.getElementById('cl-template-label').textContent = `🎙️ ${radio.driver} (${radio.team}, ${radio.year}) said...`;
      
      // Format quote with blank
      const displayQuote = `"${radio.partialQuote.replace('___', '[ ??? ]')}"`;
      document.getElementById('cl-quote').textContent = displayQuote;
      document.getElementById('cl-context').textContent = 'What was the missing part?';
      
      const correct = radio.missingPart;
      const wrongParts = radio.wrongParts || [];
      const options = shuffle([correct, ...wrongParts.slice(0, 3)]);
      
      this.renderOptions(options, correct, (selected) => this.checkAnswerT2(selected, correct));
    }
  },
  
  renderOptions(options, correct, onAnswer) {
    const container = document.getElementById('cl-options');
    container.innerHTML = '';
    
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn radio-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (!btn.disabled) {
          // Disable all
          container.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
          onAnswer(opt, btn);
        }
      });
      container.appendChild(btn);
    });
  },
  
  checkAnswerT1(selected, correct) {
    const isCorrect = selected === correct;
    this.processAnswer(isCorrect, selected, correct);
  },
  
  checkAnswerT2(selected, correct) {
    const isCorrect = selected === correct;
    this.processAnswer(isCorrect, selected, correct);
  },
  
  processAnswer(isCorrect, selected, correct) {
    const feedback = document.getElementById('cl-feedback');
    
    // Highlight options
    document.querySelectorAll('.option-btn').forEach(btn => {
      if (btn.textContent === correct) btn.classList.add('correct');
      else if (btn.textContent === selected && !isCorrect) btn.classList.add('wrong');
    });
    
    if (isCorrect) {
      this.score++;
      feedback.textContent = `✅ Correct! ${this.currentTemplate === 1 ? correct + ' said this.' : '"' + correct + '" was the missing word.'}`;
      feedback.className = 'feedback correct';
    } else {
      feedback.textContent = `❌ Wrong! The answer was: "${correct}"`;
      feedback.className = 'feedback wrong';
    }
    
    document.getElementById('cl-score').textContent = `Score: ${this.score}`;
    ScoreManager.setHighScore('commless', this.score);
    
    // Next round or end
    const skipBtn = document.getElementById('cl-next');
    skipBtn.textContent = this.totalRounds >= RADIO_DB.length - 1 ? 'Finish' : 'Next →';
    skipBtn.style.display = 'block';
    skipBtn.onclick = () => {
      skipBtn.style.display = 'none';
      if (this.totalRounds >= RADIO_DB.length) {
        this.endGame();
      } else {
        this.nextRound();
      }
    };
  },
  
  endGame() {
    const isNewRecord = ScoreManager.setHighScore('commless', this.score);
    
    showResultScreen({
      gameId: 'commless',
      gameName: 'CommLess',
      score: this.score,
      maxScore: this.totalRounds,
      isNewRecord,
      onPlayAgain: () => Router.show('screen-commless')
    });
  }
};

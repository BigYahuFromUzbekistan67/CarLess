// TextLess - Fill-in-the-Blank Text Game

const TextLess = {
  currentText: null,
  score: 0,
  totalRounds: 0,
  usedTextIds: [],
  
  init() {
    document.addEventListener('screenChange', (e) => {
      if (e.detail.screen === 'screen-textless') {
        this.startGame();
      }
    });
  },
  
  startGame() {
    this.score = 0;
    this.totalRounds = 0;
    this.usedTextIds = [];
    this.nextRound();
  },
  
  nextRound() {
    const available = TEXTS_DB.filter(t => !this.usedTextIds.includes(t.id));
    
    if (available.length === 0) {
      this.endGame();
      return;
    }
    
    this.currentText = available[Math.floor(Math.random() * available.length)];
    this.usedTextIds.push(this.currentText.id);
    this.totalRounds++;
    
    Router.show('screen-textless');
    this.renderRound();
  },
  
  renderRound() {
    document.getElementById('tl-score').textContent = `Score: ${this.score}`;
    document.getElementById('tl-round').textContent = `Round ${this.totalRounds} / ${TEXTS_DB.length}`;
    document.getElementById('tl-category').textContent = this.currentText.category;
    document.getElementById('tl-title').textContent = this.currentText.title;
    document.getElementById('tl-feedback').textContent = '';
    
    this.renderText();
    
    document.getElementById('tl-submit').onclick = () => this.checkAnswers();
    document.getElementById('tl-skip').onclick = () => this.skipRound();
  },
  
  renderText() {
    const container = document.getElementById('tl-text-container');
    const text = this.currentText;
    
    // Parse the template and replace [BLANK_N] with input fields
    let html = text.template;
    
    text.words.forEach((word, index) => {
      const blankId = `blank-${index + 1}`;
      const inputHtml = `<span class="blank-wrapper">
        <input type="text" 
               id="${blankId}" 
               class="blank-input" 
               data-index="${index}"
               data-answer="${word.toLowerCase()}"
               placeholder="___"
               autocomplete="off"
               spellcheck="false"
               style="width: ${Math.max(60, word.length * 12)}px">
        <span class="blank-result" id="${blankId}-result"></span>
      </span>`;
      html = html.replace(`[BLANK_${index + 1}]`, inputHtml);
    });
    
    container.innerHTML = html;
    
    // Add hints toggle
    const hintsContainer = document.getElementById('tl-hints-container');
    hintsContainer.innerHTML = '';
    
    if (text.hints && text.hints.length > 0) {
      const hintsToggle = document.createElement('button');
      hintsToggle.className = 'btn-secondary';
      hintsToggle.textContent = '💡 Show Hints';
      hintsToggle.onclick = () => {
        hintsList.style.display = hintsList.style.display === 'none' ? 'block' : 'none';
        hintsToggle.textContent = hintsList.style.display === 'none' ? '💡 Show Hints' : '🙈 Hide Hints';
      };
      
      const hintsList = document.createElement('ol');
      hintsList.className = 'hints-list';
      hintsList.style.display = 'none';
      text.hints.forEach(hint => {
        const li = document.createElement('li');
        li.textContent = hint;
        hintsList.appendChild(li);
      });
      
      hintsContainer.appendChild(hintsToggle);
      hintsContainer.appendChild(hintsList);
    }
    
    // Focus first input
    const firstInput = container.querySelector('.blank-input');
    if (firstInput) firstInput.focus();
    
    // Tab between inputs
    container.querySelectorAll('.blank-input').forEach((input, i, all) => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
          e.preventDefault();
          if (i < all.length - 1) all[i + 1].focus();
          else this.checkAnswers();
        }
      });
    });
  },
  
  checkAnswers() {
    const inputs = document.querySelectorAll('.blank-input');
    let roundScore = 0;
    
    inputs.forEach((input, index) => {
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = input.dataset.answer.toLowerCase();
      const resultEl = document.getElementById(`blank-${index + 1}-result`);
      
      // Allow some leniency: accepts if user answer is very close
      const isCorrect = userAnswer === correctAnswer || 
                        correctAnswer.includes(userAnswer) && userAnswer.length >= 3 ||
                        levenshteinDistance(userAnswer, correctAnswer) <= 1;
      
      input.disabled = true;
      
      if (isCorrect) {
        input.classList.add('correct');
        roundScore++;
        resultEl.textContent = '✓';
        resultEl.className = 'blank-result correct';
      } else {
        input.classList.add('wrong');
        input.value = correctAnswer; // Show correct answer
        resultEl.textContent = userAnswer || '?';
        resultEl.className = 'blank-result wrong';
      }
    });
    
    this.score += roundScore;
    document.getElementById('tl-score').textContent = `Score: ${this.score}`;
    
    const feedback = document.getElementById('tl-feedback');
    feedback.textContent = `${roundScore} / ${this.currentText.words.length} correct!`;
    feedback.className = `feedback ${roundScore === this.currentText.words.length ? 'correct' : roundScore > 0 ? 'partial' : 'wrong'}`;
    
    // Hide submit, show next
    document.getElementById('tl-submit').style.display = 'none';
    document.getElementById('tl-skip').style.display = 'none';
    
    const nextBtn = document.getElementById('tl-next');
    nextBtn.style.display = 'block';
    nextBtn.textContent = this.usedTextIds.length >= TEXTS_DB.length ? 'Finish' : 'Next Round →';
    nextBtn.onclick = () => {
      nextBtn.style.display = 'none';
      document.getElementById('tl-submit').style.display = 'block';
      document.getElementById('tl-skip').style.display = 'block';
      this.nextRound();
    };
  },
  
  skipRound() {
    // Reveal all answers
    document.querySelectorAll('.blank-input').forEach((input, index) => {
      const correctAnswer = input.dataset.answer;
      input.value = correctAnswer;
      input.disabled = true;
      input.classList.add('revealed');
    });
    
    document.getElementById('tl-feedback').textContent = 'Answers revealed!';
    document.getElementById('tl-feedback').className = 'feedback info';
    
    document.getElementById('tl-submit').style.display = 'none';
    document.getElementById('tl-skip').style.display = 'none';
    
    const nextBtn = document.getElementById('tl-next');
    nextBtn.style.display = 'block';
    nextBtn.textContent = this.usedTextIds.length >= TEXTS_DB.length ? 'Finish' : 'Next Round →';
    nextBtn.onclick = () => {
      nextBtn.style.display = 'none';
      document.getElementById('tl-submit').style.display = 'block';
      document.getElementById('tl-skip').style.display = 'block';
      this.nextRound();
    };
  },
  
  endGame() {
    const maxPossibleScore = TEXTS_DB.length * 10; // 10 words per text on average
    const isNewRecord = ScoreManager.setHighScore('textless', this.score);
    
    showResultScreen({
      gameId: 'textless',
      gameName: 'TextLess',
      score: this.score,
      maxScore: TEXTS_DB.reduce((s, t) => s + t.words.length, 0),
      isNewRecord,
      onPlayAgain: () => Router.show('screen-textless')
    });
  }
};

// Levenshtein distance for fuzzy matching
function levenshteinDistance(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m + 1}, (_, i) => Array.from({length: n + 1}, (_, j) => i === 0 ? j : j === 0 ? i : 0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i-1] === b[j-1]) dp[i][j] = dp[i-1][j-1];
      else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

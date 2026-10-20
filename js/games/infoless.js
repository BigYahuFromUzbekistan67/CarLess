// InfoLess - Car Guessing by Categories

const InfoLess = {
  targetCar: null,
  guesses: [],
  hintsUsed: 0,
  guessCount: 0,
  
  // Category config: key, label, comparison type
  CATEGORIES: [
    { key: 'make',          label: 'Brand',           type: 'exact' },
    { key: 'model',         label: 'Model',           type: 'exact' },
    { key: 'type',          label: 'Body Type',       type: 'exact' },
    { key: 'powerSystem',   label: 'Power System',    type: 'exact' },
    { key: 'engineType',    label: 'Engine Type',     type: 'exact_combustion' },
    { key: 'cylinders',     label: 'Cylinders',       type: 'numeric_combustion' },
    { key: 'displacement',  label: 'Displacement (L)', type: 'numeric_combustion' },
    { key: 'fuel',          label: 'Fuel Type',       type: 'exact_combustion' },
    { key: 'aspiration',    label: 'Aspiration',      type: 'exact_combustion' },
    { key: 'drivetrain',    label: 'Drivetrain',      type: 'exact' },
    { key: 'year',          label: 'Year',            type: 'numeric' },
    { key: 'doors',         label: 'Doors',           type: 'numeric' },
    { key: 'origin',        label: 'Country of Origin', type: 'exact' }
  ],
  
  init() {
    document.addEventListener('screenChange', (e) => {
      if (e.detail.screen === 'screen-infoless') {
        this.startGame();
      }
    });
  },
  
  startGame() {
    this.targetCar = getRandomCar();
    this.guesses = [];
    this.hintsUsed = 0;
    this.guessCount = 0;
    this.renderGame();
  },
  
  renderGame() {
    document.getElementById('il-guess-count').textContent = `Guesses: ${this.guessCount}`;
    document.getElementById('il-hints-count').textContent = `Hints used: ${this.hintsUsed}`;
    
    // Setup autocomplete input
    const input = document.getElementById('il-car-input');
    input.value = '';
    createAutocomplete(input, searchCars, (val) => {
      input.value = val;
    });
    
    document.getElementById('il-submit').onclick = () => this.submitGuess();
    input.onkeydown = (e) => { if (e.key === 'Enter') this.submitGuess(); };
    
    document.getElementById('il-hint-btn').onclick = () => this.useHint();
    document.getElementById('il-give-up').onclick = () => this.giveUp();
    
    // Render category headers
    this.renderCategoryHeaders();
    
    // Render existing guesses
    this.renderAllGuesses();
  },
  
  renderCategoryHeaders() {
    const headerRow = document.getElementById('il-category-headers');
    headerRow.innerHTML = '';
    this.CATEGORIES.forEach(cat => {
      const cell = document.createElement('div');
      cell.className = 'grid-header';
      cell.textContent = cat.label;
      headerRow.appendChild(cell);
    });
  },
  
  submitGuess() {
    const input = document.getElementById('il-car-input');
    const query = input.value.trim();
    if (!query) return;
    
    // Find matching car
    const guessedCar = CARS_DB.find(c => 
      `${c.make} ${c.model}`.toLowerCase() === query.toLowerCase() ||
      c.model.toLowerCase() === query.toLowerCase()
    );
    
    if (!guessedCar) {
      document.getElementById('il-feedback').textContent = 'Car not found! Try the autocomplete suggestions.';
      document.getElementById('il-feedback').className = 'feedback wrong';
      return;
    }
    
    if (this.guesses.find(g => g.id === guessedCar.id)) {
      document.getElementById('il-feedback').textContent = 'You already guessed this car!';
      document.getElementById('il-feedback').className = 'feedback info';
      return;
    }
    
    document.getElementById('il-feedback').textContent = '';
    this.guessCount++;
    this.guesses.push(guessedCar);
    document.getElementById('il-guess-count').textContent = `Guesses: ${this.guessCount}`;
    
    input.value = '';
    
    this.renderAllGuesses();
    
    // Check win condition
    if (guessedCar.id === this.targetCar.id) {
      this.winGame();
    }
  },
  
  renderAllGuesses() {
    const grid = document.getElementById('il-guesses-grid');
    grid.innerHTML = '';
    
    // Render in reverse order (newest first)
    [...this.guesses].reverse().forEach(car => {
      const row = document.createElement('div');
      row.className = 'guess-row';
      
      this.CATEGORIES.forEach(cat => {
        const cell = document.createElement('div');
        cell.className = 'guess-cell';
        
        const result = this.evaluateCategory(cat, car, this.targetCar);
        cell.classList.add(result.status); // correct, wrong, partial, na
        cell.innerHTML = `<span class="cell-value">${result.displayValue}</span>
          ${result.arrow ? `<span class="cell-arrow">${result.arrow}</span>` : ''}`;
        
        row.appendChild(cell);
      });
      
      grid.appendChild(row);
    });
  },
  
  evaluateCategory(cat, guessedCar, targetCar) {
    const isCombustion = targetCar.powerSystem === 'Combustion';
    const guessIsCombustion = guessedCar.powerSystem === 'Combustion';
    
    // Get the actual values
    let guessVal, targetVal, displayValue, status, arrow;
    
    switch(cat.key) {
      case 'make':
        guessVal = guessedCar.make;
        targetVal = targetCar.make;
        displayValue = guessVal;
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      case 'model':
        guessVal = guessedCar.model;
        targetVal = targetCar.model;
        displayValue = guessVal;
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      case 'type':
        guessVal = guessedCar.type;
        targetVal = targetCar.type;
        displayValue = guessVal;
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      case 'powerSystem':
        guessVal = guessedCar.powerSystem;
        targetVal = targetCar.powerSystem;
        displayValue = guessVal;
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      case 'engineType':
        if (!isCombustion) { return { displayValue: 'N/A', status: 'na', arrow: '' }; }
        if (!guessIsCombustion || !guessedCar.engine) { return { displayValue: '—', status: 'wrong', arrow: '' }; }
        guessVal = guessedCar.engine.type;
        targetVal = targetCar.engine?.type;
        displayValue = guessVal || '—';
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      case 'cylinders':
        if (!isCombustion) { return { displayValue: 'N/A', status: 'na', arrow: '' }; }
        if (!guessIsCombustion || !guessedCar.engine) { return { displayValue: '—', status: 'wrong', arrow: '' }; }
        guessVal = guessedCar.engine.cylinders;
        targetVal = targetCar.engine?.cylinders;
        displayValue = guessVal !== undefined ? String(guessVal) : '—';
        if (guessVal === targetVal) { status = 'correct'; arrow = ''; }
        else if (guessVal < targetVal) { status = 'wrong'; arrow = '↑'; }
        else { status = 'wrong'; arrow = '↓'; }
        break;
        
      case 'displacement':
        if (!isCombustion) { return { displayValue: 'N/A', status: 'na', arrow: '' }; }
        if (!guessIsCombustion || !guessedCar.engine) { return { displayValue: '—', status: 'wrong', arrow: '' }; }
        guessVal = guessedCar.engine.displacement;
        targetVal = targetCar.engine?.displacement;
        displayValue = guessVal !== undefined ? `${guessVal}L` : '—';
        if (guessVal === targetVal) { status = 'correct'; arrow = ''; }
        else if (guessVal < targetVal) { status = 'wrong'; arrow = '↑'; }
        else { status = 'wrong'; arrow = '↓'; }
        break;
        
      case 'fuel':
        if (!isCombustion) { return { displayValue: 'N/A', status: 'na', arrow: '' }; }
        if (!guessIsCombustion || !guessedCar.engine) { return { displayValue: '—', status: 'wrong', arrow: '' }; }
        guessVal = guessedCar.engine.fuel;
        targetVal = targetCar.engine?.fuel;
        displayValue = guessVal || '—';
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      case 'aspiration':
        if (!isCombustion) { return { displayValue: 'N/A', status: 'na', arrow: '' }; }
        if (!guessIsCombustion || !guessedCar.engine) { return { displayValue: '—', status: 'wrong', arrow: '' }; }
        guessVal = guessedCar.engine.aspiration;
        targetVal = targetCar.engine?.aspiration;
        displayValue = guessVal || '—';
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      case 'drivetrain':
        guessVal = guessedCar.drivetrain;
        targetVal = targetCar.drivetrain;
        displayValue = guessVal;
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      case 'year':
        guessVal = guessedCar.year;
        targetVal = targetCar.year;
        displayValue = String(guessVal);
        if (guessVal === targetVal) { status = 'correct'; arrow = ''; }
        else if (guessVal < targetVal) { status = 'wrong'; arrow = '↑'; }
        else { status = 'wrong'; arrow = '↓'; }
        break;
        
      case 'doors':
        guessVal = guessedCar.doors;
        targetVal = targetCar.doors;
        displayValue = String(guessVal);
        if (guessVal === targetVal) { status = 'correct'; arrow = ''; }
        else if (guessVal < targetVal) { status = 'wrong'; arrow = '↑'; }
        else { status = 'wrong'; arrow = '↓'; }
        break;
        
      case 'origin':
        guessVal = guessedCar.origin;
        targetVal = targetCar.origin;
        displayValue = guessVal;
        status = guessVal === targetVal ? 'correct' : 'wrong';
        break;
        
      default:
        return { displayValue: '?', status: 'wrong', arrow: '' };
    }
    
    return { displayValue, status, arrow: arrow || '' };
  },
  
  useHint() {
    // Find a category that hasn't been fully revealed yet
    const correctCategories = new Set();
    
    if (this.guesses.length > 0) {
      this.CATEGORIES.forEach(cat => {
        const result = this.evaluateCategory(cat, this.targetCar, this.targetCar);
        if (result.status === 'correct') correctCategories.add(cat.key);
      });
    }
    
    // Find unrevealed category
    const revealed = this.guesses.flatMap(g => 
      this.CATEGORIES
        .filter(cat => this.evaluateCategory(cat, g, this.targetCar).status === 'correct')
        .map(cat => cat.key)
    );
    
    const unrevealed = this.CATEGORIES.filter(c => !revealed.includes(c.key) && 
      this.evaluateCategory(c, this.targetCar, this.targetCar).status !== 'na');
    
    if (unrevealed.length === 0) {
      document.getElementById('il-feedback').textContent = 'No more hints available!';
      return;
    }
    
    // Show a hint about a random unrevealed category
    const hintCat = unrevealed[Math.floor(Math.random() * unrevealed.length)];
    const result = this.evaluateCategory(hintCat, this.targetCar, this.targetCar);
    
    this.hintsUsed++;
    document.getElementById('il-hints-count').textContent = `Hints used: ${this.hintsUsed}`;
    
    const hintEl = document.getElementById('il-hint-display');
    hintEl.textContent = `💡 Hint: ${hintCat.label} is "${result.displayValue}"`;
    hintEl.style.display = 'block';
    hintEl.className = 'hint-item animate-in';
    
    setTimeout(() => { hintEl.style.display = 'none'; }, 5000);
  },
  
  giveUp() {
    this.revealAnswer();
    
    setTimeout(() => {
      showResultScreen({
        gameId: 'infoless',
        gameName: 'InfoLess',
        score: 0,
        maxScore: this.guessCount,
        isNewRecord: false,
        message: `The car was ${this.targetCar.make} ${this.targetCar.model} (${this.targetCar.year}). Better luck next time!`,
        onPlayAgain: () => Router.show('screen-infoless')
      });
    }, 3000);
  },
  
  async revealAnswer() {
    const revealEl = document.getElementById('il-answer-reveal');
    revealEl.style.display = 'block';
    
    const car = this.targetCar;
    const imgUrl = await WikimediaAPI.getCarImage(car, 300);
    
    revealEl.innerHTML = `
      <div class="reveal-card">
        <h3>The car was:</h3>
        ${imgUrl ? `<img src="${imgUrl}" alt="${car.make} ${car.model}" class="car-thumb">` : ''}
        <h2>${car.make} ${car.model} (${car.year})</h2>
      </div>
    `;
  },
  
  async winGame() {
    const car = this.targetCar;
    const imgUrl = await WikimediaAPI.getCarImage(car, 300);
    
    // Score: penalize for hints and extra guesses
    const rawScore = Math.max(0, 100 - (this.guessCount - 1) * 10 - this.hintsUsed * 15);
    const isNewRecord = ScoreManager.setHighScore('infoless', rawScore);
    
    showResultScreen({
      gameId: 'infoless',
      gameName: 'InfoLess',
      score: rawScore,
      maxScore: 100,
      isNewRecord,
      message: `You found it in ${this.guessCount} guess${this.guessCount > 1 ? 'es' : ''} with ${this.hintsUsed} hint${this.hintsUsed !== 1 ? 's' : ''}!`,
      onPlayAgain: () => Router.show('screen-infoless')
    });
  }
};

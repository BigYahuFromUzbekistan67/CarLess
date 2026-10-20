// PriceLess - Car Price Comparison Game

const PriceLess = {
  leftCar: null,
  rightCar: null,
  usedCarIds: [],
  score: 0,
  streak: 0,
  
  init() {
    document.addEventListener('screenChange', (e) => {
      if (e.detail.screen === 'screen-priceless') {
        this.startGame();
      }
    });
  },
  
  startGame() {
    this.usedCarIds = [];
    this.score = 0;
    this.streak = 0;
    this.setupInitialCars();
  },
  
  async setupInitialCars() {
    const [car1, car2] = getRandomCars(2);
    this.leftCar = car1;
    this.rightCar = car2;
    this.usedCarIds = [car1.id, car2.id];
    
    await this.renderGame();
  },
  
  async renderGame() {
    document.getElementById('pl-score').textContent = `Score: ${this.score}`;
    document.getElementById('pl-streak').textContent = `Streak: ${this.streak}`;
    document.getElementById('pl-highscore').textContent = `Best: ${ScoreManager.getHighScore('priceless')}`;
    
    // Render left car
    await this.renderCarCard('left', this.leftCar, true); // price visible after correct guess
    // Render right car  
    await this.renderCarCard('right', this.rightCar, false); // price hidden
    
    // Setup buttons
    document.getElementById('pl-pick-left').onclick = () => this.pickCar('left');
    document.getElementById('pl-pick-right').onclick = () => this.pickCar('right');
    
    document.getElementById('pl-feedback').textContent = '';
  },
  
  async renderCarCard(side, car, showPrice) {
    const card = document.getElementById(`pl-card-${side}`);
    const imgContainer = card.querySelector('.car-img-container');
    const nameEl = card.querySelector('.car-name');
    const priceEl = card.querySelector('.car-price');
    const yearEl = card.querySelector('.car-year');
    
    nameEl.textContent = `${car.make} ${car.model}`;
    yearEl.textContent = `${car.year}`;
    
    if (showPrice && car.price) {
      priceEl.textContent = `$${car.price.toLocaleString()}`;
      priceEl.style.display = 'block';
    } else {
      priceEl.style.display = 'none';
    }
    
    // Load image
    showLoading(imgContainer, 'Loading...');
    const imgUrl = await WikimediaAPI.getCarImage(car, 350);
    imgContainer.innerHTML = '';
    
    if (imgUrl) {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.className = 'car-thumb';
      img.alt = `${car.make} ${car.model}`;
      imgContainer.appendChild(img);
    } else {
      imgContainer.innerHTML = `<div class="no-image"><span>🚗</span></div>`;
    }
  },
  
  async pickCar(side) {
    const pickedCar = side === 'left' ? this.leftCar : this.rightCar;
    const otherCar = side === 'left' ? this.rightCar : this.leftCar;
    const feedback = document.getElementById('pl-feedback');
    
    // Disable buttons during feedback
    document.getElementById('pl-pick-left').disabled = true;
    document.getElementById('pl-pick-right').disabled = true;
    
    const isCorrect = pickedCar.price >= otherCar.price;
    
    // Always show prices
    await this.revealPrice('left', this.leftCar);
    await this.revealPrice('right', this.rightCar);
    
    if (isCorrect) {
      this.score++;
      this.streak++;
      feedback.textContent = `✅ Correct! ${pickedCar.make} ${pickedCar.model} ($${pickedCar.price.toLocaleString()}) is more expensive!`;
      feedback.className = 'feedback correct';
      
      ScoreManager.setHighScore('priceless', this.score);
      document.getElementById('pl-score').textContent = `Score: ${this.score}`;
      document.getElementById('pl-streak').textContent = `Streak: ${this.streak}`;
      document.getElementById('pl-highscore').textContent = `Best: ${ScoreManager.getHighScore('priceless')}`;
      
      setTimeout(async () => {
        // Winning car (picked side) moves to left, new car appears on right
        // Left car always stays (with price visible), right becomes new
        
        if (side === 'right') {
          // Right was more expensive, it becomes the new "left"
          this.leftCar = this.rightCar;
        }
        // else left was more expensive, leftCar stays as-is
        
        // Get new right car
        const [newCar] = getRandomCars(1, this.usedCarIds);
        if (!newCar) {
          // No more cars
          showResultScreen({
            gameId: 'priceless',
            gameName: 'PriceLess',
            score: this.score,
            maxScore: 0,
            isNewRecord: ScoreManager.setHighScore('priceless', this.score),
            onPlayAgain: () => Router.show('screen-priceless')
          });
          return;
        }
        
        this.rightCar = newCar;
        this.usedCarIds.push(newCar.id);
        
        document.getElementById('pl-pick-left').disabled = false;
        document.getElementById('pl-pick-right').disabled = false;
        
        await this.renderGame();
        // Left car price should stay visible
        await this.revealPrice('left', this.leftCar);
      }, 1800);
      
    } else {
      // Wrong answer
      feedback.textContent = `❌ Wrong! ${otherCar.make} ${otherCar.model} ($${otherCar.price.toLocaleString()}) was more expensive. Score reset!`;
      feedback.className = 'feedback wrong';
      
      const isNewRecord = ScoreManager.setHighScore('priceless', this.score);
      
      setTimeout(() => {
        showResultScreen({
          gameId: 'priceless',
          gameName: 'PriceLess',
          score: this.score,
          maxScore: 0,
          isNewRecord,
          message: `You had a streak of ${this.streak}! Keep going!`,
          onPlayAgain: () => Router.show('screen-priceless')
        });
      }, 2500);
    }
  },
  
  async revealPrice(side, car) {
    const card = document.getElementById(`pl-card-${side}`);
    const priceEl = card.querySelector('.car-price');
    priceEl.textContent = `$${car.price.toLocaleString()}`;
    priceEl.style.display = 'block';
  }
};

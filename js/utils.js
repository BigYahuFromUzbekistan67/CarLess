// CarLess - Shared Utilities

// ============================================================
// SCORE MANAGEMENT
// ============================================================
const ScoreManager = {
  getHighScore(gameId) {
    const scores = JSON.parse(localStorage.getItem('carless_highscores') || '{}');
    return scores[gameId] || 0;
  },
  
  setHighScore(gameId, score) {
    const scores = JSON.parse(localStorage.getItem('carless_highscores') || '{}');
    if (score > (scores[gameId] || 0)) {
      scores[gameId] = score;
      localStorage.setItem('carless_highscores', JSON.stringify(scores));
      return true; // new record
    }
    return false;
  },
  
  getAllHighScores() {
    return JSON.parse(localStorage.getItem('carless_highscores') || '{}');
  }
};

// ============================================================
// WIKIMEDIA IMAGE API
// ============================================================
const WikimediaAPI = {
  cache: {},
  
  async getImageUrl(filename, width = 400) {
    if (this.cache[filename]) return this.cache[filename];
    
    try {
      const encoded = encodeURIComponent(filename);
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encoded}&prop=imageinfo&iiprop=url&iiurlwidth=${width}&format=json&origin=*`;
      const response = await fetch(url);
      const data = await response.json();
      const pages = data.query.pages;
      const page = Object.values(pages)[0];
      
      if (page.imageinfo && page.imageinfo[0]) {
        const imgUrl = page.imageinfo[0].thumburl || page.imageinfo[0].url;
        this.cache[filename] = imgUrl;
        return imgUrl;
      }
    } catch (e) {
      console.warn('Wikimedia API error for', filename, e);
    }
    return null;
  },
  
  async getCarImage(car, width = 400) {
    if (!car.wikimediaImage) return null;
    return this.getImageUrl(car.wikimediaImage, width);
  },

  async getLogoUrl(logo, width = 200) {
    if (!logo.wikimediaFile) return null;
    return this.getImageUrl(logo.wikimediaFile, width);
  },

  async getPartImage(part, width = 400) {
    if (!part.wikimediaImage) return null;
    return this.getImageUrl(part.wikimediaImage, width);
  }
};

// ============================================================
// AUTOCOMPLETE COMPONENT
// ============================================================
function createAutocomplete(inputEl, suggestions, onSelect) {
  const wrapper = inputEl.parentElement;
  let dropdown = wrapper.querySelector('.autocomplete-dropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.className = 'autocomplete-dropdown';
    wrapper.appendChild(dropdown);
  }
  
  inputEl.addEventListener('input', () => {
    const query = inputEl.value.trim();
    if (query.length < 2) {
      dropdown.innerHTML = '';
      dropdown.style.display = 'none';
      return;
    }
    
    const matches = suggestions(query);
    if (matches.length === 0) {
      dropdown.style.display = 'none';
      return;
    }
    
    dropdown.innerHTML = matches.map(m => 
      `<div class="autocomplete-item" data-value="${m}">${highlightMatch(m, query)}</div>`
    ).join('');
    dropdown.style.display = 'block';
    
    dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
      item.addEventListener('click', () => {
        inputEl.value = item.dataset.value;
        dropdown.style.display = 'none';
        onSelect(item.dataset.value);
      });
    });
  });
  
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
  
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.style.display = 'none';
    }
  });
  
  return dropdown;
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

// ============================================================
// ROUTER / SCREEN MANAGER
// ============================================================
const Router = {
  currentScreen: null,
  screenHistory: [],
  
  show(screenId, data = {}) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
    });
    
    const screen = document.getElementById(screenId);
    if (screen) {
      screen.classList.add('active');
      this.screenHistory.push(screenId);
      this.currentScreen = screenId;
    }
    
    // Trigger screen init event
    document.dispatchEvent(new CustomEvent('screenChange', { 
      detail: { screen: screenId, data } 
    }));
  },
  
  goHome() {
    // Clean up any ongoing games
    document.dispatchEvent(new CustomEvent('gameEnd', {}));
    this.show('screen-home');
  }
};

// ============================================================
// RESULT SCREEN
// ============================================================
function showResultScreen(options) {
  const { gameId, gameName, score, maxScore, isNewRecord, message, onPlayAgain, onHome } = options;
  
  const resultScreen = document.getElementById('screen-result');
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : score;
  
  document.getElementById('result-game-name').textContent = gameName;
  document.getElementById('result-score').textContent = typeof maxScore === 'number' && maxScore > 0 
    ? `${score} / ${maxScore}` 
    : score;
  document.getElementById('result-highscore').textContent = ScoreManager.getHighScore(gameId);
  document.getElementById('result-message').textContent = message || getResultMessage(pct, score);
  document.getElementById('result-new-record').style.display = isNewRecord ? 'block' : 'none';
  
  document.getElementById('result-play-again').onclick = onPlayAgain || (() => Router.goHome());
  document.getElementById('result-home').onclick = () => Router.goHome();
  
  Router.show('screen-result');
}

function getResultMessage(pct, score) {
  if (pct === 100) return "Perfect score! You're a true car enthusiast! 🏆";
  if (pct >= 80) return "Excellent! You really know your cars! 🥇";
  if (pct >= 60) return "Good job! Room for improvement though. 🥈";
  if (pct >= 40) return "Not bad, keep practicing! 🥉";
  if (score === 0) return "Better luck next time! Study up! 📚";
  return "Keep learning and try again! 🚗";
}

// ============================================================
// PIXELATION CANVAS UTILITY
// ============================================================
function pixelateImage(img, pixelSize) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.naturalWidth || 400;
  canvas.height = img.naturalHeight || 300;
  
  // Draw image at small size then scale up
  const smallW = Math.max(1, Math.floor(canvas.width / pixelSize));
  const smallH = Math.max(1, Math.floor(canvas.height / pixelSize));
  
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0, smallW, smallH);
  ctx.drawImage(canvas, 0, 0, smallW, smallH, 0, 0, canvas.width, canvas.height);
  
  return canvas.toDataURL();
}

// ============================================================
// COLOR BAR UTILITY (for BadgeLess level 3)
// ============================================================
function extractColors(img, numColors = 5) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 100;
  canvas.height = 100;
  ctx.drawImage(img, 0, 0, 100, 100);
  
  const imageData = ctx.getImageData(0, 0, 100, 100).data;
  const colorMap = {};
  
  for (let i = 0; i < imageData.length; i += 4) {
    const r = Math.round(imageData[i] / 32) * 32;
    const g = Math.round(imageData[i+1] / 32) * 32;
    const b = Math.round(imageData[i+2] / 32) * 32;
    const a = imageData[i+3];
    
    if (a < 50) continue; // skip transparent
    
    const key = `${r},${g},${b}`;
    colorMap[key] = (colorMap[key] || 0) + 1;
  }
  
  // Sort by frequency and return top colors
  return Object.entries(colorMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, numColors)
    .map(([color, count]) => ({ color: `rgb(${color})`, count }));
}

function renderColorBar(colors, container) {
  const total = colors.reduce((s, c) => s + c.count, 0);
  container.innerHTML = '';
  container.className = 'color-bar';
  colors.forEach(c => {
    const seg = document.createElement('div');
    seg.className = 'color-segment';
    seg.style.backgroundColor = c.color;
    seg.style.width = `${(c.count / total) * 100}%`;
    container.appendChild(seg);
  });
}

// ============================================================
// SHUFFLE UTILITY
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n = 1, exclude = []) {
  const pool = arr.filter(x => !exclude.includes(x));
  return shuffle(pool).slice(0, n);
}

// ============================================================
// HOME BUTTON
// ============================================================
function initHomeButton() {
  document.querySelectorAll('.home-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Opravdu chceš opustit hru? Skóre nebude uloženo.')) {
        Router.goHome();
      }
    });
  });
}

// ============================================================
// LOADING SPINNER
// ============================================================
function showLoading(el, text = 'Loading...') {
  el.innerHTML = `<div class="loading-spinner"><div class="spinner"></div><p>${text}</p></div>`;
}

function hideLoading(el) {
  const spinner = el.querySelector('.loading-spinner');
  if (spinner) spinner.remove();
}

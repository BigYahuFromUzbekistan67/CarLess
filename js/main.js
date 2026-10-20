// CarLess - Main Application Entry Point

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all games
  BadgeLess.init();
  PriceLess.init();
  FactLess.init();
  InfoLess.init();
  CommLess.init();
  PartLess.init();
  TextLess.init();
  
  // Show home screen
  Router.show('screen-home');
  updateHomeHighScores();
  
  // Setup game card click handlers
  document.querySelectorAll('[data-game]').forEach(card => {
    card.addEventListener('click', () => {
      const game = card.dataset.game;
      Router.show(`screen-${game}`);
    });
  });
  
  // Home button on all screens (data-goto-home)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-goto-home]');
    if (!btn) return;
    if (Router.currentScreen === 'screen-home') return;
    const confirmed = confirm('Return to home? Current progress will be lost.');
    if (confirmed) {
      Router.goHome();
      updateHomeHighScores();
    }
  });
  
  // Also update scores when returning home
  document.addEventListener('screenChange', (e) => {
    if (e.detail.screen === 'screen-home') {
      updateHomeHighScores();
    }
  });
});

function updateHomeHighScores() {
  const games = ['badgeless', 'priceless', 'factless', 'infoless', 'commless', 'partless', 'textless'];
  games.forEach(g => {
    const el = document.getElementById(`hs-${g}`);
    if (el) {
      const score = ScoreManager.getHighScore(g);
      el.textContent = score > 0 ? score : '—';
    }
  });
}

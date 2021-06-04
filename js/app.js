const newGame = new Game;

const startGameButton = document.getElementById('begin-game');

startGameButton.addEventListener('click', () => {
    newGame.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
})
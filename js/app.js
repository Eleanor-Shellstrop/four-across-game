const newGame = new Game;

const startGameButton = document.getElementById('begin-game');

startGameButton.addEventListener('click', () => {
    newGame.startGame();
    startGameButton.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

document.addEventListener('keydown', function(event) {
    newGame.handleKeydown(event);
});
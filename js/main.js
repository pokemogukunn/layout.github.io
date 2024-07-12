document.addEventListener('DOMContentLoaded', function() {
    const startGameBtn = document.getElementById('start-game-btn');
    const gameSection = document.querySelector('.game');
    const gameCanvas = document.getElementById('game-canvas');

    let gameStarted = false;

    startGameBtn.addEventListener('click', function() {
        startGame();
    });

    function startGame() {
        gameStarted = true;
        startGameBtn.style.display = 'none';
        gameSection.style.display = 'block';
        initializeGame();
    }

    function initializeGame() {
        // ゲームの初期化ロジックをここに記述する（例：キャンバスにゲームを描画するなど）
        const ctx = gameCanvas.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        
        // ここにゲームのロジックを追加してください
        // 例えば、キャラクターや敵の描画、動作の設定などを行います
    }
});

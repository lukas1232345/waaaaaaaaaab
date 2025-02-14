function gameOver() {
  isGameOver = true;

  // 게임 오버 이미지/ GIF URL 배열
  const images = [
    'https://t1.daumcdn.net/cafeattach/aVeZ/081db7ea29b6788a058daeaf0441820f157c6782',
    'https://t1.daumcdn.net/cafeattach/aVeZ/122955ed013b50302adbca7a8dcb5321fb4decc8',
    'https://t1.daumcdn.net/cafeattach/aVeZ/7c819cfda46f960c1898331499bca730822ffb87',
    'https://t1.daumcdn.net/cafeattach/aVeZ/e1da92666e280ae5535d56b752532e8635f44bdc'
  ];

  // 배열에서 랜덤하게 URL 선택
  const randomImage = images[Math.floor(Math.random() * images.length)];
  let img = new Image();
  img.crossOrigin = "anonymous"; // CORS 문제 해결을 위해 추가
  img.onload = function() {
    // 캔버스 전체를 지우고 이미지 그리기
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 게임 오버 후 점수 표시 (선택사항)
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + Math.floor(score), canvas.width / 2 - 50, canvas.height - 50);
  };

  img.src = randomImage;

  // 3초 후 게임 상태 초기화 후 재시작
  setTimeout(() => {
    isGameOver = false;
    // 기존의 초기화 코드
    playerX = canvas.width / 4;
    playerY = canvas.height - playerHeight - 30;
    velocityY = 0;
    playerSpeed = basePlayerSpeed;
    chaserOffset = 150;
    chaser.x = playerX - chaserOffset;
    chaser.y = playerY;
    bottomObstacles = [];
    topObstacles = [];
    speedUpItems = [];
    gameSpeed = baseGameSpeed;
    score = 0;
    gameLoop();
  }, 3000);
}

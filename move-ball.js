    var velocityX = 3;
    var velocityY = 2;
    var positionX = 0;
    var positionY = 0;
    var maxX = 1200;
    var maxY = 500;
    var ball = document.getElementById('ball');

    function moveBall() {
        positionX += velocityX;
        positionY += velocityY;
        ball.style.left = positionX + 'px';
        ball.style.top = positionY + 'px';
        if ((positionX === maxX) || (positionX === 0)) {
            velocityX *= -1;
            ball.style.background = 'rgb(143,188,143)'
        }
        if ((positionY === maxY) || (positionY === 0)) {
            velocityY *= -1;
            ball.style.background = 'rgb(47,79,79)'
        }
    }

setInterval(moveBall, 5)

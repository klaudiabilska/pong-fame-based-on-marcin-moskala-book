const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

 // Constants
 const CANVAS_HEIGHT = canvas.height; // wysokość płótna
 const CANVAS_WIDTH = canvas.width; // szerokość płótna

 const BOARD_Y = 50; // y obydwu punktacji
 const BOARD_P1_X = 300; // x punktacji gracza 1
 const BOARD_P2_X = 500; // x punktacji gracza 2

 const PADDLE_WIDTH = 20; // szerokość paletki
 const PADDLE_HEIGHT = 100; // wysokość paletki
 const PADDLE_P1_X = 10; // pozycja x paletki gracza 1
 const PADDLE_P2_X = 770; // pozycja x paletki gracza 2
 const PADDLE_START_Y = (CANVAS_HEIGHT - PADDLE_HEIGHT) / 2;
// początkowa pozycja y paletek

 const BALL_R = 15; // promień piłki (decyduje o wielkości)
 const BALL_START_X = CANVAS_WIDTH / 2;
 // pozycja początkowa x środka kulki
 const BALL_START_Y = CANVAS_HEIGHT / 2;
 // pozycja początkowa y środka kulki
 const BALL_START_DX = 4.5;
 // początkowa prędkość lotu piłeczki w płaszczyźnie x
 const BALL_START_DY = 1.5;
 // początkowa prędkość lotu piłeczki w płaszczyźnie y
 const STATE_CHANGE_INTERVAL = 20;


// Drawing functions 
function drawPaddle(x, y) {
    ctx.fillRect(x, y, 20, 100);
}

drawPaddle(770, 100);
drawPaddle(10, 300);

ctx.font = "30px Arial";

function drawText(text, x ,y) {
    ctx.fillText(text, x, y);
}

drawText("3", 300, 50)
drawText("6", 500, 50)

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y ,r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

drawCircle(400, 250, 15)

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

 // State
 let ballX = BALL_START_X;
 let ballY = BALL_START_Y;
 let ballDX = BALL_START_DX;
 let ballDY = BALL_START_DY;
 let p1PaddleY = PADDLE_START_Y;
 let p2PaddleY = PADDLE_START_Y;
 let p1Points = 0;
 let p2Points = 0;




 function drawState() {
    clearCanvas();
    drawPoints(p1Points.toString(), BOARD_P1_X);
    drawPoints(p2Points.toString(), BOARD_P2_X);
    drawBall(ballX, ballY);
    drawPaddle(PADDLE_P1_X, p1PaddleY);
    drawPaddle(PADDLE_P2_X, p2PaddleY);
}

function updateState() {
///tutaj zmieniamy stan
}

function updateAndDrawState() {
    updateState();
drawState();
    
}

setInterval(updateAndDrawState, STATE_CHANGE_INTERVAL);



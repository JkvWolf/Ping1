var paddle1;
var paddle2;
var ball;
var score1 = 0;
var score2 = 0;
var topEdge;
var bottomEdge;
function preload(){
 
}

function setup() {
  createCanvas(500, 500);
 
    paddle1 = createSprite(450, 250, 25, 200);
    
    paddle2 = createSprite(50, 250, 25, 200);
 
    ball = createSprite(250, 250, 20, 20);
    
    topEdge = createSprite(250, 0, 1, 1);
    topEdge.visible = false;
    
    bottomEdge = createSprite(250, 500, 1, 1);
    bottomEdge.visible = false;
 
}

function draw() {
  background(180);
  
  if(keyDown("SPACE")) {
    ball.setVelocity(3, 5);
  }
  
  ball.bounceOff(paddle1);
  ball.bounceOff(paddle2);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  paddle1.collide(topEdge);
  paddle1.collide(bottomEdge);
  paddle2.collide(topEdge);
  paddle2.collide(bottomEdge);

  control();
  
  
  
  drawSprites();
}

function control() {
    
    if (keyDown("UP_ARROW"){
        paddle1.y = paddle1.y+3
    }
    
    if (keyDown("DOWN_ARROW"){
        paddle1.y = paddle1.y-3
    }
    
    if (keyDown("W"){
        paddle2.y = paddle2.y+3
    }
    
    if (keyDown("S"){
        paddle2.y = paddle2.y-3
    }
    
}

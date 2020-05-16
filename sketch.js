const LEFT = 1, RIGHT = 2, UP = 3, DOWN =4;

var snake;

function setup() {
  createCanvas(800,800);

  snake = new Snake();
}

function draw() {
  background(0);  

  snake.move();

  ifArrowsPressed();

  drawSprites();
}

function ifArrowsPressed(){
  if(keyWentDown(LEFT_ARROW)){
    snake.turn(LEFT);
    console.log("Sketch-Turn left");
  }
  if(keyWentDown(RIGHT_ARROW)){
    snake.turn(RIGHT);
    console.log("Sketch-Turn right");
  }
  if(keyWentDown(UP_ARROW)){
    snake.turn(UP);
    console.log("Sketch-Turn up");
  }
  if(keyWentDown(DOWN_ARROW)){
    snake.turn(DOWN);
    console.log("Sketch-Turn down");
  }
}
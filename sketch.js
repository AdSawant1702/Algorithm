

var movingRect, fixedRect;
function setup() {
  createCanvas(800, 400);
  movingRect = createSprite(200, 200, 30, 60);
  fixedRect = createSprite(600, 200, 60, 30);
  rect1 = createSprite(500, 200, 60, 30);
  rect2 = createSprite(700, 200, 60, 30);


  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  rect1.shapeColor = "green";
  rect2.shapeColor = "red";

  movingRect.velocityX = 3;
  fixedRect.velocityX = -3;
  rect1.velocityX = -4;
  rect2.velocityX = -4;
}

function draw() {
  background(0);
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  if (isTouching(movingRect, rect2)) {
    movingRect.shapeColor = "pink";
    rect2.shapeColor = "pink";
  } else {
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "red";
  }

  if (isTouching(movingRect, rect1)) {
    movingRect.shapeColor = "pink";
    rect1.shapeColor = "pink";
  } else {
    movingRect.shapeColor = "blue";
    rect1.shapeColor = "green";
  }


  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
  } else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  bounceoff(movingRect, rect2);

  //console.log(movingRect.x - fixedRect.x);
  //console.log(fixedRect.width / 2 + movingRect.width / 2);

  drawSprites();
}



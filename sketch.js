var bullet, wall;
var weight;
var thickness;
var speed ;



function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(200, 200, 50, 10);
  bullet.shapeColor = "white";
  thickness = random(22, 83);
  speed = 200;
  wall = createSprite(1200, 200, thickness, height / 2)
  wall.shapeColor = color(80, 80, 80)
  weight = random(30, 52)
  bullet.velocityX = speed;
  
}

function draw() {
  background("black");
  drawSprites();
  if (isRectangleTouching(bullet, wall)) {
    console.log("It Hit!!!!");
    bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if (deformation <= 10) {
      wall.shapeColor = color("green");
      textSize(32);
      stroke("yellow");
      text("That's a good wall",500,200);
    } else if (deformation > 10) {
      textSize(32);
      stroke("yellow");
      wall.shapeColor = color('red');
      text("Too weak", 500,200);
    }
  }

}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var balls = [];
// var array1 = [200, "Riyansh", 500, 400];
// console.log(array1[2]);

// array1.push(600);
// console.log(array1);

// array1.pop();
// console.log(array1);

var bigArray = [
  [10, 60],
  [200, 500, 95],
  [52, 32],
];
// console.log(bigArray);
// console.log(bigArray[1]);
// console.log(bigArray[2][1]);
// console.log(bigArray[1][1]);
// console.log(bigArray[0][1]);
bigArray.push([20, 46, 63]);
console.log(bigArray);

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  showCannonBalls();
}
function showCannonBalls() {
  // balls[index].display()
  //last index = array length -1
  // balls[0].display()
  // balls[1].display()
  // .
  // .
  // balls[balls.length-1].display()
  // for(var i= starting point; condition to stop; increment/decrement ){}

  for (var i = 0; i <= balls.length - 1; i++) {
    balls[i].display();
  }

  //balls=[cannonBall1, cannonball2 cannonball3], length = 3
  // 1st iteration: i=0: balls[0].display() i++ = 1
  // 2nd iteration: i=1: balls[1].displya() i++ =2
  // 3nd iteration: i=2: balls[2].displya() i++ =3
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
    //balls=[cannonBall1, cannonball2,....]
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    // cannonBall.shoot();
    balls[balls.length - 1].shoot();
  }
}

// sum(10,20,30)
// sum(30,40,50)

// function sum(a,b,c){
//   var sum = a+b+c
//   console.log(sum)
// }

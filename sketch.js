var bg,bgImg;
var player,shooterImg;
var thanos,thanosImg;
var fireballImg,fireball;

function preload(){
  bgImg = loadImage("assets/bg.jpg");
  shooterImg = loadImage("assets/shooter_1.png");
  shooter_shooting = loadImage("assets/shooter_2.png")
  thanosImg = loadImage("assets/thanos.png");
  fireballImg = loadImage("assets/fireball.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;

  player = createSprite(displayWidth-1300,displayHeight-300,50,50);
  player.addImage(shooterImg);
  player.scale = 0.3;
  player.debug = true;
  player.setCollider("rectangle",0,0,300,300);
}

function draw(){
  background(0);





  drawSprites();
}
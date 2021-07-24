

var background_img, backgr;
var scm_img, scm
var stars, stars_img;
var obstacle, obstacle_img
var engine, world;

function preload() {
  background_img = loadImage("images/Space.png");

  scm_img = loadImage("images/Scm.png");

  star_img = loadImage("images/Star.png");

  obstacle_img= loadImage("images/Obstacle.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
 


  backgr = createSprite(windowWidth/2,400,50,50);
  backgr.addImage(background_img);
  backgr.scale=2;

  scm = createSprite(windowWidth/2, windowHeight, 10, 10);
  scm.addImage(scm_img);
  scm.scale=.8;

  StarsGroup = new Group();
  obstacleGroup = new Group();
  

}

function draw() {

  backgr.velocityY=3
  if(backgr.y>650) {
    backgr.y=windowHeight/2;
  }

  if(keyWentDown(LEFT_ARROW)) {
    scm.velocityX=-10;
  }
  if(keyWentUp(LEFT_ARROW)) {
    scm.velocityX=0;
  }
  if(keyWentDown(RIGHT_ARROW)) {
    scm.velocityX=10;
  }
  if(keyWentUp(RIGHT_ARROW)) {
    scm.velocityX=0;
  }
  if(scm.x<=0||scm.x>=windowWidth) {
    scm.x=windowWidth/2;
  }

  spawnStars();
  spawnObstacle();

  drawSprites();

}

function spawnStars() {
  if(World.frameCount%40===0){
    stars = createSprite(Math.round(random(100, windowWidth-100)),0,10,10);
    stars.addImage(star_img);
    stars.scale=0.5;
    stars.velocityY=10;

    StarsGroup.add(stars); 
  }
}

function spawnObstacle() {
  if(World.frameCount%200===0) {
    obstacle = createSprite(Math.round(random(100, windowWidth-100)),0,10,10);
    obstacle.addImage(obstacle_img);
    obstacle.scale=0.25;
    obstacle.velocityY=20;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}


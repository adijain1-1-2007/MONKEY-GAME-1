
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score =0;
var SurvivalTime;

var PLAY = 1;
var END = 0;
var gameState=PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
score=0;
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
}


function draw() {
background("");
  if (gameState===PLAY){
    food();
    stones();
      if(ground.x<0){
         ground.x=ground.width/2;
         }
    if(keyDown("space")){
       monkey.velocityY=-10;
    
       }
    monkey.velocityY=monkey.velocityY+0.5; 
    if(obstacleGroup.isTouching(monkey)){
      ground.velocityX=0;
      obstacleGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
      FoodGroup.setVelocityXEach(0);
      FoodGroup.setLifetimeEach(-1);
      
    }
      
      }
  
  monkey.collide(ground);
  Survival();
  drawSprites();
}
function  Survival() {
  stroke("");
  textSize(20);
  fill("white");
  text("Score :"+ score,500,50);
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time :"+SurvivalTime,100,50);
}
function food(){
  if(frameCount%80==0){
    banana=createSprite(600,Math.round(random(120,200)),10,10)
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3 ;
    banana.lifetime=800;
    FoodGroup.add(banana);
  }
  
}
function stones(){
  if(frameCount%300==0){
     obstacle=createSprite(800,300,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.lifetime=300;
    obstacle.scale=0.3;
    obstacleGroup.add(obstacle);
    
     }
}





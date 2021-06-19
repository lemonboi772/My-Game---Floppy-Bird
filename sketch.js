var PLAY = 1;
var END = 0;
var gameState = PLAY;
var Score=0

function preload()
{
birdImg=loadImage("floppybird.png");
backgroundImg=loadImage("background.png");
Pipe1Img=loadImage("Pipe1.png");
Pipe2Img=loadImage("Pipe2.png");
}

function setup() {
  createCanvas(1500,700);
 
  bgImg = createSprite(750,350,1500,700);
  bgImg.addImage(backgroundImg);
  bgImg.velocityX= -2;
  bird = createSprite(400,200,20,70);
  bird.scale=0.6
  bird.addImage(birdImg);
  //bird.debug=true;

  pipeTopGroup = new Group();
  pipeBottomGroup = new Group();
}
function draw() {
  background(0);

  if(gameState===PLAY)
  {
    if(bgImg.x<500)
{
bgImg.x=750

}
Score=Score+Math.round(getFrameRate()/60);
  // jump/ move bird upwards
  if(keyDown("space"))
  {
    bird.velocityY = -10;
  }

  //gravity
  bird.velocityY = bird.velocityY + 0.5;

  Spawntoppipe();

  Spawnbottompipe();
  if(pipeTopGroup.isTouching(bird) || pipeBottomGroup.isTouching(bird))
  {
    gameState = END;
  }

  } 
  else if(gameState === END)
  
  {
    bgImg.velocityX= 0;
    pipeTopGroup.setVelocityXEach(0);
    pipeBottomGroup.setVelocityXEach(0);
   bird.velocityX = 0;
   bird.velocityY = 0;
  } 

  
  drawSprites();
 textSize(30);
 fill("black");
  text("Score : "+ Score,1300,50)
}
function Spawntoppipe()
{
if(frameCount%120===0)
{
pipe=createSprite(1500,1,20,100);
pipe.velocityX=-2;
pipe.addImage(Pipe2Img)

pipe.debug=true;
pipe.setCollider("rectangle",0,0,100,250);
//pipe.lifeTime = 800;
pipeTopGroup.add(pipe);
}
}

function Spawnbottompipe()
{
if(frameCount%120===0)
{
pipe=createSprite(1500,699,20,100);
pipe.velocityX=-2;
pipe.addImage(Pipe1Img)
pipe.lifeTime = 800;
//pipe.debug=true;
pipeBottomGroup.add(pipe);
pipe.setCollider("rectangle",0,0,100,250);
}
}
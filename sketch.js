var gameState = PLAY;
var END;
var PLAY

var fundo, fundoImg;
var nave, naveImg;
var asteroid, asteroidImg;
var meteoro, meteoroImg;
var score;

var inimigos

function preload(){
fundoImg = loadImage("espaço.jpg")
asteroidImg = loadImage("Asteroid.png")
meteoroImg = loadImage("Meteorite.png")
naveImg = loadImage("nave.png")
}

function setup() {
 createCanvas(600,400)
 
 fundo = createSprite(200,200);
 fundo.addImage(fundoImg);
 fundo.velocityY = 4;
 fundo.scale = 1.75;

 nave = createSprite(300,300);
 nave.addImage(naveImg);
 nave.scale = 0.1
 
 
  nave.debug = true


 score = 0;

 inimigos = createGroup()
}
 

function draw() {
drawSprites()
if(fundo.y > height -30 ){
    fundo.y = height/2;
  }
  text("Pontuação: "+ score, 450,50);

  score = score + Math.round(getFrameRate()/10);

  if (frameCount % 150 === 0){
    asteroid = createSprite(Math.round(random(50,550)),-10);
    asteroid.addImage(asteroidImg)
    asteroid.velocityY =4 + (score/500)
    asteroid.scale = 0.1
    asteroid.lifetime = 150
    inimigos.add(asteroid)
  }
  if (frameCount % 107 === 0){
    meteoro = createSprite(Math.round(random(50,550)),-10);
    meteoro.addImage(meteoroImg)
    meteoro.velocityY =4 + (score/500)
    meteoro.scale = 0.4
    meteoro.lifetime = 150
    inimigos.add(meteoro)
  }
    nave.x = mouseX
   
   if(inimigos.isTouching(nave)){
    gameState = END
   }
   if (gameState = END){
 nave.destrou()
 inimigos.setVelocityXEach(0)
 score = score + 0
}
  
}
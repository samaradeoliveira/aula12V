
var trex, trex_running;
var edges;
var ground, groundImage;
var InvisibleGround;
//declarar variáveis para nuvens
var cloud, cloudImage;


function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  //carregar imagens para nuvens 
  cloudImage = loadImage("cloud.png");
}


function setup() {

  createCanvas(600, 200);

  InvisibleGround = createSprite(200, 190, 400, 10);
  InvisibleGround.visible = false;

  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;

  //var teste = Math.round(random(1, 100));
  //console.log(teste);



}


function draw() { //repete o tempo todo 
  background("black");


  ground.velocityX = -4;
  //mostrando no console a posição x do chão
  //console.log(ground.x);


  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //registrando a posição y do trex no console
  //console.log(trex.y)

  //Fazer o trex pular e voltar (resolução do bug)
  if (keyDown("space") && trex.y >= 160) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;


  trex.collide(InvisibleGround);

  

  //console.log(frameCount);

  drawSprites();
}




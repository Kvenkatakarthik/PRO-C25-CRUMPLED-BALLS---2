
var dustbin_img,paper_img,bin;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
dustbin_img=loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1350, 595);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
wall1d = createSprite(1000,494,250,15)
wall1d.shapeColor="white"

wall2 = createSprite(872,370,35,265)
wall2.shapeColor="white"

wall3 = createSprite(1132,370,35,265)
wall3.shapeColor="white"

bin=createSprite(1000,355,10,10)
bin.addImage(dustbin_img)
bin.scale=0.9


paper=new Paper(200,100,10)

var ground_options ={
  isStatic: true
}

ground = Bodies.rectangle(1350/2,509,1350,15,ground_options);
World.add(world,ground);

var wall_options ={
    isStatic: true
}

wall1 = Bodies.rectangle(1000,494,250,15,wall_options);
World.add(world,wall1);

wall2= Bodies.rectangle(872,370,50,160,wall_options);
World.add(world,wall2);

wall3 = Bodies.rectangle(1132,370,50,160,wall_options);
World.add(world,wall3);





	Engine.run(engine);
    
}



function draw() {
  rectMode(CENTER);
  background(255);

 rect(wall1.position.x,wall1.position.y,250,40);
  rect(wall2.position.x,wall2.position.y,35,265);
  rect(wall3.position.x,wall3.position.y,35,265);
  rect(ground.position.x,ground.position.y,1350,15);
paper.display();
  keyPressed();
  drawSprites();
}


  function keyPressed(){ 
    if(keyCode === UP_ARROW){
       Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}); 
      } 
    }


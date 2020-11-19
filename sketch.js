
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bob1=new Bob(80,650,20);
	bob2=new Bob(120,650,20);
	bob3=new Bob(160,650,20);
	bob4=new Bob(200,650,20);
	bob5=new Bob(240,650,20);

	roof=new Roof(400,450,40,10);

	rope1=new Bobstring(bob1,roof,-bobDiameter*2,0)
	rope2=new Bobstring(bob2,roof,-bobDiameter*2,0)
	rope3=new Bobstring(bob3,roof,-bobDiameter*2,0)
	rope4=new Bobstring(bob4,roof,-bobDiameter*2,0)
	rope5=new Bobstring(bob5,roof,-bobDiameter*2,0)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}




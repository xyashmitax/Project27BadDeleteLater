
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1, rope1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 

	roof1 = new roof(400,100,1000,20);
	bobObject1 = new bob(400,500,100,100);
	bobObject2 = new bob(500,500,100,100);
	bobObject3 = new bob(300,500,100,100);
	bobObject4 = new bob(200,500,100,100);
	bobObject5 = new bob(600,500,100,100);

	rope1 = new rope(bobObject1.body, roof1.body, -200, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}




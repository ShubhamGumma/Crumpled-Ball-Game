
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var recycleObj;
var world;
var paperObj;
var dustbinObj;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	recycleObj=new Recycle(1200,648,180,180);
	paperObj=new Paper(300,650,60,60);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

	paperObj.display();
	groundObject.display();
	dustbinObj.display();
	recycleObj.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:245,y:-250})
	}
}

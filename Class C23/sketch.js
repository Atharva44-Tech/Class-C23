const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,obj1;
var rect2;
var rect3;
var ground1;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

 

  box1=new Box(200,200,70,70);
  

 

  rect3=new Box(230,100,70,70);

ground1=new ground(0,390,800,5);

}

function draw() {
  background("lightBlue"); 
  Engine.update(engine); 
 
 box1.display();
 rect3.display(); 
ground1.display();
}
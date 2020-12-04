const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject    
var world;


function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);


    engine = Engine.create();
    world = engine.world;
    dustbinObj=new dustbin(1200,600);
    paperObject=new paper(200,450,40);
    groundObject=new ground(width/2,600,width,20);
    
}


function draw() {
  rectMode(CENTER);
  background("gray");
 Engine.update(engine);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:90,y:-85});
    
    }
}




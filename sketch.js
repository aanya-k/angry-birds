const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,bow3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,320,70,70);
    box2 = new Box(1000,320,70,70);
    ground = new Ground(600,390,1200,20);
    pig1 = new Pig(900,320);
    log1 = new Log(900,285,300,PI/2);
    box3 = new Box(800,210,70,70);
    box4 = new Box(1000,210,70,70);
    pig2 = new Pig(900,210);
    log2 = new Log(900,190,300,PI/2);
    box5 = new Box(900,140,70,70);
    log3 = new Log(850,110,140,PI/6);
    log4 = new Log(950,130,140,-PI/6);
    bird1 = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display(); 
    pig1.display();
    pig2.display(); 
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}
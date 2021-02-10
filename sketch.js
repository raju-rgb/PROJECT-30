const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 


function setup (){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground (600,680,1200,20)
    ground2 = new Ground (400,600,500,20)

    block1 = new Box (200, 565, 50, 50)
    block2 = new Box (300, 565, 50, 50)
    block3 = new Box (400, 565, 50, 50)
    block4 = new Box (500, 565, 50, 50)
    block5 = new Box (600, 565, 50, 50)
    block6 = new Box (250, 515, 50, 50)
    block7 = new Box (350, 515, 50, 50)
    block8 = new Box (450, 515, 50, 50)
    block9 = new Box (550, 515, 50, 50)
    block10 = new Box (300, 465, 50, 50)
    block11 = new Box (400, 465, 50, 50)
    block12 = new Box (500, 465, 50, 50)
    block13 = new Box (350, 415, 50, 50)
    block14 = new Box (450, 415, 50, 50)
    block15 = new Box (400, 365, 50, 50)

    ground3 = new Ground (900,350,500,20)
    
    block16 = new Box (700, 315, 50, 50)
    block17 = new Box (800, 315, 50, 50)
    block18 = new Box (900, 315, 50, 50)
    block19 = new Box (1000, 315, 50, 50)
    block20 = new Box (1100, 315, 50, 50)
    block21 = new Box (750, 265, 50, 50)
    block22 = new Box (850, 265, 50, 50)
    block23 = new Box (950, 265, 50, 50)
    block24 = new Box (1050, 265, 50, 50)
    block25 = new Box (800, 215, 50, 50)
    block26 = new Box (900, 215, 50, 50)
    block27 = new Box (1000, 215, 50, 50)
    block28 = new Box (850, 165, 50, 50)
    block29 = new Box (950, 165, 50, 50)
    block30 = new Box (900, 115, 50, 50)

    polygon1 = new Polygon(50, 200, 50, 50)
    sling1 = new SlingShot(polygon1.body, {x:100,y:200})

    Engine.run(engine);
}

function draw (){
    background("lightblue");
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    polygon1.display();
    sling1.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    sling1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling1.attach(polygon1.body);
    }
  }
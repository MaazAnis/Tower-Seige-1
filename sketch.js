const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stage = new Ground(800,200,300,20);
    stage1 = new Ground(400,300,300,20);
    fill("lightblue")
    block1 = new Block(300,250,50,50);
    block2 = new Block(350,250,50,50);
    block3 = new Block(400,250,50,50);
    block4 = new Block(450,250,50,50);
    block5 = new Block(500,250,50,50);
    block6 = new Block(450,150,50,50);
    block7 = new Block(400,150,50,50);
    block8 = new Block(350,150,50,50);
    block9 = new Block(400,200,50,50);
    block10 = new Block(700,100,50,50);
    block11 = new Block(750,100,50,50);
    block12 = new Block(800,100,50,50);
    block13 = new Block(850,100,50,50);
    block14= new Block(900,100,50,50);
    block15= new Block(850,100,50,50);
    block16= new Block(800,100,50,50);
    block17= new Block(750,100,50,50);
    block18= new Block(800,100,50,50);
    polygon = new Polygon(200,250,50,50)

    slingshot = new SlingShot(polygon.body,{x:200, y:50});

}

function draw(){
background("lightblue")
    ground.display();
    stage.display();
    polygon.displaypolygon();
    stage1.display();
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
    slingshot.display();

    Engine.update(engine);
    //strokeWeight(4);

}

function mouseDragged(){
   
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    slingshot.fly();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

//declared global variables for cars,walls and lines
var bullet1,bullet2,bullet3,bullet4;
var wall1,wall2,wall3,wall4;
var speed4,speed1,speed2,speed3;
var weight1,weight2,weight3,weigh4;
var line1,line2,line3;
var thickness1,thickness2,thickness3,thickness4;

function setup() {
  createCanvas(1400,400);
  //select speed randomly
  
  speed1=random(220,320);
  speed2=random(225,325);
  speed3=random(220,321);
  speed4=random(223,321);
  
  thickness1=random(24,83);
  thickness2=random(22,89);
  thickness3=random(32,83);
  thickness4=random(22,90);

  //select weight randomly
  weight1=random(30,52);
  weight2=random(40,60);
  weight3=random(44,66);
  weight4=random(35,58);


  //created a bullet sprite
  bullet1 =createSprite(0,50,50,10);
  bullet1.shapeColor=("brown");
   //created a bullet sprite
  bullet2=createSprite(0,150,50,10);
  bullet2.shapeColor=("brown");
   //created a bullet sprite
  bullet3=createSprite(0,250,50,10);
  bullet3.shapeColor=("brown");
   //created a bullet sprite
  bullet4=createSprite(0,350,50,10);
  bullet4.shapeColor=("brown");


   //created a wall1 sprite
  wall1=createSprite(1200,50,thickness1,40);
  wall1.shapeColor= color(80,80,80);
   //created a wall2 sprite
  wall2=createSprite(1200,150,thickness2,40);
  wall2.shapeColor=color(80,80,80);
   //created a wall3 sprite
  wall3=createSprite(1200,250,thickness3,40);
  wall3.shapeColor=color(80,80,80);
   //created a wall4 sprite
  wall4=createSprite(1200,350,thickness4,40)
  wall4.shapeColor=color(80,80,80);


   //created a line1 sprite
  line1=createSprite(200,100,2250,5);
  line1.shapeColor="powder blue";
   //created a line2 sprite
  line2=createSprite(200,200,2250,5);
  line2.shapeColor="yellow";
   //created a line3 sprite
  line3=createSprite(200,300,2250,5);
  line3.shapeColor="magenta";

}

function draw() {
  //to clear the screen
  background("black"); 
  //to give all cars speed
bullet1.velocityX=speed1; 
bullet2.velocityX=speed2;
bullet3.velocityX=speed3;
bullet4.velocityX=speed4;

if(hasCollided(bullet1,wall1)){
  bullet1.velocityX=0;
  var damage= 0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1)
  if(damage>10){
    wall1.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall1.shapeColor=color(0,255,0);
  }
}

if(hasCollided(bullet2,wall2)){
  bullet2.velocityX=0;
  var damage= 0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2)
  if(damage>10){
    wall2.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall2.shapeColor=color(0,255,0);
  }
}

if(hasCollided(bullet3,wall3)){
  bullet3.velocityX=0;
  var damage= 0.5*weight3*speed3*speed3/(thickness3*thickness3*thickness3)
  if(damage>10){
    wall3.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall3.shapeColor=color(0,255,0);
  }
}

if(hasCollided(bullet4,wall4)){
  bullet4.velocityX=0;
  var damage= 0.5*weight4*speed4*speed4/(thickness4*thickness4*thickness4)
  if(damage>10){
    wall4.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall4.shapeColor=color(0,255,0);
  }
}



drawSprites();
fill("cyan");
textSize(17);
text("TARGET1",1200,50);
text("TARGET2",1200,150);
text("TARGET3",1200,250);
text("TARGET4",1200,350);

text("BULLETS AND WALLS",600,50);

}


function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;


}




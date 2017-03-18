var rectX=50;
var speed=5;

function setup() {
  createCanvas (800,600);
  rectBX = rectX -5;
}

function draw() {
  background (64, 13, 165);
  strokeWeight(1);
  stroke(255, 255, 255);
  noFill ();
  rect (rectBX, 45, 110, 110);
  rect (rectX, 50, 100, 100);
  

  rectX = rectX + speed;

   if (rectX > width || rectX < 0) {
     speed = -speed;
   }
   
  rectBX = rectBX + speed; 
     if (rectBX > width || rectBX < 0) {
     speed = -speed;
   }
}
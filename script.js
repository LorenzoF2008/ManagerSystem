let sunHeight;
let horizon= 200;

function setup(){
    createCanvas(400,400);
}
function draw(){
background(0);
// il sole segue le coordinate y con il mouse//
sunHeight = mouseY;

fill("yellow");
circle(200, sunHeight, 160);

stroke("green");
line(0,horizon, 400);
//Montagne
 fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110,95,20);
  triangle(200,400,520,253,350,400); 
 
  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);
 
  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);
}

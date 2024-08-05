function setup() {
  createCanvas(1000, 800);
   background("pink");
}

function draw() {
  fill("rgb(190,35,190)");
  stroke("red");
  if(mouseIsPressed)
  circle(mouseX,mouseY, 50);
}

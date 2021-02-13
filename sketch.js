var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup()
{
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw()
{
  background(65); 

  hr = Number(hour() % 12);
  mn = Number(minute());
  sc = Number(second());

  scAngle = map(sc, 0, 59, 0, 360);
  mnAngle = map(mn, 0, 59, 0, 360);
  hrAngle = map(hr, 0, 23, 0, 360);

  translate(width/2, height/2);

  push();
  rotate(scAngle-90);
  stroke("yellow");
  strokeWeight(4);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle-90);
  stroke("orange");
  strokeWeight(5);
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(hrAngle+90);
  stroke("red");
  strokeWeight(6);
  line(0, 0, 50, 0);
  pop();

  noFill();
  stroke("yellow");
  arc(0, 0, 260, 260, 270, scAngle-90);
  stroke("orange");
  arc(0, 0, 240, 240, 270, mnAngle-90);
  stroke("red");
  arc(0, 0, 220, 220, 270, hrAngle+90);

  drawSprites();
}
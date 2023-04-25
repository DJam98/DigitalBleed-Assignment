let canvasHeight = innerHeight * 3

let xMid = innerWidth / 2
let yMid = innerHeight / 2
let circle1y = yMid
let circle2y = circle1y + yMid*4 + 50

let a = 3


function setup() {
  createCanvas(innerWidth, canvasHeight);
}

function draw() {
  background(0);
  
  fill('white');
  textSize(50);
  textAlign(CENTER);
  text('intro.', xMid, yMid);
  
  
  circle(xMid + 48, circle1y, 10)

  circle1y = circle1y + a
  
  if (circle1y > yMid * 3){
    circle1y = yMid
  }
  
  text('Middle', xMid, yMid*3+44)
  
  circle(xMid - 68, circle2y + 40, 10)
  circle2y = circle2y + a
  
    if (circle2y > yMid * 5){
    circle2y = yMid * 3
  }
  
  a = a * 1.1
  
  if (a > 90){
    a = 3
  }
}
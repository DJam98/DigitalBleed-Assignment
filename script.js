

let xMid = innerWidth / 2
let yMid = innerHeight / 2
let circle1y = yMid
let circle2y = yMid*5 + 50

let velocity = 1
let repeat = 0
let circleVisable = 10

let canvasHeight = innerHeight * 3


function setup() {
  createCanvas(innerWidth, innerHeight * 3 - innerHeight/3);
}

function draw() {
  background(0);
  
  fill('white');
  textSize(50);
  textAlign(CENTER);
  text('intro.', xMid, yMid);
  text('Middle', xMid, yMid*3+44)
  text('Conclusion', xMid, yMid*5+55)
  
  
  circle(xMid + 48, circle1y, circleVisable);

  circle1y = circle1y + velocity
  
  if (circle1y > yMid * 3){
    circle1y = yMid
    repeat = repeat + 1
    velocity = 1
  }
  
  text('Middle', xMid, yMid*3+44)
  
  circle(xMid - 68, circle2y + 40, circleVisable)
  circle2y = circle2y + velocity
  
    if (circle2y > yMid * 5){
    circle2y = yMid * 3
  }
  
  velocity = velocity * 1.1
  
//   if (velocity > innerHeight){
//     velocity = 1
//   }

  if (repeat > 1) {
    repeat = 0
    circleVisable = 10
  }
  if (repeat > 0){

    circleVisable = 0
    // fill('black')
    // rect(0, yMid+5, innerWidth, innerHeight)
    // rect(0, innerHeight+yMid+49, innerWidth, innerHeight-38)
  }
  
}
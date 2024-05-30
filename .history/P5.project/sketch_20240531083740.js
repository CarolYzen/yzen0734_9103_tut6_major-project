let fixedColor;
let size;
let scaleFactor;
let backgroundColor = [];
let largeCircleColors = [];
let smallCircleColors = [];
let randomCircles = [];
let angle = 0; 
let centralCircleRadius = 70
let growthFactor = 0.5; 

function setup() {
  size = Math.min(windowWidth, windowHeight);
  scaleFactor = Math.min(windowWidth, windowHeight) / 1024;
  createCanvas(size, size);
  noStroke();
  
  largeCircleColors = [
    color(233, 75, 60), color(119, 197, 147), color(75, 156, 211),
    color(255, 215, 0), color(181, 101, 167), color(255, 165, 0)
  ];

  smallCircleColors = [
    color(75, 156, 211), color(255, 215, 0), color(181, 101, 167),
    color(255, 165, 0), color(233, 75, 60)
  ];

  backgroundColor = [color(3, 61, 94)];

  let randomCircle;

  randomCircle = {fill:smallCircleColors[0],
    pattern: [650, 270, 25, 25] };
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
    pattern: [600, 300, 20, 20] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [640, 340, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [730, 190, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [740, 210, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [730, 240, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [830, 350, 50, 50] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [880, 420, 7, 7] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [880, 450, 5, 5] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [890, 450, 5, 5] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [880, 490, 20, 20] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [880, 510, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [885, 570, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [860, 575, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [840, 550, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [820, 610, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [850, 675, 20, 20] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [870, 660, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [815, 650, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [830, 700, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [840, 710, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [485, 765, 20, 20] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [480, 810, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [490, 865, 25, 25] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [520, 900, 40, 40] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [550, 920, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [600, 920, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [460, 900, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [380, 670, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [340, 620, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [335, 900, 6, 6] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [320, 890, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [290, 850, 50, 50] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [295, 790, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [310, 810, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [310, 770, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [250, 700, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [280, 690, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [160, 690, 80, 80] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [125, 650, 80, 80] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [105, 750, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [115, 770, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [140, 510, 100, 100] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [95, 590, 25, 25] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [80, 470, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [150, 410, 70, 70] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [270, 390, 130, 130] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [305, 255, 175, 175] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [110, 320, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [130, 260, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [175, 210, 10, 10] };
    randomCircles.push(randomCircle);

    randomCircle = {fill:backgroundColor[0],
      pattern: [510, 280, 70]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [520, 280, 70]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [560, 100, 15]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [580, 100, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [570, 110, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [650, 170, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [600, 250, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [680, 250, 30, 30]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [690, 340, 35, 35]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [720, 170, 5, 5]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [770, 240, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [775, 320, 115, 115]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [850, 320, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [780, 470, 150, 150]};
    randomCircles.push(randomCircle);

    randomCircle = {fill:backgroundColor[0],
      pattern: [770, 550, 100, 100]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [770, 560, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [880, 430, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [860, 620, 60, 60]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [700, 650, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [760, 710, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [750, 790, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [600, 800, 200, 200]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [380, 750, 125, 125]};
    randomCircles.push(randomCircle);

    randomCircle = {fill:backgroundColor[0],
      pattern: [380, 850, 130, 130]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [380, 850, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [290, 730, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [330, 680, 20, 20]};
    randomCircles.push(randomCircle);

}

function draw() {
  push();
  scale(scaleFactor);
  originalImage();
  pop();

  if (centralCircleRadius > 100 || centralCircleRadius < 70) {
    growthFactor *= -1;
  }
  centralCircleRadius += growthFactor;

  
  angle += 0.01;
}


function drawDuelCircle(x, y, radius, delta) {
  fill(233, 75, 60);
  ellipse(x, y, radius * 2, radius * 2);
  fill(119, 197, 147);
  ellipse(x, y, radius - delta, radius - delta);
}


function drawSpecialCircle(x, y, outerRadius, innerRadius) {
  fill(75, 156, 211);
  arc(x, y, 2 * outerRadius, 2 * outerRadius, 0, PI);

  fill(255, 215, 0);
  arc(x, y, 2 * outerRadius, 2 * outerRadius, PI, TWO_PI);

  fill(181, 101, 167);
  ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}


function drawComplexCircle(x, y, outerRadius, middleRadius, innerRadius) {
  fill(255, 165, 0);
  ellipse(x, y, 2 * outerRadius, 2 * outerRadius);
  fill(233, 75, 60);
  ellipse(x, y, 2 * middleRadius, 2 * middleRadius);
  fill(119, 197, 147);
  ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}


function originalImage() {
  clear();
  background(3, 61, 94);

  let x = 512;
  let y = 512;


  for (let r = centralCircleRadius * 5.5, i = 0; r >= centralCircleRadius; r -= centralCircleRadius / 2, i++) {
    fill(largeCircleColors[i % largeCircleColors.length]);
    ellipse(x, y, r, r);
  }

  fill(0, 0, 255);
  ellipse(x, y - 30, 30, 30);
  fill(0, 255, 0);
  ellipse(x, y + 30, 30, 30);


  let moonRadius = 100;
  let offset = 45;
  fill(255, 165, 0);
  ellipse(500, 200, moonRadius * 2, moonRadius * 2);
  fill(3, 61, 94);
  ellipse(500 + offset, 200, moonRadius * 1.9, moonRadius * 1.9);


  drawDuelCircle(550, 180, 30, 10);

  drawDuelCircle(650, 300, 15, 5);

  drawSpecialCircle(820, 760, 20, 15);

  drawDuelCircle(500, 730, 15, 5);

  drawComplexCircle(210, 790, 50, 25, 10);

  drawComplexCircle(220, 550, 90, 70, 20);
  
  drawDuelCircle(400, 320, 30, 20);

  drawSpecialCircle(160, 300, 20, 15);
  

  for (let i = 0; i < randomCircles.length; i++) {
    let circle = randomCircles[i];
    let angleOffset = i * TWO_PI / randomCircles.length;
    let x = 512 + 400 * cos(angle + angleOffset);
    let y = 512 + 400 * sin(angle + angleOffset);
    fill(circle.fill);
    ellipse(x, y, circle.pattern[2], circle.pattern[3]);
  }

}


function windowResized() {
  size = Math.min(windowWidth, windowHeight);
  scaleFactor = Math.min(windowWidth, windowHeight) / 1024;

  resizeCanvas(size, size);

  scale(scaleFactor);

  originalImage();
}

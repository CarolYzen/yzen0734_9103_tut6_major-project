let fixedColor;
let size;
let scaleFactor;
let backgroundColor = [];
let largeCircleColors = [];
let smallCircleColors = [];
let randomCircles = [];
let patterns = [];
let angle = 0; 
let centralCircleRadius = 70;
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

  for (let i = 0; i < 40; i++) {
    let x = random(1024);
    let y = random(1024);
    let r = random(5, 50);
    let randomCircle = {
      fill: smallCircleColors[i % smallCircleColors.length],
      x: x,
      y: y,
      r: r
    };
    randomCircles.push(randomCircle);
  }


  patterns = [
    { type: 'duelCircle', x: 550, y: 180, radius: 30, delta: 10 },
    { type: 'duelCircle', x: 650, y: 300, radius: 15, delta: 5 },
    { type: 'specialCircle', x: 820, y: 760, outerRadius: 20, innerRadius: 15 },
    { type: 'duelCircle', x: 500, y: 730, radius: 15, delta: 5 },
    { type: 'complexCircle', x: 210, y: 790, outerRadius: 50, middleRadius: 25, innerRadius: 10 },
    { type: 'complexCircle', x: 220, y: 550, outerRadius: 90, middleRadius: 70, innerRadius: 20 },
    { type: 'duelCircle', x: 400, y: 320, radius: 30, delta: 20 },
    { type: 'specialCircle', x: 160, y: 300, outerRadius: 20, innerRadius: 15 },
    { type: 'moon', x: 500, y: 200, moonRadius: 100, offset: 45 }
  ];
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

  for (let i = 0; i < randomCircles.length; i++) {
    let circle = randomCircles[i];
    let angleOffset = i * TWO_PI / randomCircles.length;
    let x = 512 + 400 * cos(angle + angleOffset);
    let y = 512 + 400 * sin(angle + angleOffset);
    fill(circle.fill);
    ellipse(x, y, circle.r, circle.r);
  }

  // Draw patterns with circular motion
  for (let i = 0; i < patterns.length; i++) {
    let pattern = patterns[i];
    let angleOffset = i * TWO_PI / patterns.length;
    let x = 512 + 300 * cos(angle + angleOffset);
    let y = 512 + 300 * sin(angle + angleOffset);
    switch (pattern.type) {
      case 'duelCircle':
        drawDuelCircle(x, y, pattern.radius, pattern.delta);
        break;
      case 'specialCircle':
        drawSpecialCircle(x, y, pattern.outerRadius, pattern.innerRadius);
        break;
      case 'complexCircle':
        drawComplexCircle(x, y, pattern.outerRadius, pattern.middleRadius, pattern.innerRadius);
        break;
      case 'moon':
        fill(255, 165, 0);
        ellipse(x, y, pattern.moonRadius * 2, pattern.moonRadius * 2);
        fill(3, 61, 94);
        ellipse(x + pattern.offset, y, pattern.moonRadius * 1.9, pattern.moonRadius * 1.9);
        break;
    }
  }
}

// Fit canvas and pattern to window size
function windowResized() {
  size = Math.min(windowWidth, windowHeight);
  scaleFactor = Math.min(windowWidth, windowHeight) / 1024;

  resizeCanvas(size, size);

  scale(scaleFactor);

  originalImage();
}

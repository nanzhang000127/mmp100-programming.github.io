function setup() {
  createCanvas(400, 400);
  this.x = width / 2;
  this.y = height / 2;
  this.xSpeed = 5;
  this.ySpeed = 3;
  this.ballSize = 35;
}

function draw() {
  fill(220, 220, 220, 25);
  rect(0, 0, width, height);

  // Draw the ball
  noStroke(); 
  fill(255); 
  ellipse(this.x, this.y, this.ballSize, this.ballSize);

  // move the position of the ball
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  // Check for collision with edges and reverse speed if it collides
  if (this.x > width - this.ballSize / 2 || this.x < this.ballSize / 2) {
    this.xSpeed *= -1;
    // Change color
    fill(random(255), random(255), random(255));
  }
  if (this.y > height - this.ballSize / 2 || this.y < this.ballSize / 2) {
    this.ySpeed *= -1;
    // Change color
    fill(random(255), random(255), random(255));
  }
}
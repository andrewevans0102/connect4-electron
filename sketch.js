class Tile {
  myColor = 0;
  myX = 0;
  myY = 0;
  capacity = 0;
  name = 'white';

  constructor(x, y) {
    this.myColor = 255;
    this.myX = x;
    this.myY = y;
  }

  getColor() {
    return this.myColor;
  }

  setColor(mColor) {
    this.myColor = mColor;
  }

  getX() {
    return this.myX;
  }

  getY() {
    return this.myY;
  }

  addCapacity() {
    this.capacity++;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let player1Turn = true;
let red;
let blue;
let piece = [];
let height = 0;
let width = 0;

function dropChecker(slot, color) {
  for (let i = 5; i >= 0; i--) {
    if (piece[i][slot].getName() === 'white') {
      piece[i][slot].setName('checker');
      piece[i][slot].setColor(color);
      break;
    }
  }
  player1Turn = !player1Turn;
}

function setup() {
  height = 510;
  width = 510;
  const canvas2 = createCanvas(width, height);
  canvas2.parent = 'sketch-holder';
  red = color(255, 0, 0);
  blue = color(0, 0, 255);

  // https://stackoverflow.com/questions/30144580/typescript-multidimensional-array-initialization
  // instantiate first
  piece = [];
  // load second
  for (let r = 0; r < 6; r++) {
    // define array one grid value at a time
    piece[r] = [];
    for (let c = 0; c < 7; c++) {
      piece[r][c] = new Tile(40 + c * 70, 110 + r * 70);
    }
  }
}

function draw() {
  fill(241, 255, 52);
  rect(0, 70, 501, 430);
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      fill(piece[r][c].getColor());
      ellipse(piece[r][c].getX(), piece[r][c].getY(), 60, 60);
    }
  }

  if (player1Turn) {
    fill(255);
    textAlign(CENTER);
    textSize(50);
    text('Player 2', 250, 50);
    fill(255, 0, 0);
    textAlign(CENTER);
    textSize(50);
    text('Player 1', 250, 50);
  } else {
    fill(255);
    textAlign(CENTER);
    textSize(50);
    text('Player 1', 250, 50);
    fill(0, 0, 255);
    textAlign(CENTER);
    textSize(50);
    text('Player 2', 250, 50);
  }
}

function mouseClicked() {
  if (player1Turn) {
    if (mouseX > 10 && mouseX < 70) {
      dropChecker(0, red);
    } else if (mouseX > 80 && mouseX < 140) {
      dropChecker(1, red);
    }
    if (mouseX > 150 && mouseX < 210) {
      dropChecker(2, red);
    }
    if (mouseX > 220 && mouseX < 280) {
      dropChecker(3, red);
    }
    if (mouseX > 290 && mouseX < 350) {
      dropChecker(4, red);
    }
    if (mouseX > 360 && mouseX < 420) {
      dropChecker(5, red);
    }
    if (mouseX > 430 && mouseX < 490) {
      dropChecker(6, red);
    }
    return;
  } else {
    if (mouseX > 10 && mouseX < 70) {
      dropChecker(0, blue);
    }

    if (mouseX > 80 && mouseX < 140) {
      dropChecker(1, blue);
    }

    if (mouseX > 150 && mouseX < 210) {
      dropChecker(2, blue);
    }

    if (mouseX > 220 && mouseX < 280) {
      dropChecker(3, blue);
    }

    if (mouseX > 290 && mouseX < 350) {
      dropChecker(4, blue);
    }

    if (mouseX > 360 && mouseX < 420) {
      dropChecker(5, blue);
    }

    if (mouseX > 430 && mouseX < 490) {
      dropChecker(6, blue);
    }
    return;
  }
}

function keyPressed() {
  if (key === 'c') {
    window.location.reload();
  }
}

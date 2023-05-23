class Bug {
  constructor(name, hobby, state, x, y, d, image) {
    //qualitative
    this.name = name;
    this.hobby = hobby;
    this.state = state;
    this.image = image;
    //sizing
    this.x = x;
    this.y = y;
    this.d = d;
    this.incr = 0.3;
    this.maxSize = 20;
  }

  grow() {
      noFill();
      stroke(255);
      ellipse(this.x, this.y, this.d, this.d);
      if (this.d > this.maxSize || this.d < 0) {this.incr = -this.incr;}
      this.d += this.incr;
  }
  
}

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS

function createBugs() {
  
  console.log('create bugs');
  for (let i = 0; i < freeBugs.length; i++) {
      freeBugs[i].grow();
      // sparkle_png.position(freeBugs[i].x, freeBugs[i].y);
      // sparkle_png.size(20, 20);
      image(sparkle_png, freeBugs[i].x - 15, freeBugs[i].y - 15, 30, 30);
  }
  
}

function releaseBugs() {
  
  for(let v = 0; v < caughtBugs.length; v++){
    caughtBugs[v].state = 'free';
    append(freeBugs, caughtBugs[v]);
    frees++;
  }
  
  //createBugs();
  caughtBugs = []; //clean array
  bugsCaught = 0;
  
}

function juiceBugs() {
  
  if(bugsCaught != 0){
    juice++
    bugsCaught = 0;
    caughtBugs = []; //clean array
  }
  
}
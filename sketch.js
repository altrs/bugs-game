//assets
let preintro_gif;
let titlescreen_png;
let innermono_gif;
let profile_png;
let outside_png;
let inside_png;
let outsideBattle_gif;
let insideBattle_gif;

let sparkle_png;
let glasses_gif;

//scene controlling variables
let textScene = false;
let battleState = false; //specifically for bugs
let profileState = false;
let outsideState = false;
let insideState = false;
let scene = 0;
let introspec_num = 0;

//stats variables
let bugsCaught = 0;
let juice = 0;
let frees = 0;
let avatarTitle = '';
let a1_img, a2_img, a3_img, a4_img, a5_img, a6_img, a7_img;

//button controlling variables
let preStartButton, startButton, insideButton, outsideButton, bugJuiceButton, freeBugButton, introspectionButton, profileButtonInside, profileButtonOutside; //buttons
let buttonDist;
let bx;
let by;

//text controlling variable
let current;

//bugs
let allBugs = [];
let freeBugs = [];
let caughtBugs = [];
let b0, b1, b2, b3, b4, b5, b6, b7,b8, b9, b10, b11, b12, b13, b14;
let bug1_img, bug2_img, bug3_img, bug4_img, bug5_img, bug6_img, bug7_img, bug8_img, bug9_img, bug10_img, bug11_img, bug12_img, bug13_img, bug14_img, bug15_img;
let noCatchingBugs = false;

let outVid = false;
let outVideo;
let titleVideo;

let sound;

function preload() {
    
  titleVideo = createVideo(['title.mp4'],vidLoad);
  outVideo = createVideo(['end.mp4'],vidLoad);
  
  soundFormats('mp3');
  sound = loadSound('bugs.mp3');

  preintro_gif = createImg('scenes/preintro.gif', 'intro bug');
  titlescreen_png = createImg('scenes/title.png', 'title screen');
  innermono_gif = createImg('scenes/inner.gif', 'inner monologue screen');
  profile_png = createImg('scenes/profile.png', 'profile screen');
  outside_png = createImg('scenes/outside.png', 'outside screen');
  inside_png = createImg('scenes/inside.png', 'inside screen');
  sparkle_png = createImg('bugs/sparkle.png', 'sparkle');
  outsideBattle_gif = createImg('scenes/outside_battle.gif', 'outside battle screen');
  insideBattle_gif = createImg('scenes/inside_battle.gif', 'inside battle screen');
  
  bug1_img = createImg('bugs/bug1.png', 'bug 1');
  bug2_img = createImg('bugs/bug2.png', 'bug 2');
  bug3_img = createImg('bugs/bug3.png', 'bug 3');
  bug4_img = createImg('bugs/bug4.png', 'bug 4');
  bug5_img = createImg('bugs/bug5.png', 'bug 5');
  bug6_img = createImg('bugs/bug6.png', 'bug 6');
  bug7_img = createImg('bugs/bug7.png', 'bug 7');
  bug8_img = createImg('bugs/bug8.png', 'bug 8');
  bug9_img = createImg('bugs/bug9.png', 'bug 9');
  bug10_img = createImg('bugs/bug10.png', 'bug 10');
  bug11_img = createImg('bugs/bug11.png', 'bug 11');
  bug12_img = createImg('bugs/bug12.png', 'bug 12');
  bug13_img = createImg('bugs/bug13.png', 'bug 13');
  bug14_img = createImg('bugs/bug14.png', 'bug 14');
  bug15_img = createImg('bugs/bug15.png', 'bug 15');
  
  a1_img = createImg('avatars/avatar1.png', 'avatar 1');
  a2_img = createImg('avatars/avatar2.png', 'avatar 2');
  a3_img = createImg('avatars/avatar3.png', 'avatar 3');
  a4_img = createImg('avatars/avatar4.png', 'avatar 4');
  a5_img = createImg('avatars/avatar5.png', 'avatar 5');
  a6_img = createImg('avatars/avatar6.png', 'avatar 6');
  a7_img = createImg('avatars/avatar7.png', 'avatar 7');
  
  glasses_gif = createImg('scenes/1.gif', 'glasses gif');
  
}


function setup() {
  createCanvas(600, 400);
  cursor('mouse.png', 20, 20);
  
  getAudioContext().suspend();
  
  fill(0);
  textSize(12);
  textFont('lores-12');
  
  //buttons
  preStartButton = new Button(width/2, height/2, 100, true);
  startButton = new Button(width/2, height/2, 100, false);
  insideButton = new Button(57, 190, 40, false);
  outsideButton = new Button(565, 200, 50, false);
  bugJuiceButton = new Button(205, 355, 35, false);
  freeBugButton = new Button(287, 355, 35, false);
  introspectionButton = new Button(378, 355, 35, false);
  profileButtonInside = new Button(565, 370, 50, false);
  profileButtonOutside = new Button(35, 370, 50, false);
  bx = preStartButton.x;
  by = preStartButton.y;
  

  createInnerMonologueText();
  createIntrospectionText1();
  createIntrospectionText2();
  createIntrospectionText3();
  current = im1;
  
  b0 = new Bug('Raymo', 'Gardening', 'free', random(width), random(height), 0, bug1_img);
  append(allBugs, b0);
  append(freeBugs, b0);
  b1 = new Bug('Simi', 'Walking around', 'free', random(width), random(height), 0, bug2_img);
  append(allBugs, b1);
  append(freeBugs, b1);
  b2 = new Bug('Kepjep', 'Sun Bathing', 'free', random(width), random(height), 0, bug3_img);
  append(allBugs, b2);
  append(freeBugs, b2);
  b3 = new Bug('Lorna', 'Taxidermy',  'free',random(width), random(height), 0, bug4_img);
  append(allBugs, b3);
  append(freeBugs, b3);
  b4 = new Bug('Paul', 'Eavesdropping', 'free', random(width), random(height), 0, bug5_img);
  append(allBugs, b4);
  append(freeBugs, b4);
  b5 = new Bug('Onoog', 'Tennis', 'free', random(width), random(height), 0, bug6_img);
  append(allBugs, b5);
  append(freeBugs, b5);
  b6 = new Bug('Keene', 'Chasing cats', 'free', random(width), random(height), 0, bug7_img);
  append(allBugs, b6);
  append(freeBugs, b6);
  b7 = new Bug('Rlere', 'Diving', 'free', random(width), random(height), 0, bug8_img);
  append(allBugs, b7);
  append(freeBugs, b7);
  b8 = new Bug('Kaika', 'Barbecuing', 'free', random(width), random(height), 0, bug9_img);
  append(allBugs, b8);
  append(freeBugs, b8);
  b9 = new Bug('Alama', 'Hacking', 'free', random(width), random(height), 0, bug10_img);
  append(allBugs, b9);
  append(freeBugs, b9);
  b10 = new Bug('Sveny', 'Hoola hooping', 'free', random(width), random(height), 0, bug11_img);
  append(allBugs, b10);
  append(freeBugs, b10);
  b11 = new Bug('Qeno', 'Rock stacking', 'free', random(width), random(height), 0, bug12_img);
  append(allBugs, b11);
  append(freeBugs, b11);
  b12 = new Bug('Yeki', 'Karaoke', 'free', random(width), random(height), 0, bug13_img);
  append(allBugs, b12);
  append(freeBugs, b12);
  b13 = new Bug('Goma', 'Playing monopoly', 'free', random(width), random(height), 0, bug14_img);
  append(allBugs, b13);
  append(freeBugs, b13);
  b14 = new Bug('Leoko', 'Leaf munching', 'free', random(width), random(height), 0, bug15_img);
  append(allBugs, b14);
  append(freeBugs, b14);

}


function draw() {
  background(225);
  
  preStartButton.display();
  
  console.log(scene);
  
  preintro_gif.position(0, 0);
  image(preintro_gif, 0, 0);
  
  //hiding
  titleVideo.hide();
  outVideo.hide();
  titlescreen_png.hide();
  innermono_gif.hide();
  profile_png.hide();
  outside_png.hide();
  inside_png.hide();
  sparkle_png.hide();
  outsideBattle_gif.hide();
  insideBattle_gif.hide();
  bug1_img.hide();
  bug2_img.hide();
  bug3_img.hide();
  bug4_img.hide();
  bug5_img.hide();
  bug6_img.hide();
  bug7_img.hide();
  bug8_img.hide();
  bug9_img.hide();
  bug10_img.hide();
  bug11_img.hide();
  bug12_img.hide();
  bug13_img.hide();
  bug14_img.hide();
  bug15_img.hide();
  a1_img.hide();
  a2_img.hide();
  a3_img.hide();
  a4_img.hide();
  a5_img.hide();
  a6_img.hide();
  a7_img.hide();
  glasses_gif.hide();
  
  //IF INVENTORY FULL(?)
  if(caughtBugs.length >= 6){
    noCatchingBugs = true;
  }else{
    noCatchingBugs = false;
  }

  switch (scene) {
    case 1:
      intro();
      preintro_gif.hide();
      image(titlescreen_png, 0, 0);
      //image(titleVideo, 0, 0);
      //titleVideo.play();
      bx = startButton.x;
      by = startButton.y;
      
      if(outVid == true){
        fill(0);
        rect(0, 0, width, height);
        image(outVideo, 0, 0, 600, 400);
        //outVideo.play();
      }
      
      break;
    case 2:
      innerMonologue();
      image(innermono_gif, 0, 0);
      textScene = true; //triggers text view
      bx = -100;
      by = -100;
      break;
    case 3:
      glasses_gif.position(0, 0);
      image(glasses_gif, 0, 0);
      profile();
      cursor('mouse.png');
      profile_png.position(0, 0);
      image(profile_png, 0, 0);
      displayInventory();
      profileState = true;
      textScene = false;
      insideState = false;
      outsideState = false;
      let mdist = dist(mouseX, mouseY, insideButton.x, insideButton.y);
      let mdist2 = dist(mouseX, mouseY, outsideButton.x, outsideButton.y);
      if(mdist < 30 || mdist2 < 30){
        cursor('mouse_blue.png');
      }
      break;
    case 4:
      inside();
      cursor('mouse_dect.png');
      profile_png.hide();
      inside_png.position(0, 0);
      image(inside_png, 0, 0);
      insideState = true;
      textScene = false;
      profileState = false;
      outsideState = false;
      createBugs();    
      break;
    case 5:
      outside();
      cursor('mouse_dect.png');
      profile_png.hide();
      outside_png.position(0, 0);
      image(outside_png, 0, 0);
      outsideState = true;
      textScene = false;
      insideState = false;
      profileState = false;
      createBugs();
      break;
    case 6:
      image(innermono_gif, 0, 0);
      textScene = true;
      //insideState = false;
      profileState = false;
      //outsideState = false;
  }
  
  
  if(textScene){
    console.log('HUHM' + insideState);
    console.log('HUHM' + outsideState);
    if(insideState == true){
        console.log('WHAT');
        insideBattle_gif.position(0, 0);
        image(insideBattle_gif, 0, 0);
    }
    if(outsideState == true){
        console.log('WHAT');
        outsideBattle_gif.position(0, 0);
        image(outsideBattle_gif, 0, 0);
    }
    fill(255); //text color
    textSize(15);
    text(current.text, 60, 170, 470);
    text(current.option1, 70, 265, 200, 100);
    text(current.option2, 350, 265, 200, 100);
  }

  
}


//  MOUSE + KEY + BUTTON FUNCTIONS MOUSE + KEY + BUTTON FUNCTIONS 
//  MOUSE + KEY + BUTTON FUNCTIONS MOUSE + KEY + BUTTON FUNCTIONS 
//  MOUSE + KEY + BUTTON FUNCTIONS MOUSE + KEY + BUTTON FUNCTIONS 


function keyPressed() {
  
  if(textScene){
    
    if (keyCode === LEFT_ARROW) {
      if (current.target1 != null) { // Make sure valid option exists.
        current = current.target1;  // go to next story section
      } else {current.exit();}
    }
    
    if (keyCode === RIGHT_ARROW) {
      if (current.target2 != null) { // Make sure a valid option exists
        current = current.target2;   // Advance to next story section
      }else {
        //current.exit();
        scene = 3;
        console.log('EXITING DOWN');
      }
    }
    
  }
  
}

class Button {
  constructor(x, y, r, e) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.e = e;
  }
  
  display(){ellipse(this.x, this.y, this.r, this.r);}
  
  set(e){this.e = e;}
  
}

function mousePressed(){
  
  userStartAudio();
  
  if(sound.isPlaying() == false){
    sound.play();
    sound.loop();
    //sound.volume(0.5);
  }
  
  
  //all buttons
  buttonDist = dist(mouseX, mouseY, bx, by);
  if (buttonDist < 35){
      scene++;      
      console.log("clicked"); 
  }else {
    console.log("not clicked"); 
  }
  
  //buttons on profile page
  if(profileState == true){
    
    arrowDist1 = dist(mouseX, mouseY, insideButton.x, insideButton.y);
    arrowDist2 = dist(mouseX, mouseY, outsideButton.x, outsideButton.y);
    juiceDist = dist(mouseX, mouseY, bugJuiceButton.x, bugJuiceButton.y);
    freeDist = dist(mouseX, mouseY, freeBugButton.x, freeBugButton.y);
    introspectionDist = dist(mouseX, mouseY, introspectionButton.x, introspectionButton.y);
    
    if(arrowDist1 < 50) {scene = 4;} // go inside
    if(arrowDist2 < 50) {scene = 5;} // go outside
    
    if(juiceDist < 30){
      console.log('JUICE! YOU NEED 5 BUGS TO MAKE JUICE');
      juiceBugs();
    }
    if(freeDist < 30){
      console.log('FREE!');
      releaseBugs();
    }
    if(introspectionDist < 30) {
      console.log('INTROSPECTION!');
      introspection();
    }
    
  }
  
  //buttons and bugs on inside and outside pages
  if(insideState == true && profileButtonInside.e == true){
    
      arrowDist1 = dist(mouseX, mouseY, profileButtonInside.x, profileButtonInside.y);
      if(arrowDist1 < 50) {scene = 3;}
    
      if(noCatchingBugs == true){
        let i = "INVENTORY FULL";
        text(i, width/2, height/2);
      } else{ 
        for (let x = 0; x < freeBugs.length; x++) {
          if (dist(mouseX, mouseY, freeBugs[x].x, freeBugs[x].y) < 10) {
            scene = 6;
            if(freeBugs[x].name == 'Raymo'){b0_text(); current = b0_1;}
            if(freeBugs[x].name == 'Simi'){b1_text(); current = b1_1;} 
            if(freeBugs[x].name == 'Kepjep'){b2_text(); current = b2_1;}
            if(freeBugs[x].name == 'Lorna'){b3_text(); current = b3_1;}
            if(freeBugs[x].name == 'Paul'){b4_text(); current = b4_1;}
            if(freeBugs[x].name == 'Onoog'){b5_text(); current = b5_1;}
            if(freeBugs[x].name == 'Keene'){b6_text(); current = b6_1;}
            if(freeBugs[x].name == 'Rlere'){b7_text(); current = b7_1;}    
            if(freeBugs[x].name == 'Kaika'){b8_text(); current = b8_1;}
            if(freeBugs[x].name == 'Alama'){b9_text(); current = b9_1;}
            if(freeBugs[x].name == 'Sveny'){b10_text(); current = b10_1;}
            if(freeBugs[x].name == 'Qeno'){b11_text(); current = b11_1;}
            if(freeBugs[x].name == 'Yeki'){b12_text(); current = b12_1;}
            if(freeBugs[x].name == 'Goma'){b13_text(); current = b13_1;}
            if(freeBugs[x].name == 'Leoko'){b14_text(); current = b14_1;}

          }
        } 
      }
  }
  
    if(outsideState == true && profileButtonOutside.e == true){
      
      arrowDist2 = dist(mouseX, mouseY, profileButtonOutside.x, profileButtonOutside.y);
      if(arrowDist2 < 50) {scene = 3;}
      
      if(noCatchingBugs == true){
        let i = "INVENTORY FULL"
        text(i, width/2, height/2);
      } else{ 
        for (let x = 0; x < freeBugs.length; x++) {
          if (dist(mouseX, mouseY, freeBugs[x].x, freeBugs[x].y) < 10) {
            scene = 6;
            if(freeBugs[x].name == 'Raymo'){b0_text(); current = b0_1;}
            if(freeBugs[x].name == 'Simi'){b1_text(); current = b1_1;} 
            if(freeBugs[x].name == 'Kepjep'){b2_text(); current = b2_1;}
            if(freeBugs[x].name == 'Lorna'){b3_text(); current = b3_1;}
            if(freeBugs[x].name == 'Paul'){b4_text(); current = b4_1;}
            if(freeBugs[x].name == 'Onoog'){b5_text(); current = b5_1;}
            if(freeBugs[x].name == 'Keene'){b6_text(); current = b6_1;}
            if(freeBugs[x].name == 'Rlere'){b7_text(); current = b7_1;}
            if(freeBugs[x].name == 'Kaika'){b8_text(); current = b8_1;}
            if(freeBugs[x].name == 'Alama'){b9_text(); current = b9_1;}
            if(freeBugs[x].name == 'Sveny'){b10_text(); current = b10_1;}
            if(freeBugs[x].name == 'Qeno'){b11_text(); current = b11_1;}
            if(freeBugs[x].name == 'Yeki'){b12_text(); current = b12_1;}
            if(freeBugs[x].name == 'Goma'){b13_text(); current = b13_1;}
            if(freeBugs[x].name == 'Leoko'){b14_text(); current = b14_1;}
          }
        } 
      }
      
    }

  
}


function vidLoad() {
  titleVideo.loop();
  outVideo.loop();
}



document.documentElement.focus();
document.onkeydown = keyDown;
document.getElementById("test").onclick = clicked;

function keyDown(evt)
{
    var key;
    var el  =  document.getElementById("test");
    var left;
    if(!evt)
    {
        evt = window.event;
        if(!evt.which)
        {
            key  =  evt.keyCode;   
        }
    }else if(evt)
    {
        key = evt.which;   
    }
    if(el.style.left)
    {
        left = parseInt(el.style.left, 10);  
    }else if(!el.style.left)
    {
        left = 0;    
    }    
    switch(key)
    {
        case 37:
        left -= 10;
        el.style['left'] = left + "px";
        break;     
        case  39:
         left += 10;
        el.style['left'] = left + "px";
        break;     
    }
}

function clicked(evt)
{
    var el;
    if(!evt)
    {
        evt = window.event;
        el = evt.srcElement;    
    }else  if(evt)
    {
        el = evt.target;   
    }
    switch(el.id)
    {
        case "left":
        fireKey(el);
        break;   
        case "right":
        fireKey(el);
        break;     
    }
}

function fireKey(el)
{
    var key;
    switch(el.id)
    {
        case "left":
        key = 37;
        break;
        case "right":
        key = 39;
        break;    
    }
    if(document.createEventObject)
    {
        var eventObj = document.createEventObject();
        eventObj.keyCode = key;
        el.fireEvent("onkeydown", eventObj);   
    }else if(document.createEvent)
    {
        var eventObj = document.createEvent("Events");
        eventObj.initEvent("keydown", true, true);
        eventObj.which = key;
        el.dispatchEvent(eventObj);
    } 
}




class StorySection {
  constructor(_text, _option1, _target1, _option2, _target2) {
    this.text = _text;
    this.option1 = _option1;
    this.target1 = _target1;
    this.option2 = _option2;
    this.target2 = _target2;
    
  }
  
  exit(){
    console.log("OPOTION: " + this.option1);
      if(battleState == true && this.option1 == 'CATCH RAYMO'){
        b0.state = 'caught';
        bugsCaught++;
        const raymo = freeBugs.map(e => e.name).indexOf('Raymo');
        append(caughtBugs, b0);
        freeBugs.splice(raymo, 1);
        console.log(b0.name + ": " + raymo);
        console.log(b0.name + ": " + b0.state);
      } else if (battleState == true && this.option1 == 'Encase Simi\'s light'){
        b1.state = 'caught';
        bugsCaught++;
        const simi = freeBugs.map(e => e.name).indexOf('Simi');
        append(caughtBugs, b1);
        freeBugs.splice(simi, 1);
        console.log(b1.name + ": " + b1.state);
        console.log(b1.name + ": " + b1.state);
      }else if (battleState == true && this.option1 == "CATCH KEPJEP"){
        b2.state = 'caught';
        bugsCaught++;
        const kepjep = freeBugs.map(e => e.name).indexOf('Kepjep');
        append(caughtBugs, b2);
        freeBugs.splice(kepjep, 1);
        console.log(b2.name + ": " + kepjep);
        console.log(b2.name + ": " + b2.state);
      }else if (battleState == true && this.option1 == 'CATCH LORNA'){
        b3.state = 'caught';
        bugsCaught++;
        const lorna = freeBugs.map(e => e.name).indexOf('Lorna');
        append(caughtBugs, b3);
        freeBugs.splice(lorna, 1);
        console.log(b3.name + ": " + lorna);
        console.log(b3.name + ": " + b3.state);
      }else if (battleState == true && this.option1 == 'CATCH PAUL'){
        b4.state = 'caught';
        bugsCaught++;
        const paul = freeBugs.map(e => e.name).indexOf('Paul');
        append(caughtBugs, b4);
        freeBugs.splice(paul, 1);
        console.log(b4.name + ": " + paul);        
        console.log(b4.name + ": " + b4.state);
      }else if (battleState == true && this.option1 == 'CATCH ONOOG'){
        b5.state = 'caught';
        bugsCaught++;
        const onoog = freeBugs.map(e => e.name).indexOf('onoog');
        append(caughtBugs, b5);
        freeBugs.splice(onoog, 1);
        console.log(b5.name + ": " + onoog);        
        console.log(b5.name + ": " + b5.state);
      }else if (battleState == true && this.option1 == 'CATCH KEENE'){
        b6.state = 'caught';
        bugsCaught++;
        const keene = freeBugs.map(e => e.name).indexOf('keene');
        append(caughtBugs, b6);
        freeBugs.splice(keene, 1);
        console.log(b6.name + ": " + keene);        
        console.log(b6.name + ": " + b5.state);
      }else if (battleState == true && this.option1 == 'Catch the human'){
        b7.state = 'caught';
        bugsCaught++;
        const rlere = freeBugs.map(e => e.name).indexOf('rlere');
        append(caughtBugs, b7);
        freeBugs.splice(rlere, 1);
        console.log(b7.name + ": " + rlere);        
        console.log(b7.name + ": " + b7.state);
      }else if (battleState == true && this.option1 == 'CATCH KAIKA'){
        b8.state = 'caught';
        bugsCaught++;
        const kaika = freeBugs.map(e => e.name).indexOf('kaika');
        append(caughtBugs, b8);
        freeBugs.splice(kaika, 1);
        console.log(b8.name + ": " + kaika);        
        console.log(b8.name + ": " + b8.state);
      }else if (battleState == true && this.option1 == 'CATCH ALAMA'){
        b9.state = 'caught';
        bugsCaught++;
        const alama = freeBugs.map(e => e.name).indexOf('alama');
        append(caughtBugs, b9);
        freeBugs.splice(alama, 1);
        console.log(b9.name + ": " + alama);        
        console.log(b9.name + ": " + b9.state);
      }else if (battleState == true && this.option1 == 'CATCH SVENY'){
        b10.state = 'caught';
        bugsCaught++;
        const sveny = freeBugs.map(e => e.name).indexOf('sveny');
        append(caughtBugs, b10);
        freeBugs.splice(sveny, 1);
        console.log(b10.name + ": " + sveny);        
        console.log(b10.name + ": " + b10.state);
      }else if (battleState == true && this.option1 == 'Catch Qeno while they are off guard laughing.'){
        b11.state = 'caught';
        bugsCaught++;
        const qeno = freeBugs.map(e => e.name).indexOf('qeno');
        append(caughtBugs, b11);
        freeBugs.splice(qeno, 1);
        console.log(b11.name + ": " + qeno);        
        console.log(b11.name + ": " + b11.state);
      }else if (battleState == true && this.option1 == 'CATCH YEKI'){
        b12.state = 'caught';
        bugsCaught++;
        const yeki = freeBugs.map(e => e.name).indexOf('yeki');
        append(caughtBugs, b12);
        freeBugs.splice(yeki, 1);
        console.log(b12.name + ": " + yeki);        
        console.log(b12.name + ": " + b12.state);
      }else if (battleState == true && (this.option1 == 'Sike! Catch Goma.' || this.option1 == 'CATCH GOMA')){
        b13.state = 'caught';
        bugsCaught++;
        const goma = freeBugs.map(e => e.name).indexOf('goma');
        append(caughtBugs, b13);
        freeBugs.splice(goma, 1);
        console.log(b13.name + ": " + goma);        
        console.log(b13.name + ": " + b13.state);
      }else if (battleState == true && this.option1 == 'CATCH LEOKO'){
        b14.state = 'caught';
        bugsCaught++;
        const leoko = freeBugs.map(e => e.name).indexOf('leoko');
        append(caughtBugs, b14);
        freeBugs.splice(leoko, 1);
        console.log(b14.name + ": " + leoko);        
        console.log(b14.name + ": " + b14.state);
      }else if (battleState == true){
        console.log('LOST BUG');
      }
    
    // if(introspec_num >= 3){
    //   console.log("CAMELS AND CAMELS");
    //   fill(255);
    //   rect(100, 100, 100 ,100);
    // }else{
    //     textScene = false;
    //     battleState = false;
    //     console.log("EXIT!");
    //     scene = 3;
    // }
    
      if (introspec_num >= 3 && this.option1 == 'GO ON'){
        textScene = false;
        battleState = false;
        outVid = true;
        scene = 1;
      } else{
        textScene = false;
        battleState = false;
        console.log("EXIT!");
        scene = 3;
    
      }
  }
  
}

// INDIVIDUAL SCENES INDIVIDUAL SCENES INDIVIDUAL SCENES INDIVIDUAL SCENES
// INDIVIDUAL SCENES INDIVIDUAL SCENES INDIVIDUAL SCENES INDIVIDUAL SCENES
// INDIVIDUAL SCENES INDIVIDUAL SCENES INDIVIDUAL SCENES INDIVIDUAL SCENES


function intro(){
  console.log('intro');
  preStartButton.set(false);
  startButton.set(true);
  // fill(100, 20, 100);
  // rect(0,0,600,400);
  
  startButton.display();  //start button --> innerMonologue
  
}

function outro(){
  console.log('outro');
  fill(100, 210, 100);
  rect(0,0,600,400);
  //background
  //replay button
}

function innerMonologue(){
  console.log('inner monologue');
  startButton.set(false);
  
  fill(100, 20, 100);
  rect(0,0,600,400);
  
  //if(innerMonologue_count = 0){ innerMonologue_displayText = '_'; displayText(innerMonologue);   <add text buttons> innerMonologue_count++; profile(); }
  
}

function profile(){
  profileState = true;
  console.log('profile!');
  displayInventory();

  
  //------
  let namesFree = [];
  for(let y= 0; y < freeBugs.length; y++){
    namesFree[y] = freeBugs[y].name;
  }
  let namesCaught = [];
  for(let y= 0; y < caughtBugs.length; y++){
    namesCaught[y] = caughtBugs[y].name;
  }
  
  let b = 'FREE BUGS: ' + namesFree;
  fill(30);
  text(b, 100, 200, 110, 300);
  
  let e = 'CAUGHT BUGS: ' + namesCaught;
  fill(30);
  text(e, 100, 300, 310, 200); 
  
  insideButton.set(true);
  outsideButton.set(true);
  bugJuiceButton.set(true);
  freeBugButton.set(true);
  introspectionButton.set(true);
  
  insideButton.display();
  outsideButton.display();
  bugJuiceButton.display();
  freeBugButton.display();
  introspectionButton.display();
  
}


function outside() {
  console.log('outside');
  fill(0, 200, 50);
  rect(0,0,600,400);
  
  insideButton.set(false);
  outsideButton.set(false);
  profileButtonOutside.set(true);
  profileButtonInside.set(false);
  profileButtonOutside.display();
  
}

function inside () {
  console.log('inside');
  fill(255, 200, 250);
  rect(0,0,600,400);
  
  insideButton.set(false);
  outsideButton.set(false);
  profileButtonOutside.set(false);
  profileButtonInside.set(true);
  profileButtonInside.display();

}

function introspection() {
  console.log("INTROSPECTION");
  fill(100, 20, 100);
  rect(0,0,600,400);

  scene = 6;
  textScene = true;
  
  if(introspec_num == 0){current = inspec1_1;}
  if(introspec_num == 1){current = inspec2_1;}
  if(introspec_num >= 2){current = inspec3_1;}
  introspec_num++;
  
  
}

function displayInventory() {
  
  //just change background?
  
  console.log('DISPLAY INVENTYOORY');
  
  // if(caughtBugs.length == 0){
  //   background(2, 10, 20);
  // }else if(caughtBugs.length == 1){
  //   background(20, 10, 220); //insert glasses image here
  // }else if(caughtBugs.length == 2){
  //   background(212, 10, 220);
  // }else if(caughtBugs.length == 3){
  //   background(20, 120, 220);
  // }else if(caughtBugs.length == 4){
  //   background(20, 110, 120);
  // }else if(caughtBugs.length == 5){
  //   background(220, 90, 20);
  // }
  profile_png.position(0, 0);
  image(profile_png, 0, 0);
     
  
  //show bugs!
  let p = 0;
  for(let i = 0; i < caughtBugs.length; i++){
    if(i <= 2){
      if(caughtBugs[i].name == 'Simi'){
        image(caughtBugs[i].image, 110+(i*80), 150); //special adjustment for antlers
      }else{
        image(caughtBugs[i].image, 125+(i*80), 170);
      }
    }
  }
  for(let k = 3; k < caughtBugs.length; k++){
    if(k > 2){
      if(caughtBugs[k].name == 'Simi'){
        image(caughtBugs[k].image, 110+(p*80), 240); //special adjustment for antlers
      }else{
         image(caughtBugs[k].image, 125+(p*80), 240);
      }
      p++;
    }
  }
    
  let s = 'BUGS: ' + bugsCaught;
  fill(30);
  text(s, 370, 190, 110, 110);
  
  let q = 'BUGS JUICED: ' + juice;
  fill(30);
  text(q, 370, 220, 110, 110);
  
  let a = 'BUGS FREED: ' + frees;
  fill(30);
  text(a, 370, 250, 110, 110);
  
  if(noCatchingBugs == true){
    let i = "INVENTORY FULL";
    fill(255, 0 , 0);
    text(i, 370, 280, 110, 110);
  }
  
  
  let title = 'THE SCAVENGER';
  let tx;
  let ty;
  
  if(juice > frees){
    if(juice >= 1 && juice <= 7){
      title = 'NOVICE JUICER';
      image(a4_img, 283, 65);
      tx = 245;
      ty = 20;
    }else if(juice >= 8 && juice <= 12){
      title = 'INSECT MIXOLOGIST';
      image(a3_img, 290, 65);
      tx = 245;
      ty = 20;
    }else if(juice >= 13){
      title = 'GUZZLER OF THE BUGS';
      image(a2_img, 290, 65);
      tx = 235;
      ty = 30;
    }
  }else if( frees > juice){
    if(frees >= 1 && frees <= 7){
      title = 'INSECT ADVOCATOR';
      image(a6_img, 283, 65);
      tx = 245;
      ty = 20;
    }else if(frees >= 8 && frees <= 12){
      title = 'FREEDOM CHASER';
      image(a5_img, 276, 65);
      tx = 245;
      ty = 20;
    }else if(frees >= 13){
      title = 'LIBERATOR OF THE BUGS';
      image(a7_img, 280, 65);
      tx = 227;
      ty = 30;
    }
  }else{
    title = 'THE SCAVENGER';
    image(a1_img, 290, 65);
    tx = 245;
    ty = 20;
  }
  fill(252, 209, 50);
  text(title, tx, ty, 200, 40);
  
  
  let bugProfile;
  noStroke();
  //hover functionality!
   if (dist(mouseX, mouseY, 145, 190) < 40) {
        fill(176, 175, 61);
        rect(360, 170, 130, 140);
        console.log("HOVERING OVER BOX 1");
        if(caughtBugs[0] == undefined){
          bugProfile = 'NO BUG HERE';
        }else{
          bugProfile = "NAME: " + caughtBugs[0].name + "\nHOBBY: " + caughtBugs[0].hobby;
        }
    } 
    if (dist(mouseX, mouseY, 225, 190) < 40) {
        fill(176, 175, 61);
        rect(360, 170, 130, 140);
        console.log("HOVERING OVER BOX 2");
        if(caughtBugs[1] == undefined){
          bugProfile = 'NO BUG HERE';
        }else{
          bugProfile = "NAME: " + caughtBugs[1].name + "\nHOBBY: " + caughtBugs[1].hobby;
        }
    } 
    if (dist(mouseX, mouseY, 295, 190) < 40) {
        fill(176, 175, 61);
        rect(360, 170, 130, 140);
        console.log("HOVERING OVER BOX 3");
        if(caughtBugs[2] == undefined){
          bugProfile = 'NO BUG HERE';
        }else{
          bugProfile = "NAME: " + caughtBugs[2].name + "\nHOBBY: " + caughtBugs[2].hobby;
        }
    } 
    if (dist(mouseX, mouseY, 145, 270) < 40) {
        fill(176, 175, 61);
        rect(360, 170, 130, 140);
        console.log("HOVERING OVER BOX 4");
        if(caughtBugs[3] == undefined){
          bugProfile = 'NO BUG HERE';
        }else{
          bugProfile = "NAME: " + caughtBugs[3].name + "\nHOBBY: " + caughtBugs[3].hobby;
        }
    } 
    if (dist(mouseX, mouseY, 225, 270) < 40) {
        fill(176, 175, 61);
        rect(360, 170, 130, 140);
        console.log("HOVERING OVER BOX 5");
        if(caughtBugs[4] == undefined){
          bugProfile = 'NO BUG HERE';
        }else{
          bugProfile = "NAME: " + caughtBugs[4].name + "\nHOBBY: " + caughtBugs[4].hobby;
        }
    } 
    if (dist(mouseX, mouseY, 295, 270) < 40) {
        fill(176, 175, 61);
        rect(360, 170, 130, 140);
        console.log("HOVERING OVER BOX 6");
        if(caughtBugs[5] == undefined){
          bugProfile = 'NO BUG HERE';
        }else{
          bugProfile = "NAME: " + caughtBugs[5].name + "\nHOBBY: " + caughtBugs[5].hobby;
        }
    } 
    fill(252, 209, 50);
    text(bugProfile, 370, 200, 120, 300);
  
  
}



function createInnerMonologueText(){
  
    im9 = new StorySection("You got that right!", 'Enter game', null, '', null);
    im8 = new StorySection("I am glad we agree on this -- for we have much time to be within their humbling presence..." ,'ENTER GAME', null, '', null);
  im7 = new StorySection("Yes, yes. Bugs, mystical creatures they are... I'm pretty fond of those little creatures...", "Me as well", im8, "I could take or leave them ...", im9);
    im6 = new StorySection("Ho ho! Perhaps you do!", 'ENTER GAME', null, '', null);
    im5 = new StorySection("You got a good point there...", "ENTER GAME", null, " ", null);
    im4 = new StorySection("A great question, naive one... things unbeknownst too man... Like bugs!", "I think Ive got a good understanding of bugs...", im6, "Youre Right!", im7);
    im3 = new StorySection("Why yes! You never know what lurks just beyond sight...", "Like what?", im4, 'Maybe you should be more wary of whats visible right infront of you.', im5);
    im2 = new StorySection("Im glad we agree on this. A humbling experience it is to live this life.", "Enter game", null , "", null);
    im1 = new StorySection("Its a wild wild world out there...", "Agreed.", im2, "You think?", im3);
  
}

function createIntrospectionText1(){ //1
  //introspectionEnabled = true; turn boolean to true after player has clicked atleast 3 bugs
  //inspect 1_1, 2_1, and 3_1
  
  inspec1_14 = new StorySection("Hahahha!!", 'EXIT', null, 'EXIT', null);
  inspec1_13 = new StorySection("That's the spirit! But hey, you got a nice sense-o compassion kid. Keep it up. It might get you somewhere!", 'EXIT', null, 'EXIT', null);
  inspec1_12 = new StorySection("Well golly-gee. Aren't you some do-good-thinker huh. I got a question for you. Where is the balance between your life and others?", 'EXIT', null, 'EXIT', null);
  inspec1_11 = new StorySection("You and them both! You always have the option to free them! But why catch em' in the first place I say...", 'EXIT', null, 'EXIT', null);
  inspec1_10 = new StorySection("Well... you'd technically be drinking them.", 'Ha ha.', inspec1_14, '', inspec1_14);
  inspec1_9 = new StorySection("A quick snack, or the sustenance of life!", '... It\'s the sustenance of death for them', inspec1_12, 'I suppose.', inspec1_13);
  inspec1_8 = new StorySection("Well, maybe try adding one of those Simi bugs in it. That'll spice up the flavor. I hear it gives it a sweet crystal-like taste.", 'EXIT', null, 'EXIT', null);
  inspec1_7 = new StorySection("And why's that?", 'I don\'t eat bugs', inspec1_10, 'I don\'t like killing them', inspec1_11);
  inspec1_6 = new StorySection("Go out there are maybe make some bug juice!", 'EXIT', null, 'EXIT', null);
  inspec1_5 = new StorySection("Yes lots to gain from those bug juice shots!", 'EXIT', null, 'EXIT', null);
  inspec1_4 = new StorySection("And why's that?", 'Kinda Bland.', inspec1_8, 'I taste the misery. Their gentle souls ended... and for what? A quick snack?', inspec1_9);
  inspec1_3 = new StorySection("Maybe give it a try. To make bug juice, catch some bugs first. Then, just press the bug-juice-button located next to your inventory", 'Alright sounds good', inspec1_6, 'I think I\'ll pass', inspec1_7);
  inspec1_2 = new StorySection("Oh great, how's it taste?", 'Terrible', inspec1_4, 'Delicious', inspec1_5);
  inspec1_1 = new StorySection("Have you tried making bug juice? Click the red arrows to enter the field.", 'Yes', inspec1_2, 'No', inspec1_3);
  current = inspec1_1;
  console.log("intro spec text");
  
}

function createIntrospectionText2(){ //2
  //introspectionEnabled = true; turn boolean to true after player has clicked atleast 3 bugs
  //inspect 1_1, 2_1, and 3_1
  
  inspec2_6 = new StorySection("Come back when you've collected a few more bugs, kido. Juice em, free em....see how it changes your avatar title eh! Your first actions are generally the most impacting. After that, it may take a while to change your reputation 'round here -- for good or for worse.", 'EXIT', null, 'EXIT', null);
  inspec2_5 = new StorySection("Hahaha! Get a load of you! What isn't nonsense! Riddle me that, O-voice-of-logic! Hahaha!", 'Hmph.', inspec2_6, 'I\'m getting sick of you', inspec2_6);
  inspec2_4 = new StorySection("Yeah... they never are, are they? Come back when you've collected a few more bugs, kido. Juice em, free em....see how it changes your avatar title eh!", 'EXIT', null, 'EXIT', null);
  inspec2_3 = new StorySection("Whatcha mean, 'eh' ?", 'It\'s all nonsense!', inspec2_5, 'They\'re not like I thought they\'d be.', inspec2_4);
  inspec2_2 = new StorySection("Wondrous, mystical creatures. Sometimes I wish I were a little critter crawling about.", 'Me too.', inspec2_6, 'They\'re not like I thought they\'d be.', inspec2_4);
  inspec2_1 = new StorySection("You've caught a couple bugs there huh? They're interesting fellas.", 'Agreed.', inspec2_2, 'Eh.', inspec2_3);
  current = inspec2_1;
  console.log("intro spec text");
  
}

function createIntrospectionText3(){ //3
  //introspectionEnabled = true; turn boolean to true after player has clicked atleast 3 bugs
  //inspect 1_1, 2_1, and 3_1
  
  inspec3_14 = new StorySection("Well. Be on with it then. I surely won't be getting in your way no more.", 'GO ON', null, 'Stay', null);
  inspec3_13 = new StorySection("Your friend! A guide! The only person who's been helping you through this world of bugs!", 'Hit a nerve there huh...', inspec3_14, 'Calm down', inspec3_14);
  inspec3_12 = new StorySection("Ha ha! Humor me more with your silly boundaries!", 'GO ON', null, 'Stay?', null);
  inspec3_11 = new StorySection("That I am.", 'GO ON', null, 'Stay?', null);
  inspec3_10 = new StorySection("How dare you.  I will not stand these accusations! ...You are nothing but a bug to be crushed!", 'Hit a nerve there huh...', inspec3_14, 'Calm down', inspec3_14);
  inspec3_9 = new StorySection("Well isn't that some funny thinking! You got plenty to do here! You're not limited to only what you see, if you know what I mean, ahahaha. Vision screens only take you so far.", 'I suppose you\'re right.', inspec3_11, 'Are you breaking the 4th wall?', inspec3_12);
  inspec3_8 = new StorySection("*Splutters* W-What! I'm not forcing you to do anything!", 'Who even are you?', inspec3_13, 'You\'ve forced me', inspec3_10);
  inspec3_7 = new StorySection("What are you blind or something kid?", 'Return', null, '', null);
  inspec3_6 = new StorySection("Hahaha... What do you mean?", 'I feel as though the absence of other possibilities inhibit me from doing much else with my life. I\'m forced to catch bugs, else I have nothing.', inspec3_9, 'You\'re forcing me to catch bugs', inspec3_8);
  inspec3_5 = new StorySection("You know, you can leave whenever you like?... Funny these new comers... thinking they've got these random obligations...", 'GO ON', null, 'Stay', null);
  inspec3_4 = new StorySection("Get on back out there and catch some more bugs!", 'Return', null, 'Return', null);
  inspec3_3 = new StorySection("Well, no one\'s-a forcing you!", 'That\'s true', inspec3_5, 'That\'s not true', inspec3_6);
  inspec3_2 = new StorySection("Aye, it's a good past-time. Meet some nice folks along the way.", 'Yup.', inspec3_4, 'Who?', inspec3_7);
  inspec3_1 = new StorySection("What are you thinking these days?", 'I enjoy catching bugs', inspec3_2, 'I tire of catching bugs sometimes', inspec3_3);
  current = inspec3_1;
  console.log("intro spec text");
  
}

function b0_text () { //Raymo text
  battleState = true;
  currentBug = b0;
  
  b0_5 = new StorySection("Figures. Well. I'll be on my way now.", 'CATCH RAYMO', null, 'Leave bug alone', null);
  b0_4 = new StorySection("Ah ok. Well. I'll be on my way now.", 'CATCH RAYMO', null, 'Leave bug alone', null);
  b0_3 = new StorySection("Ah, well hello to you!", 'CATCH RAYMO', null, 'Leave bug alone', null);
  b0_2 = new StorySection("Oh, eh well, I'm not really up for that. Say, haven't I see you before?", 'No', b0_4, 'Yes', b0_5);
  b0_1 = new StorySection("What do you want?", 'Um, to catch you?', b0_2, 'Just saying hello', b0_3);
  current = b0_1;
  
  console.log("BUGO!: " + currentBug);
}

function b1_text () { //Simi text
  battleState = true;
  currentBug = b1;

  b1_2 = new StorySection("Simi flutters, clearly flattered.", 'Encase Simi\'s light', null, 'Leave Simi\'s light untouched', null);
  b1_1 = new StorySection("Simi floats around you like an iridescent being, surrounded by light and flame.", 'You\'re beautiful!', b1_2, 'You\'re gorgeous!', b1_2);
  current = b1_1;
  
  console.log("BUGO!: " + currentBug);
}

function b2_text () { //Kepjep text
  battleState = true;
  currentBug = b2;
  
  b2_7 = new StorySection("Surely not... I'll be on my way then.", "Leave Kepjep", null, "", null);
  b2_6 = new StorySection("Fantastic.", 'CATCH KEPJEP', null, "", null);
  b2_5 = new StorySection("Hm. Yeah you are just like a bug then.", 'Leave Kepjep', null, "", null);
  b2_4 = new StorySection("Um. I'm not sure. But you're saving me by bringing me to a new and wondrous place, right?", 'Sure', b2_6, 'Does a box count?', b2_7);
  b2_3 = new StorySection("Oh. Who are you then?", 'Your worst nightmare', b2_5, 'Just an average scavenger', b2_5);
  b2_2 = new StorySection("My Hero!", "CATCH KEPJEP", null, 'What am I saving you from?', b2_4);
  b2_1 = new StorySection("All hail thee! Are you the Savior of the Bugs!", 'Yes', b2_2, 'No that is not me.', b2_3);
  current = b2_1;
  
  console.log("BUGO!: " + currentBug);
}

function b3_text () { //Lorna text
  battleState = true;
  currentBug = b3;
  
  b3_6 = new StorySection("I'm blushing! ", 'CATCH LORNA', null, 'Leave Lorna', null);
  b3_5 = new StorySection("Well aren't you just a wet sock. I'll be on my way then.", 'Leave Lorna be.', null, '', null);
  b3_4 = new StorySection("Wrong! Leave me be.", 'Leave Lorna be.', null, '', null);
  b3_3 = new StorySection("Hm. I thought I was more of a burnt umber...", "Surely not, if anything, magenta.", b3_6, 'I agree.', b3_6);
  b3_2 = new StorySection("Oh wow! You flatter me. Ok, now what color am I to you?", 'Green.', b3_3, 'Why are we even doing this?', b3_5);
  b3_1 = new StorySection("What shape am I to you?", 'A triangle?', b3_2, 'A square?', b3_4);
  current = b3_1;
  console.log("BUGO!: " + currentBug);
}

function b4_text () { //Paul text
  battleState = true;
  currentBug = b4;
  
  b4_7 = new StorySection("Understandable.", 'Leave Paul', null, '', null);
  b4_6 = new StorySection("Well then, good things are coming to you. Blood in great big gallons will be delivered to your feet", 'I can\'t wait', null, '', null);
  b4_5 = new StorySection("Are you willing to wait for it?", 'Yes', b4_6, 'No', b4_7);
  b4_4 = new StorySection("I feel a strange sense of kinship to you.", 'CATCH PAUL', null, 'LEAVE PAUL', null);
  b4_3 = new StorySection("Hm, it always does. I think it has something to do with the feathers.", 'That doesn\'t make sense.', b4_4, 'Probably', b4_4);
  b4_2 = new StorySection("How'd it taste?", 'Spicy', b4_3, 'Like chalk', b4_3);
  b4_1 = new StorySection("Have you ever tasted the boiling blood of swans?", 'Yes', b4_2, 'No', b4_5);
  current = b4_1;
  console.log("BUGO!: " + currentBug);
}

function b5_text () { //Onoog text
  battleState = true;
  currentBug = b5;
  
  b5_4 = new StorySection("No? Alright then. I'll be-a staying right here!", 'CATCH ONOOG', null, 'Leave Onoog', null);
  b5_3 = new StorySection("Doesn't it... I think I'll be on my way then!", 'Let Onoog retreat', null, '', null);
  b5_2 = new StorySection("*laughs* I'm not asking if I should retreat from you. I'm asking if I should *retreat*. Til my eyes close and my hands retire my body. I'll become the wind that gives branches life.", 'Yes, that sounds nice', b5_3, 'No, I don\'t think so.', b5_4);
  b5_1 = new StorySection("Should I retreat?", 'No I am no danger to you', b5_2, 'Yes beware', b5_2);
  current = b5_1;
  console.log("BUGO!: " + currentBug);
}

function b6_text () { //Keene text
  battleState = true;
  currentBug = b6;
  
  b6_2 = new StorySection("What!? What's going on? What's going on?? You're blind. Blind! You're blind I say!", 'CATCH KEENE', null, 'Leave Keene be', null);
  b6_1 = new StorySection("WHAT IS HAPPENING TO US?", 'Nothing', b6_2, 'What\'s going on?', b6_2);
  current = b6_1;
  console.log("BUGO!: " + currentBug);
}

function b7_text () { //Rlere text
  battleState = true;
  currentBug = b7;
  
  b7_4 = new StorySection("I AM HUMAN!", 'Catch the human', null, 'Leave the human', null);
  b7_3 = new StorySection("Rude! Leave me now, so I can continue with my human meedlings", 'Leave Rlere', null, '', null);
  b7_2 = new StorySection("I am, I really am! You see me, don't you!", 'Yeah, but you look like a bug.', b7_3, 'Yeah, I suppose you do seem human enough', b7_4);
  b7_1 = new StorySection("I AM A HUMAN", 'Lies', b7_2, 'You are?', b7_2);
  current = b7_1;
  console.log("BUGO!: " + currentBug);
}



function b8_text () { //KAIKA text
  battleState = true;
  currentBug = b8;
 
  b8_6 = new StorySection("It comforts me that we will be one.", 'CATCH KAIKA', null, '', null);
  b8_5 = new StorySection("Your blindness will be cured eventually. Until then, friend.", 'Until then.', null, '', null);
  b8_4 = new StorySection("Thank you child. This garden is a beautiful one. I\'m sure you\'ll want to be buried here as well.", 'I don\'t see a garden.', b8_5, 'I wouldn\'t mind.', b8_6);
  b8_3 = new StorySection("That's for sure.", 'CATCH KAIKA', null, 'Leave Kaika be', null);
  b8_2 = new StorySection("Thank you child. There's not many bugs I can trust these days.", 'Good thing I\'m a human!', b8_3, 'Bugs are not to be trusted.', b8_3);
  b8_1 = new StorySection("Bury me where I lie. Bury me in the garden. Bury me where I lie. Bury me where I lie.", 'I promise I will bury you in the garden', b8_2, 'I promise I will bury you where you lie now.', b8_4);
  current = b8_1;
  console.log("BUGO!: " + currentBug);
}

function b9_text () { //ALAMA text
  battleState = true;
  currentBug = b9;
  
  b9_6 = new StorySection("They truly did leave me. As you will do the same now.", 'Leave Alama', null, '', null);
  b9_5 = new StorySection("As I see you now clearly. Why didn't you say you had wings! Let's fly together sometime.", 'CATCH ALAMA', null, 'Leave Alama', null);
  b9_4 = new StorySection("I did. They left me. I no longer see them. I no longer feel them.", 'I still see your wings', b9_5, 'I don\'t see them either.', b9_6);
  b9_3 = new StorySection("Yes, you're right.", 'CATCH ALAMA', null, 'Leave Alama', null);
  b9_2 = new StorySection("I...  don't know. All I remember was that I no longer felt like myself. I no longer felt alive as I once had", 'You\'ll find yourself again soon.', b9_3, 'Maybe a new start is good for you.', b9_3);
  b9_1 = new StorySection("I was pulled right out of the sky", 'How did that make you feel?', b9_2, 'Do you have wings?', b9_4);
  current = b9_1;
  console.log("BUGO!: " + currentBug);
}

function b10_text () { //SVENY text
  battleState = true;
  currentBug = b10;
  
  b10_4 = new StorySection("Yes, most definitely.", 'CATCH SVENY', null, 'Leave Sveny be', null);
  b10_3 = new StorySection("Yes, just as it does yours.", 'CATCH SVENY', null, 'Leave Sveny be', null);
  b10_2 = new StorySection("The universe runs through my veins", 'Just as it does mine', b10_3, 'Kinda cool', b10_4);
  b10_1 = new StorySection("I am the creature that holds every part of myself", 'Makes sense', b10_2, 'Is that so?', b10_2);
  current = b10_1;
  console.log("BUGO!: " + currentBug);
}

function b11_text () { //QENO text
  battleState = true;
  currentBug = b11;
  
  b11_10 = new StorySection("Quiet now! Go mingle with the others!", 'Walk away from Qeno', null, '', null);
  b11_9 = new StorySection("You flatter me!!! HAHHHAAH", 'Catch Qeno while they are off guard laughing.', null, '', null);
  b11_8 = new StorySection("What's that? I can't hear your little squeaking, creature. Haha!", 'Maniac!', b11_10, 'Psycho!', b11_9);
  b11_7 = new StorySection("Hahaha!!! Lil bugger tried. A good effort no doubt.", 'Exit', null, '', null);
  b11_6 = new StorySection("Oh, pay no mind! You\'ll be outta there soon enough.", 'CATCH QENO', b11_7, '', b11_7);
  b11_5 = new StorySection("Ha ha! *placing you in my inventory*. How's it looking in there!", 'A bit dusty.', b11_6, 'Let me out!', b11_8);
  b11_4 = new StorySection("Well then... meet you on the flip side. HAHA!", 'Walk away from Qeno', null, '', null);
  b11_3 = new StorySection("Morsel it is!!", 'CATCH QENO', null, 'Walk away from Qeno', null);
  b11_2 = new StorySection("Yeah, yeah, sure! Haha! Morsel, you'll be. Morsel, I say!", 'I don\'t wanna be morsel...', b11_3, 'You\'ll be morsel soon enough too.', b11_4);
  b11_1 = new StorySection("I caught ya!", 'No, I caught you.', b11_2, 'You caught me!', b11_5);
  current = b11_1;
  console.log("BUGO!: " + currentBug);
}

function b12_text () { //YEKI text
  battleState = true;
  currentBug = b12;
  
  b12_8 = new StorySection("Yes yes. Let's think together!", 'CATCH YEKI', null, 'LET YEKI MOVE ON', null);
  b12_7 = new StorySection("Seems anti-climatic, but ok.", 'CATCH YEKI', null, 'LET YEKI MOVE ON', null);
  b12_6 = new StorySection("What do we do about this?", 'Generally, people just move on.', b12_7, 'Think about it a little, maybe?', b12_8);
  b12_5 = new StorySection("Uh huh. Be gone liar! I don't take lying lightly. A fragile structure we live on. It's trust or nothing.", 'Leave Yeki be', null, '', null);
  b12_4 = new StorySection("... Were you lying to me!?", 'Um. no.', b12_5, 'Maybe.', b12_5);
  b12_3 = new StorySection("Again and again?? Hpmf. If you say so... I swear I've seen your face before.", 'Leave Yeki be', null, '', null);
  b12_2 = new StorySection("No, I could have swore we\'ve had this conversation before.", 'Again and again, I say no.', b12_3, 'Ok, ok, you\'re right.', b12_4);
  b12_1 = new StorySection("I\'m having deja vu I think", 'No you\'re not', b12_2, 'Me too', b12_6);
  current = b12_1;
  console.log("BUGO!: " + currentBug);
}

function b13_text () { //GOMA text
  battleState = true;
  currentBug = b13;
  
  b13_5 = new StorySection("*Cries* Does it even matter!", 'CATCH GOMA', null, 'Leave Goma be', null);
  b13_4 = new StorySection("I- I don't know. Leoko, maybe Paul? Or Lorna, he's vain! Qeno even! Anyone but me!", 'Coward!', b13_5, 'Face your destiny with diginity!', b13_5);
  b13_3 = new StorySection("Praise be. Thank you.", 'Sike! Catch Goma.', null, 'Leave Goma be', null);
  b13_2 = new StorySection("No I wish for solitude. Give me that at least, won't you?", 'Do I owe you something?', b13_3, 'Alright, I\'ll leave you alone', b13_3);
  b13_1 = new StorySection("No! Not me! Not me!", 'Not you?', b13_2, 'If not you, then who?', b13_4);
  current = b13_1;
  console.log("BUGO!: " + currentBug);
}

function b14_text () { //LEOKO text
  battleState = true;
  currentBug = b14;
  
  b14_5 = new StorySection("YOU'RE WELCOME!!", 'CATCH LEOKO', null, 'RELEASE LEOKO', null);
  b14_4 = new StorySection("Welcome home of course!!", 'This isn\'t home.', b14_3, 'Oh, thanks.', b14_5);
  b14_3 = new StorySection("'Course it is, silly! We're all family here. I'm glad you could make it.", 'CATCH LEOKO', null, 'RELEASE LEOKO', null);
  b14_2 = new StorySection("YOU'RE WELCOME!!", 'CATCH LEOKO', null, 'RELEASE LEOKO', null);
  b14_1 = new StorySection("Welcome, welcome!", 'Thanks', b14_2, 'Welcome to where?', b14_4);
  current = b14_1;
  console.log("BUGO!: " + currentBug);
}

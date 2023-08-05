//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button, a2Button;
let b1Button, b2Button, b3Button;
let c1Button, c2Button, c3Button;
let d1Button, d2Button;
let e1Button, e2Button;
let f1Button, f2Button;
let screen = 0;
let knowConnor = false;
let connorImage, sumoImage;
var gothamRoundedLight, gothamUltra;
var connorMusic;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(23);
  noStroke();
  textFont(gothamRoundedLight);
  connorMusic.loop();

  // Set up the home screen
  background("#49c0f0");
  fill("#314158");
  text("Welcome to a", width/2, height/2 - 120);
  
  textFont(gothamUltra);
  textSize(35);
  text("\nDetroit: Become Human", width/2, height/2 - 120);

  textFont(gothamRoundedLight);
  textSize(23);  
  text("\n\n\nChoose Your Own Adventure Game!", width/2, height/2 - 120);

  text("\n\n\nPress \"enter\" to start.", width/2, height/2 - 50);

  image(connorImage, -30, 160, 250, 250);
  image(sumoImage, 440, 225, 160, 160);

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2 + 105);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);

  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
  b3Button = new Sprite(-250, -250);

  c1Button = new Sprite(-300, -300);
  c2Button = new Sprite(-350, -350);
  c3Button = new Sprite(-400, -400);

  d1Button = new Sprite(-450, -450);
  d2Button = new Sprite(-500, -500);

  e1Button = new Sprite(-550, -550);
  e2Button = new Sprite(-600, -600);

  f1Button = new Sprite(-650, -650);
  f2Button = new Sprite(-700, -700);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "#314158";
  enterButton.text = "Enter";
  enterButton.textColor = "#baf3ec";

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("pressed");
    showScreen1();
    screen = 1; // 1: Setting in workplace
  }
  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      print("Display screen 2");
      showScreen2();
      screen = 2; // 2: Ask who Connor is + attack on workplace
    } else if (a2Button.mouse.presses()) {
      print("Display screen 3");
      showScreen3();
      screen = 3; // 3: Focus on your work + attack on workplace
    }
  }
  else if (screen == 2) {
    knowConnor = true;
    if (b1Button.mouse.presses()) {
      showScreen4();
      screen = 4; // 4: Hide + android finds you
    } else if (b2Button.mouse.presses()) {
      showScreen8();
      screen = 8; // 8: Play dead + hear Connor's voice
    } else if (b3Button.mouse.presses()) {
      showScreen11();
      screen = 11; // 11: Run away + get shot
    }
  }
  else if (screen == 3) {
    knowConnor = false;
    if (c1Button.mouse.presses()) {
      showScreen4();
      screen = 4; // 4: Hide + android finds you
    } else if (c2Button.mouse.presses()) {
      showScreen8();
      screen = 8; // 8: Play dead + hear Connor's voice
    } else if (c3Button.mouse.presses()) {
      showScreen11();
      screen = 11; // 11: Run away + get shot
    }
  }
  else if (screen == 4) {
    if (d1Button.mouse.presses()) {
      let rand = Math.floor(Math.random() * 10);
      print(rand);
      if (rand > 6) {
        showScreen5();
        screen = 5; // 5: Attack - Win (end)
      } else {
        showScreen6();
        screen = 6; // 6: Attack - Lose (end)
      }
    } else if (d2Button.mouse.presses()) {
      showScreen7();
      screen = 7; // 7: Spare (end)
    }
  }
  else if (screen == 8) {
    if (e1Button.mouse.presses()) {
      showScreen9();
      screen = 9; // 9: Help out Connor (end)
    } else if (e2Button.mouse.presses()) {
      showScreen10();
      screen = 10; // 10: Don't help Connor (end)
    }
  }
  else if (screen == 11) {
    if (f1Button.mouse.presses()) {
      showScreen12();
      screen = 12; // 12: Shout for help (end)
    } else if (f2Button.mouse.presses()) {
      showScreen13();
      screen = 13; // 13: Say nothing (end)
    }
  }
  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("#314158");
  fill("#02f5dc");
  textSize(20);
  textWrap(WORD);
  text("December 24th, 2038, Detroit, Michigan. It was the height of the android revolution. You were in the center of the warzone, hiding in a bunker, and hastily typing away on your computer. Alongside you were dozens of other hackers, both human and android. These androids were some of the last remaining non-deviants and the government needed their computing power. Suddenly, the door opened, and you whipped your head around — a reflex that you quickly developed while being here. Walking into the bunker was an android, model RK800, with an accompanying human.", 10, height/2 - 163, 570);
  enterButton.pos = { x: -100, y: -100 };
  
  // Add A1 button
  a1Button.pos = { x: width/2 - 120, y: height/2 + 140 };
  a1Button.w = 275;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "#02f5dc";
  a1Button.text = "Approach the android.";
  a1Button.textColor = "#314158";
  a1Button.textSize = 20;

  // Add A2 button
  a2Button.pos = { x: width/2 + 160, y: height/2 + 140 };
  a2Button.w = 188;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "#02f5dc";
  a2Button.text = "Keep working.";
  a2Button.textColor = "#314158";
  a2Button.textSize = 20;
}

function showScreen2() {
  background("#314158");
  fill("#02f5dc");
  textSize(18);
  textWrap(WORD);
  text("As you approach the android, you notice his chestnut eyes, neatly trimmed haircut, and stoic expression. He adorned a stylish suit, custom-tailored from CyberLife. He looked almost too human, with the blue LED light on his temple being the only thing that distinguished him from a regular human. He noticed you eyeing him and turned towards you. \"Hello, my name is Connor. I'm the android sent by CyberLife. I was sent here on behalf of CyberLife to assist you with the android rebellion.\" His cheeks lifted into a soft smile, as he awaited your response. You held out your hand. \"Nice to meet you, Connor. I'm—\" Right before you were able to finish your sentence, you heard a loud explosion as deviant androids swarmed the bunker!", 10, height/2 - 165, 570);

  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };

  // Add B1 button
  b1Button.pos = { x: width/2 - 160, y: height/2 + 150 };
  b1Button.w = 95;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "#02f5dc";
  b1Button.text = "Hide.";
  b1Button.textColor = "#314158";
  b1Button.textSize = 20;

  // Add B2 button
  b2Button.pos = { x: width/2 - 10, y: height/2 + 150 };
  b2Button.w = 140;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "#02f5dc";
  b2Button.text = "Play dead.";
  b2Button.textColor = "#314158";
  b2Button.textSize = 20;

  // Add B3 button
  b3Button.pos = { x: width/2 + 160, y: height/2 + 150 };
  b3Button.w = 140;
  b3Button.h = 50;
  b3Button.collider = "k";
  b3Button.color = "#02f5dc";
  b3Button.text = "Run away.";
  b3Button.textColor = "#314158";
  b3Button.textSize = 20;
}

function showScreen3() {
  background("#314158");
  fill("#02f5dc");
  textSize(20);
  textWrap(WORD);
  text("You decided to pay no more further attention to this android and continued working on your assignment. It wasn't your place to pry, and there were lives at stake. The android revolution started on November 11, so you've been here for roughly a month. You sighed at the thought of a break. It was already the day before Christmas, yet there was no sign of the androids stopping. You really didn't expect your career to lead you down this path, but here you are— Right before you were able to finish your thought, you heard a loud explosion as deviant androids swarmed the bunker!", 10, height/2 - 160, 570);

  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };

  // Add C1 button
  c1Button.pos = { x: width/2 - 160, y: height/2 + 150 };
  c1Button.w = 95;
  c1Button.h = 50;
  c1Button.collider = "k";
  c1Button.color = "#02f5dc";
  c1Button.text = "Hide.";
  c1Button.textColor = "#314158";
  c1Button.textSize = 20;

  // Add C2 button
  c2Button.pos = { x: width/2 - 10, y: height/2 + 150 };
  c2Button.w = 140;
  c2Button.h = 50;
  c2Button.collider = "k";
  c2Button.color = "#02f5dc";
  c2Button.text = "Play dead.";
  c2Button.textColor = "#314158";
  c2Button.textSize = 20;

  // Add C3 button
  c3Button.pos = { x: width/2 + 160, y: height/2 + 150 };
  c3Button.w = 140;
  c3Button.h = 50;
  c3Button.collider = "k";
  c3Button.color = "#02f5dc";
  c3Button.text = "Run away.";
  c3Button.textColor = "#314158";
  c3Button.textSize = 20;
}

function showScreen4() {
  background("#314158");
  fill("#02f5dc");
  textSize(20);
  textWrap(WORD);
  text("You hear your co-workers' screams as you frantically looked for a place to hide. Your eyes darted to a relatively hidden area underneath two metal desks. You immediately slid underneath the desks and held your breath as you calculated your next step. But panic quickly took over. How could this be happening, now of all times? Your situation was already bad enough, but now you'll likely be left with no job, no friends, and maybe even no future. As you tried to calm yourself down, you suddenly heard a click. As you looked up, a gun was trained right on your forehead.", 10, height/2 - 163, 570);

  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  b3Button.pos = { x: -250, y: -250 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };
  c3Button.pos = { x: -400, y: -400 };
  
  // Add D1 button
  d1Button.pos = { x: width/2 - 170, y: height/2 + 140 };
  d1Button.w = 210;
  d1Button.h = 50;
  d1Button.collider = "k";
  d1Button.color = "#02f5dc";
  d1Button.text = "Attack the android.";
  d1Button.textColor = "#314158";
  d1Button.textSize = 20;

  // Add D2 button
  d2Button.pos = { x: width/2 + 115, y: height/2 + 140 };
  d2Button.w = 315;
  d2Button.h = 50;
  d2Button.collider = "k";
  d2Button.color = "#02f5dc";
  d2Button.text = "Beg the android to spare you.";
  d2Button.textColor = "#314158";
  d2Button.textSize = 20;
}

function showScreen5() {
  background("#314158");
  fill("#02f5dc");
  textSize(19);
  textWrap(WORD);
text("You lept into action, shuddering as you barely dodged the bullet that could've gone straight through your head. You saw potential for a way out as you grabbed a metal pipe laying on the ground. It seemed to have been dislodged from a desk, but now it was your only weapon. You whacked the attacking deviant's waist, sending him flying to the ground. Although you were part of the technology department, your team was still required to learn basic combat skills in case of an attack. At times like these, your skills shone through, as you swiftly disarmed the deviant and shot him twice in the head. However, you suddenly began rapidly breathing as you shakily stepped back from the lifeless android body. This was the first time you ever shot another... As anxiety took over, you decided to run as fast away as you could, not even glancing back once. To be continued~", 10, height/2 - 163, 570);

  // Move extra buttons off screen
  d1Button.pos = { x: -450, y: -450 };
  d2Button.pos = { x: -500, y: -500 };
}

function showScreen6() {
  background("#314158");
  fill("#02f5dc");
  textSize(20);
  textWrap(WORD);
  text("You lept into action, shuddering as you barely dodged the bullet that could've gone straight through your head. You saw potential for a way out as you grabbed a metal pipe laying on the ground. It seemed to have been dislodged from a desk, but now it was your only weapon. However, before you could even pick it up, you felt a sharp pain in your leg. You were shot. You winced as you tried to pick up the metal pipe once more, but to no avail. As you desperately attempted to limp away, you heard another click. You immediately whipped your head around, looking up at the deviant in absolute terror. The deviant had an almost emotionless face, but you could see a hint of pity. \"I'm sorry,\" the deviant whispered. A loud bang followed, and then silence. It was over.", 10, height/2 - 163, 570);

  // Move extra buttons off screen
  d1Button.pos = { x: -450, y: -450 };
  d2Button.pos = { x: -500, y: -500 };
}

function showScreen7() {
  background("#314158");
  fill("#02f5dc");
  textSize(19.42);
  textWrap(WORD);
  text("You turned to face the deviant as you screamed \"W-WAIT!\" The deviant made eye contact with you, evidently waiting for a follow-up response. You tried to gather up your thoughts and threw out anything that came to mind. \"Please! You don't h ave to do this! I have almost nothing, and now you took away my job and my friends... do you really have to take away my future too? I have nothing against you, really, I just had to take this job out of money. Please stop this, I beg you, none of us wanted it to end up like this. Imagine if you were in this position, how would you feel?\" The deviant thought for a few moments before making up his mind. He carefully lowered his gun, saying \"Alright, I'll spare you and everyone else. On one condition. Everyone must come with us.\" To be continued~", 10, height/2 - 165, 570);

  // Move extra buttons off screen
  d1Button.pos = { x: -450, y: -450 };
  d2Button.pos = { x: -500, y: -500 };
}

function showScreen8() {
  background("#314158");
  fill("#02f5dc");
  textSize(19);
  textWrap(WORD);
  text("You hear your co-workers' screams as you frantically dropped onto the ground, trying to steady your breathing. You could see both red and blue blood spilled on the floor, as you prayed for at least one person, at least someone, to survive. It felt like only a few minutes until the fighting was finally over, the deviants being victorious. Before they left, a deviant approached your area, examining you and the other bodies laying around you. You held your breath as you tried to not move a single inch. The deviants, seeming satisfied, finally began walking away. You could finally exhale a sigh of relief, when suddenly you heard a raspy voice calling out for help.", 10, height/2 - 163, 570);

  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  b3Button.pos = { x: -250, y: -250 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };
  c3Button.pos = { x: -400, y: -400 };
  
  // Add E1 button
  e1Button.pos = { x: width/2 - 100, y: height/2 + 140 };
  e1Button.w = 255;
  e1Button.h = 50;
  e1Button.collider = "k";
  e1Button.color = "#02f5dc";
  e1Button.text = "Investigate the sound.";
  e1Button.textColor = "#314158";
  e1Button.textSize = 20;

  // Add E2 button
  e2Button.pos = { x: width/2 + 140, y: height/2 + 140 };
  e2Button.w = 145;
  e2Button.h = 50;
  e2Button.collider = "k";
  e2Button.color = "#02f5dc";
  e2Button.text = "Run away.";
  e2Button.textColor = "#314158";
  e2Button.textSize = 20;
}

function showScreen9() {
  background("#314158");
  fill("#02f5dc");
  textWrap(WORD);
  if (knowConnor == true) {
    textSize(18.42);
    text("You cautiously made your way over to the raspy voice. As you took a closer look, it was Connor! \"P-please help... I need... a thirium pump... or I will... shut down...\" A thirium pump! Now that was something you were familiar with. You quickly scavenged one from the pile of android bodies left over in the used-to-be-bunker and replaced it with the damaged one. \"How does it feel? Better?\" You worriedly asked as you helped Connor back up to his feet. Connor nodded. \"Thank you.\" You exchanged a warm smile with the android, as if that life-form was not the one that just took away your co-workers. In any case, if he was the only one left, you had to make do with this situation. \"Connor, right?\" You saw a brief flash of surprise on Connor's face before he replied. \"You... remembered.\" You smiled and gently took Connor's hand, racing into the night, marking the beginning of your unforgettable journey. To be continued~", 10, height/2 - 167, 570);
  }
  else {
    textSize(17.42);
    text("You cautiously made your way over to the raspy voice. As you took a closer look, it was the new android from before! \"P-please help... I need... a thirium pump... or I will... shut down...\" A thirium pump! Now that was something you were familiar with. You quickly scavenged one from the pile of android bodies left over in the used-to-be-bunker and replaced it with the damaged one. \"How does it feel? Better?\" You worriedly asked as you helped the android back up to his feet. The android nodded. \"Thank you.\" You exchanged a warm smile with the android, as if that life-form was not the one that just took away your co-workers. In any case, if he was the only one left, you had to make do with this situation. \"Um... what's your name?\" You awkwardly asked, realizing that you chose to ignore his entrance from before. \"Ah— My name is Connor. I'm the android sent by CyberLife.\" Connor awkwardly extended his right hand. You smiled and gently shook Connor's hand, marking the beginning of your unforgettable journey. To be continued~", 10, height/2 - 168.5, 570);
  }

  // Move extra buttons off screen
  e1Button.pos = { x: -550, y: -550 };
  e2Button.pos = { x: -600, y: -600 };
}

function showScreen10() {
  background("#314158");
  fill("#02f5dc");
  textSize(20);
  textWrap(WORD);
  text("You decided to ignore the raspy voice and began running towards the woods. Yes, the voice may have been one of your co-workers, but it could very well have been from one of the attacking deviants. With the bunker being outnumbered in every way possible, you made the cautious decision to avoid more trouble and instead work on finding a way back home. Although it would be a rather long journey, you knew you had to make it back — for your friends, for your family, and... for your co-workers. You were still alive and kicking after all! However, as you made your way through the trees, you began to wonder if you missed something important, maybe even something life-changing back there... To be continued~", 10, height/2 - 159, 570);

  // Move extra buttons off screen
  e1Button.pos = { x: -550, y: -550 };
  e2Button.pos = { x: -600, y: -600 };
}

function showScreen11() {
  background("#314158");
  fill("#02f5dc");
  textSize(17);
  textWrap(WORD);
  text("You hear your co-workers' screams as you frantically tried to run away from all of the chaos. There was smoke and debris everywhere, as the humans and androids fought against the deviants. Unfortunately, it looked like a losing battle. You mustered up all of your energy to run as if your life depended on it — because it did. Although you were part of the technology department, your team was still required to have regular cardio and strength training in case of an attack. At times like these, your skills shone through, as you swiftly sprinted across the battlefield. However, just as you were gaining confidence that you could escape unscathed, you felt a sharp pain in your back. You fell to the ground, coughing up blood. You could barely breathe as you grit your teeth out of pain. 'I guess this is it,' you thought, 'all that effort to land me in the grave. Are you going to give up?'", 10, height/2 - 168, 570);

  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  b3Button.pos = { x: -250, y: -250 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };
  c3Button.pos = { x: -400, y: -400 };
  
  // Add F1 button
  f1Button.pos = { x: width/2 - 100, y: height/2 + 155 };
  f1Button.w = 175;
  f1Button.h = 50;
  f1Button.collider = "k";
  f1Button.color = "#02f5dc";
  f1Button.text = "Shout for help.";
  f1Button.textColor = "#314158";
  f1Button.textSize = 20;

  // Add F2 button
  f2Button.pos = { x: width/2 + 120, y: height/2 + 155 };
  f2Button.w = 110;
  f2Button.h = 50;
  f2Button.collider = "k";
  f2Button.color = "#02f5dc";
  f2Button.text = "Give up.";
  f2Button.textColor = "#314158";
  f2Button.textSize = 20;
}

function showScreen12() {
  background("#314158");
  fill("#02f5dc");
  textWrap(WORD);
  if (knowConnor == true) {
    textSize(16.7);
    text("You can't give up! Not now, not when everyone else is trying so hard, giving up their lives for the hope of any victory. You're not dead yet, your body is still fighting — fighting for you — and you have to give everything you got while there is still a chance of surviving. You try to prop yourself up as you desperately shout for help. Much of the fighting is already dying out and you can barely hear the shouts in the distance. Will they even hear you? As if your prayers were answered, someone ran up to you, gently holding you in their arms. You couldn't care less if this person was your ally or your enemy — someone came. You could barely keep your consciousness as the mysterious person began to bandage you up. You caught a glimpse of a familiar pair of chestnut eyes before everything went dark. \"Connor...?\" You mumbled his name as you slowly woke up to his worried face. \"Are you... feeling better?\" You nodded, exchanging a warm smile with the android. As the sun began to set, Connor carried you to a safe spot in the forest, which marked the beginning of your unforgettable journey. To be continued~", 10, height/2 - 165, 570);
  }
  else {
    textSize(16.5);
    text("You can't give up! Not now, not when everyone else is trying so hard, giving up their lives for the hope of any victory. You're not dead yet, your body is still fighting — fighting for you — and you have to give everything you got while there is still a chance of surviving. You try to prop yourself up as you desperately shout for help. Much of the fighting is already dying out and you can barely hear the shouts in the distance. Will they even hear you? As if your prayers were answered, someone ran up to you, gently holding you in their arms. You couldn't care less if this person was your ally or your enemy — someone came. You could barely keep your consciousness as the mysterious person began to bandage you up. You caught a glimpse of a familiar pair of chestnut eyes before everything went dark. \"Who...?\" You mumbled as you slowly woke up to the new android's worried face. \"My name is Connor. I'm the android sent by CyberLife. Are you... feeling better?\" You nodded, exchanging a warm smile with the android. As the sun began to set, Connor carried you to a safe spot in the forest, which marked the beginning of your unforgettable journey. To be continued~", 10, height/2 - 171, 570);
  }

  // Move extra buttons off screen
  f1Button.pos = { x: -650, y: -650 };
  f2Button.pos = { x: -700, y: -700 };
}

function showScreen13() {
  background("#314158");
  fill("#02f5dc");
  textSize(20);
  textWrap(WORD);
  text("You stay silent, letting the situation sink in. Your thoughts begin to encroach your mind: 'What was all the point of this anyway? All that effort to get a high-paying job only to end up working miserable hours during a literal war?! Honestly, it might be better this way. All of the painstaking hours of sitting behind a computer screen and getting little to no sleep adds up, you know? I probably would have checked out sooner or later... I just wish I had time to tell my friends and family how much they meant to me and that I loved them, but I guess life loves to throw its own surprises into the mix.' You close your eyes and let out a soft exhale. 'At least I can go out knowing that I did some good in the world. And I really hope... that I'll be remembered... for it.'", 10, height/2 - 160, 570);

  // Move extra buttons off screen
  f1Button.pos = { x: -650, y: -650 };
  f2Button.pos = { x: -700, y: -700 };
}

/* FONTS */
function preload() {
  gothamRoundedLight = loadFont('assets/Gotham_Rounded_Light.otf');
  gothamUltra = loadFont('assets/Gotham_Ultra.otf');
  connorImage = loadImage('assets/connor.png');
  sumoImage = loadImage('assets/sumo.png');
  connorMusic = loadSound("assets/Connor_Music.mp3");
}
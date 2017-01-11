import processing.sound.*;
nowplaying n1;
mood1 m1;
mood2 m2;
mood3 m3;
mood4 m4;
mood5 m5;
mood6 m6;
mood7 m7;
mood8 m8;
PImage img1;
PImage img2;
PImage img3;
PImage img4;
PImage img5;
PImage img6;
PImage img7;
PImage img8;
PFont f;
int songPlaying = 0;

SoundFile song;
SoundFile song2;
SoundFile song3;
SoundFile song4;
SoundFile song5;
SoundFile song6;
SoundFile song7;
SoundFile song8;

void setup() {
  size (800, 800);
  img1= loadImage ("smile.png");
  img2= loadImage ("angry.png");
  img3= loadImage ("frustrated.png");
  img4= loadImage ("infatuated.png");
  img5= loadImage ("turnup.png");
  img6= loadImage ("pensive.png");
  img7= loadImage ("flirty.png");
  img8= loadImage ("optimistic.png");

  f = createFont("Shrikhand", 36);

  song = new SoundFile (this, "heartbeat.mp3");
  song2 = new SoundFile (this, "dmw.mp3");
  song3= new SoundFile (this, "stpo.mp3");
  song4= new SoundFile (this, "bemine.mp3");
  song5= new SoundFile (this, "iamanthem.mp3");
  song6= new SoundFile (this, "innerbloom.mp3");
  song7= new SoundFile (this, "wys.mp3");
  song8= new SoundFile (this, "wig.mp3");



  n1 = new nowplaying (300, 300, 200, 200);
  m1 = new mood1 (50, 0, 200, 200);
  m2 = new mood2 (600, 0, 200, 200);
  m3 = new mood3 (0, 600, 200, 200);
  m4 = new mood4 (600, 600, 200, 200);
  m5 = new mood5 (300, 600, 200, 200);
  m6 = new mood6 (300, 0, 200, 200);
  m7= new mood7 (0, 300, 200, 200);
  m8= new mood8 (600, 300, 200, 200);
}

void draw() {

  surface.setTitle("pick a mood to hear a song !"); 

  background (183, 189, 206);
  //noLoop();

  //display now playing
  n1.display();

  //display moods
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();

  fill(150);

 
  stroke(42, 255, 0);
  strokeWeight(.8);
  strokeJoin(ROUND);
  fill(247, 199, 224);
  rect(200, 0, 100, 200); 
  fill(238, 197, 248);
  rect(500, 0, 100, 200);
  fill(212, 209, 244);
  rect(600, 200, 200, 100);
  fill(197, 233, 242);
  rect(600, 500, 200, 100);
  fill(192, 241.5, 217.5);
  rect(500, 600, 100, 200);
  fill(216.5, 240.5, 194);
  rect(200, 600, 100, 200);
  fill(241.5, 225.5, 191.5);
  rect(0, 500, 200, 100);
  fill(241, 203.5, 193.5);
  rect(0, 200, 200, 100);
  
   stroke(100);
 strokeWeight(2);
  line(200,200,600,200);
  line(200,200,200,600);
  line(600,200,600,600);
  line(200,600,600,600);
}




void mousePressed() {
  //mood 1
  if (mouseX < 200 && mouseY <200) {
    song2.stop();
    song3.stop();
    song4.stop();
    song.play(); 
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    n1.setArtist(1);
  }

  //mood2   
  if (mouseX >600 && mouseY <200) {
    song.stop();
    song3.stop();
    song4.stop();
    song2.play(); 
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();

    n1.setArtist(2);
  }

  //mood3
  if (mouseX <200 && mouseY > 600) {
    song3.play();
    song.stop();
    song4.stop();
    song2.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();

    n1.setArtist(3);
  }

  //mood4
  if (mouseX > 600 && mouseY > 600) {
    song4.play();
    song.stop();
    song3.stop();
    song2.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    n1.setArtist(4);
  }

  //mood5
  if (mouseX > 300 && mouseX <500 && mouseY > 600) {
    song5.play();
    song4.stop();
    song.stop();
    song3.stop();
    song2.stop();
    song6.stop();
    song7.stop();
    song8.stop();


    n1.setArtist(5);
  }

  //mood6
  if (mouseX > 300 && mouseX <500 && mouseY < 200) {
    song6.play();
    song4.stop();
    song.stop();
    song3.stop();
    song2.stop();
    song5.stop();
    song7.stop();
    song8.stop();


    n1.setArtist(6);
  }

  //mood7
  if (mouseX < 200 && mouseY > 300 && mouseY < 500) {
    song6.stop();
    song4.stop();
    song.stop();
    song3.stop();
    song2.stop();
    song5.stop();
    song7.play();
    song8.stop();

    n1.setArtist(7);
  }

  //mood8
  if (mouseX > 600 && mouseY > 300 && mouseY < 500) {
    song6.stop();
    song4.stop();
    song.stop();
    song3.stop();
    song2.stop();
    song5.stop();
    song7.stop();
    song8.play();

    n1.setArtist(8);
  }
}



//stop music if space bar is pressed
void keyPressed() {

  if (key == ' ') {
    song.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    n1.setArtist(0);
  }
}
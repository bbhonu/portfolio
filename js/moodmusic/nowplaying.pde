class nowplaying {
  int x;
  int y;
  int w;
  int h;
  int artist;


  nowplaying(int t_x, int t_y, int t_w, int t_h ) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }

  void setArtist(int t_artist) {
    artist = t_artist;
  }


  void display() {

    if (artist != 0) { 
      fill(255);
      stroke(150); 
      textSize(50);



      if (artist == 1) {
        fill(239, 195, 195);
        text("Heartbeat", 265, 400);
        textSize(42);
        text("Autograf", 290, 450);
      }

      if (artist == 2) {
        fill(220, 193, 241);
        textSize(42);
        text("Doing Me Wrong", 215, 400);
        textSize(35);
        text("Popeska", 320, 440);
      }

      if (artist == 3) {
        fill(241, 238, 193);
        textSize(42);
        text("Send the Pain On", 217, 400);
        textSize(35);
        text("Chrome Sparks", 250, 440);
      }
      if (artist == 4) {
        fill(193, 241, 237);
        text("Be Mine", 300, 400);
        textSize(42);
        text("YesYou", 320, 450);
      }

      if (artist == 5) {
        fill(193, 241, 198);
        text("iamanthem", 245, 400);
        textSize(42);
        text("Kodak to Graph", 225, 450);
      }

      if (artist == 6) {
        fill(255, 204, 251);
        text("Innerbloom", 245, 400);
        textSize(42);
        text("Rüfüs", 330, 450);
      }

      if (artist == 7) {
        fill(241, 211, 193);
        textSize(40);
        text("What's Your Sign", 215, 380);
        textSize(26);
        text("(Mason's Capricorn Remix)", 210, 420);
        textSize(30);
        text("Keljet Ft. Holychild", 240, 460);
      }

      if (artist == 8) {
        fill(203, 226, 244);
        textSize (42);
        text("Where I'm Going", 215, 400);
        textSize(35);
        text("Jerry Folk", 300, 450);
      }
    }
  }
}
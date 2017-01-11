class mood3 {
  int x;
  int y;
  int w;
  int h;

  mood3(int t_x, int t_y, int t_w, int t_h) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }


  void display() {
    fill(241, 238, 193);
    strokeWeight(0);
    stroke(150); 
    rect (0, 600, 200, 200);
    image(img3, 50, 670, 100, 100);
    textFont(f, 32);
    fill (255);
    text("frustrated", 10, 655);
  }
}
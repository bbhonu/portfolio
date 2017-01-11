class mood5 {
  int x;
  int y;
  int w;
  int h;

  mood5(int t_x, int t_y, int t_w, int t_h) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }


  void display() {
    fill(193, 241, 198);
    strokeWeight(0);
    stroke(150); 
    rect (300, 600, 200, 200);
    image(img5, 327, 680, 150, 75);
    textFont(f, 42);
    fill (255);
    text("turn up", 315, 655);
  }
}
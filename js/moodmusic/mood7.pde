class mood7 {
  int x;
  int y;
  int w;
  int h;

  mood7(int t_x, int t_y, int t_w, int t_h) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }


  void display() {
    fill(241, 211, 193);
    strokeWeight(0);
    stroke(150); 
    rect (0, 300, 200, 200);
    image(img7, 50, 360, 100, 100);
    textFont(f, 42);
    fill (255);
    text("flirty", 43, 350);
  }
}
class mood8 {
  int x;
  int y;
  int w;
  int h;

  mood8(int t_x, int t_y, int t_w, int t_h) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }


  void display() {
    fill(203, 226, 244);
    strokeWeight(0);
    stroke(150); 
    rect (600, 300, 200, 200);
    image(img8, 650, 360, 100, 100);
    textFont(f, 32);
    fill (255);
    text("optimistic", 613, 340);
  }
}
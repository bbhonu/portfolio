class mood2 {
  int x;
  int y;
  int w;
  int h;

  mood2(int t_x, int t_y, int t_w, int t_h) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }


  void display() {
    fill(220, 193, 241);
    strokeWeight(0);
    stroke(150); 
    rect (600, 0, 200, 200);
    image(img2, 650, 60, 100, 100);
    textFont(f, 42);
    fill (255);
    text("angry", 630, 55);
  }
}
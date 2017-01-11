class mood6 {
  int x;
  int y;
  int w;
  int h;

  mood6(int t_x, int t_y, int t_w, int t_h) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }


  void display() {
    fill(255, 204, 251);
    strokeWeight(0);
    stroke(150); 
    rect (300, 0, 200, 200);
    image(img6, 355, 70, 85, 85);
    textFont(f, 42);
    fill (255);
    text("pensive", 317, 55);
  }
}
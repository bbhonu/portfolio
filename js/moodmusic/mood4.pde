class mood4 {
  int x;
  int y;
  int w;
  int h;

  mood4(int t_x, int t_y, int t_w, int t_h) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }


  void display() {
    fill(193, 241, 237);
    strokeWeight(0);
    stroke(150); 
    rect (600, 600, 200, 200);
    image(img4, 650, 660, 100, 100);
    textFont(f, 32);
    fill (255);
    text("infatuated", 612, 655);
  }
}
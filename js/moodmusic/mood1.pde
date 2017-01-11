

class mood1 {
  int x;
  int y;
  int w;
  int h;

  mood1(int t_x, int t_y, int t_w, int t_h) {
    x =t_x;
    y = t_y;
    w = t_w;
    h = t_h;
  }


  void display() {
    fill(239, 195, 195);
    strokeWeight(0);
    stroke(150); 
    rect (0, 0, 200, 200);
    image(img1, 50, 60, 100, 100);
    textFont(f, 42);
    fill (255);
    text("happy", 30, 55);
  }
}
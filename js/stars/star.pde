
class Star {
  String name;
  String age;
  String ethnicity;
  String gender;
  String location;
  String date;
  String cause;
  Float x;
  Float y;
  Float diameter;
  int starSize;
  float flickerRate, light;
  boolean rise;
  float displayStart;


  boolean over = false;
  Star(float x_, float y_, float diameter_, String name_, String age_, String ethnicity_, String gender_, String location_, String date_, String cause_, float displayStart_)
  {
    x = x_;
    y = y_;
    diameter = diameter_;
    name = name_;
    age = age_;
    ethnicity = ethnicity_;
    gender = gender_;
    location = location_;
    date = date_;
    cause = cause_;
    displayStart=displayStart_;


    flickerRate = random(2, 5); 
    starSize = int(random(5, 7));
    light = random(10, 70);
 
    rise = true;
  }

//rollover description state
  void rollover (float px, float py) {
    float d= dist(px, py, x, y);
    if (d < diameter) {
      over = true;
    } else {
      over = false;
    }
  }


//flicker/fading
  void display(int counter) {
 
    if (counter > displayStart){
    if (light >= 200) {
      rise = false;
    }
    if (light <= 50) {
      flickerRate = random(1,3);
      starSize = int(random(1,5));
      rise = true;
    }
    if (rise == true) {
      light += flickerRate;
    }
    if (rise == false) {
      light -= flickerRate;
    }
    float rayflicker = random(15, 20);
    float ray = random(25, 27);

//star construction
    fill(light,220);
    noStroke();
    triangle(x+ray, y, x, y+3, x, y-3);
    triangle(x, y-ray, x+3, y, x-3, y);
    triangle(x-ray, y, x, y+3, x, y-3);
    triangle(x, y+ray, x+3, y, x-3, y);
    fill(150,150,255,light);
    triangle(x-rayflicker, y-rayflicker, x, y+2, x, y-1);
    triangle(x+rayflicker, y+rayflicker, x, y+2, x, y-1);
    triangle(x-rayflicker, y+rayflicker, x, y+2, x, y-1);
    triangle(x+rayflicker, y-rayflicker, x, y+2, x, y-1);
    

    
    fill(100+light,100+light,100, 100);
    triangle(x-rayflicker-20, y+rayflicker, x, y+2, x, y-1);
    triangle(x-rayflicker, y+rayflicker+20, x, y+2, x, y-1);
    triangle(x+rayflicker+20, y-rayflicker, x, y+2, x, y-1);
    triangle(x+rayflicker, y-rayflicker-20, x, y+2, x, y-1);
    triangle(x+rayflicker+20, y+rayflicker, x, y+2, x, y-1);
    triangle(x+rayflicker, y+rayflicker+20, x, y+2, x, y-1);
    triangle(x-rayflicker-20, y-rayflicker, x, y+2, x, y-1);
    triangle(x-rayflicker, y-rayflicker-20, x, y+2, x, y-1);
    
    //star center
    fill (light);
    ellipse(x, y, starSize, starSize);


    
//star light rings     
    fill(255,10);
ellipse(x, y, 25, 25);

ellipse(x, y, 55, 55);

ellipse(x,y,75,75);

//rollover formatting
    if (over) {
      fill (7,7,36);
      float sw = textWidth(cause)+4;
      //rectMode(CENTER);
      rect (x-sw/2,y+diameter+20,sw,150);
      fill (255);
      textAlign(CENTER);
      textFont(f, 12);
      text(name, x, y+diameter/2+35);
      text(age, x, y+diameter/2+50);
      text(ethnicity, x, y+diameter/2+65);
      text(gender, x, y+diameter/2+80);
      text(location, x, y+diameter/2+95);
      text(date, x, y+diameter/2+110);
      text(cause, x, y+diameter/2+125);
    }
    }
  }
}
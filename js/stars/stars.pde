Star [] stars;
Table table;
float xspacing = 100;
float yspacing = 175;
float y = 10;
float xoffset;
float yoffset;
int r;
int counter = 0;
float randomVal = 50;
PImage img;


void setup () {
  size (1200, 770);

  loadData();
  f = createFont("georgia", 14);
  img = loadImage("starry.jpg");

}

void draw () {
  counter++;

  //different backgrounds for title/drawing
  if (counter<800) {
      background(0);
  writeTitle();}
  
  else if (counter>800){
      background(7,7,35);
  }
  //writing title sequence
  if (counter<800 & counter>150){  
  writeTitle1();
  }
  
  if (counter <800 & counter >300) {
  writeTitle2();}
  
  if (counter<800 & counter>450){
  writeTitle3();
  }
  
  
    if (counter<800 & counter>600){
  writeTitle4();
  }
  //background star image for stars
  if (counter>800){
    background(img);

 //main drawing
  for (int i=0; i < stars.length; i++) {
    

    stars[i].rollover(mouseX, mouseY);
    stars[i].display(counter);

  }
    
}
}

void loadData() {
  table = loadTable("transgenderdeaths2016.csv", "header"); 
  stars = new Star[table.getRowCount()];

//star organization
  for (int i = 0; i < table.getRowCount(); i++) {

    yoffset=50;
    xoffset=150;
    xspacing=200;

//row setup
    r = i/5;
    if (r==0) {
      yoffset= 50;
      xspacing= 225;
      xoffset=150;
    }

    if (r==1) {
      xspacing= 210;
      xoffset=180;
    }


    if (r==2) {
      xspacing= 225;
      xoffset=80;
    }

    if (r==3) {
      xspacing= 200;
      xoffset=220;
    }

    if (r==4) {
      xspacing= 210;
      xoffset=100;
      yoffset=-105;
    }






//display and display math
    println(r, xoffset);
    TableRow row = table.getRow(i);
    float x = i%5*xspacing+xoffset+random(-1*randomVal,randomVal);
    float y = r*yspacing+yoffset+random(-1*0,randomVal);
    float diameter = 10;

    String n = row.getString("Name");
    String a = row.getString("Age");
    String e = row.getString("Ethnicity");
    String g = row.getString("Gender");
    String l = row.getString("Location");
    String d = row.getString("Date");
    String c = row.getString("Cause");
    float displayStart = 850+i*100;

    stars[i] = new Star(x, y, diameter, n, a, e, g, l, d, c,displayStart);





    println (x, y);
  }
}
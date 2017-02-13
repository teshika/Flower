var k= 2;
var d= 1;
var c= 0;
var sliderK;
var sliderD;
var sliderC;
var counter=0;
var cols;
var colNum;

function setup() {
  createCanvas(500,500);
  frameRate(8);
  from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .66);
  cols = [from, to, c1, c2];


  // sliderD = createSlider(1,10,1);
  // sliderK = createSlider(1,10,1);

  sliderC= createSlider(1,80,40);
  sliderCol= createSlider(0,3,0);


}

function draw() {
  // k = sliderK.value();
  // d = sliderD.value();
  c = sliderC.value();
  colNum = sliderCol.value();
  translate(width/2, height/2);
  background(255);
  beginShape();
  stroke(cols[colNum]);
  strokeWeight(1);

  for (var a=0; a< TWO_PI*10; a+=.02){
    var r = 200*cos((k/d)*a) + c;
    //convert polar to cartesian
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);

  }
  endShape();
  k+=.01;


}

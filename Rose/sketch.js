var k= 1;
var d= 1;
var c= 0;
var sliderK;
var sliderD;
function setup() {
  createCanvas(500,500);
  frameRate(12);

  sliderD = createSlider(1,10,1);
  sliderK = createSlider(1,10,1);
}

function draw() {
  k = sliderK.value();
  d = sliderD.value();
  translate(width/2, height/2);
  background(255);
  beginShape();
  stroke(0);
  strokeWeight(.8);
  // fill(random(0,255);
  for (var a=0; a< TWO_PI*10; a+=.02){
    var r = 200*cos((k/d)*a) +c;
    //convert polar to cartesian
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);
  }
  endShape();


}

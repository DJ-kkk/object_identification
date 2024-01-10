img = "";
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload(){
img = loadImage('bedroom.png')
}
function draw() {
    image(img, 0 , 0 ,640, 420);
    fill("red");
    text("Bed Room", 45,75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);




}
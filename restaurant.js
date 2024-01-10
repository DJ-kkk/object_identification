img = "";
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload(){
img = loadImage('hooters.png')
}
function draw() {
    image(img, 0 , 0 ,640, 420);
    fill("red");
    text("restaurant", 45,75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);


    

}
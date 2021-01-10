function preload(){

}
function setup(){
 canvas = createCanvas(500, 500);
 canvas.position(250, 250);
 video =createCapture(VIDEO);
 video.hide()
 tint_color="";
}
function pick_tint (){
    
}
function draw(){
    tint_color = document.getElementById("filter").value;
    image(video, 0, 0, 500, 500);
    tint(tint_color);

}
function take_snapshot(){
save("img.jpeg");
}
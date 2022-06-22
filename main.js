function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.center();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotposes);
    
}

function draw() {
    image(video, 25, 25, 550, 450);
}

song="";

function preload() {
    song=loadSound("bb.webm");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop() {
    song.stop();
}

function modelloaded() {
    console.log("yes the model is loaded");

}

leftWrist_x=0;
leftWrist_y=0;
rightWrist_x=0;
rightWrist_y=0;

function gotposes(results) {
    if(results.length>0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("left wrist x = "+leftWrist_x + " left wrist y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + rightWrist_x + " right wrist y = " + rightWrist_y);
    }
}


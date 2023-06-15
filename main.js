
song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Posenet Is Initialized');
}
function draw(){
    image(video,0,0,600,500);

    if (scoreRightWrist > 0.2) {
        circle(righttWristX, rightWristY,20);
        if (rightWristY>0 && rightWristY<=100) {
            document.getElementById("speed").innerHTML="Speed = 0.5x";
            song.rate(0.5);
        } 
    
        else if (rightWristY>100 && rightWristY<=200) {
            document.getElementById("speed").innerHTML="Speed = 1x";
            song.rate(1);
        }
}
function gotPoses(results){
    if (results.length>0) 
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX ="+leftWristX+"leftWristY ="+leftWristY);
    
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX ="+rightWristX+"rightWristY ="+rightWristY); 

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
    }
    }
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

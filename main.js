noseX=0;
noseY=0;
difference=0;
leftwrist=0;
rightwrist=0;
function setup() {
    canvas=createCanvas(400, 400);
      canvas.center();
      video=createCapture(VIDEO);
      video.size(300,300)
   
      poseNet=ml5.poseNet(video,modelLoaded);
      poseNet.on('pose',gotPoses);
    }
  
    function modelLoaded(){
        console.log("PoseNet Is Initialized");
         
      }
    
    function draw() {
      background('#969A97');
      document.getElementById("Square_Side").innerHTML="Width and height of a square will be = " + difference + "px";
      fill('#03fce8');
      stroke('#03fce8');
      circle(noseX,noseY,difference);
    }

    function gotPoses(results){
      if(results.length>0){
        console.log(results);
       noseX =  results[0].pose.nose.x;
        noseY =  results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY ="+ noseY);
         
        leftwristX =  results[0].pose.leftWrist.x;
        rightwristX =  results[0].pose.rightWrist.y;
        difference=floor(leftwristX - rightwristX);
        console.log("leftwristX = " + leftwristX + " rightwristX = "+ rightwristX + " difference = " + difference);

      }

  }
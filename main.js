noseX= ""
noseY= ""

function preload(){
    i1 = loadImage("https://i.postimg.cc/Dy8mDC2b/d3086558665c07c38cc8ebe8ed33003a-removebg-preview.png")

}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    vid = createCapture(VIDEO)
    vid.size(300,300)
    vid.hide()
    pn = ml5.poseNet(vid, modelLoaded)
    pn.on('pose', gotPoses)
}

function draw(){
    image(vid,0,0,canvas.width, canvas.height)
    image(i1,noseX - 11,noseY - 11 ,25,25)

}

function SAVE(){
    save("Me_as_a_clown.jpg")
}

function modelLoaded(){
    console.log("Model has been loaded succesfully")
}

function gotPoses(results){
if(results.length > 0){
    console.log(results)
    console.log("x :",results[0].pose.nose.x)
    console.log("y :",results[0].pose.nose.y)
    noseX= results[0].pose.nose.x
    noseY= results[0].pose.nose.y
}
    
}


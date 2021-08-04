var bg
var issImg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img
var iss,spacecraft,hasDocked=false


function preload() {
  bg=loadImage("spacebg.jpg")
  issImg=loadImage("iss.png")
  spacecraft1Img=loadImage("spacecraft1.png")
  spacecraft2Img=loadImage("spacecraft2.png")
  spacecraft3Img=loadImage("spacecraft3.png")
  spacecraft4Img=loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(600,350);
  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale=0.25

  spacecraft = createSprite(285,240)
  spacecraft.addImage(spacecraft1Img)
  spacecraft.scale=0.15

}

function draw() {
  background(bg);  
  if(!hasDocked){
  spacecraft.x=spacecraft.x+random(-1,1)
  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.x=spacecraft.x-2
    spacecraft.addImage(spacecraft4Img)
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.x=spacecraft.x+2
    spacecraft.addImage(spacecraft3Img)
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft2Img)
  }
  }
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
  hasDocked=true
  textSize(25)
  fill("white")
  text(" Docking Sucessfull",200,300)

  }
  drawSprites();

}

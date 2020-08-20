var hr
var sc
var min

function setup() {
  createCanvas(1000,1000);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  angleMode(DEGREES)
  background(255,255,255);
  translate(500,500)
 rotate(-90)
  hr=hour()
   sc=second()
   min=minute()

  var scAngle=map(sc,0,60,0,360)
  var minAngle=map(min,0,60,0,360)
  var hourAngle=map(hr,12,24,0,360)
// translate(200,200)
  

console.log(hr)

   push()



  stroke(255,0,0)
  strokeWeight(2)

  rotate(scAngle)
  line(0,0,100,0)
//console.log(scH.x)


   pop()

  


   push()



   stroke(0,255,0)
   strokeWeight(3)
 
   rotate(minAngle)
   line(0,0,75,0)
 //console.log(scH.x)
 
 
    pop()
   

    push()



    stroke(355,55,255)
    strokeWeight(5)
  
    rotate(hourAngle)
    line(0,0,50,0)
  //console.log(scH.x)
  
  
     pop()
    




   
  drawSprites();
}
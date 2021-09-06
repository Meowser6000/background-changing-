
function setup() {
  createCanvas(400,400);
  background("yellow");
  box = createSprite(200,200,30,30);
}

function draw() 
{

if(keyIsDown(RIGHT_ARROW)) 
{
background("pink")

}
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("cyan");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lavender");
  }


  
  drawSprites();
}


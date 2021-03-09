var canvas;
var music;

var box1,box2,box3,box4; 
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    canvas= createCanvas(800,600);

box1=createSprite(700,500,100,10);
box1.shapeColor="red";

box2=createSprite(500,500,100,10);
box2.shapeColor="blue";

box3=createSprite(300,500,100,10);
box3.shapeColor="green";

box4=createSprite(100,500,100,10);
box4.shapeColor="yellow";


ball=createSprite(400,300,30,30);
ball.shapeColor="white";
ball.velocityX=5;
ball.velocityY=5;
    //create box sprite and give velocity

}

function draw() {
    background("grey");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(ball.y - box1.y < box1.height/2 + ball.height/2 
        && box1.y - ball.y < box1.height/2 + ball.height/2)
        {
            ball.velocityY=0;
            ball.velocityX=0;
      ball.shapeColor="red"
        }

        if(ball.y - box2.y < box2.height/2 + ball.height/2 
            && box2.y - ball.y < box2.height/2 + ball.height/2)
            {
          ball.velocityY=0;
          ball.velocityX=0;
          ball.shapeColor="blue"
            }

            if(ball.y - box3.y < box3.height/2 + ball.height/2 
                && box3.y - ball.y < box2.height/2 + ball.height/2)
                {
                    ball.velocityY=0;
                    ball.velocityX=0;
              ball.shapeColor="green"
                }
    
                if(ball.y - box4.y < box4.height/2 + ball.height/2 
                    && box4.y - ball.y < box4.height/2 + ball.height/2)
                    {
                        ball.velocityY=0;
                        ball.velocityX=0;
                  ball.shapeColor="yellow"
                    }


    



    //add condition to check if box touching surface and make it box
    drawSprites();
}

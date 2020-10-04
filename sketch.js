//I HAVE COMMENTED ALL THE FUNCTIONS AND TEXT DISPLAY TO DEBUG YOUR PROGRAM. UNCOMMENT THEM LATER


//objects- removed banana and obstacle as they r not global variable
var monkey , monkey_running;
var bananaImage,obstacleImage;
var foodGroup, obstacleGroup;
//var score=0;- delete this as score is not needed, survival time is needed
var survivalTime=0;

function preload(){
  //all correct
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
    createCanvas(600,600);
  //monkey sprite
    monkey=createSprite(70,500,20,20);
    monkey.addAnimation("monkey", monkey_running);
    monkey.scale=0.2;
  
  //ADDED EDGES
  edges= createEdgeSprites();
  
  //INCREASED THE WIDTH OF CANVAS SO RSETTING OF GROUND LOOKS SMOOTH AND CONTINUOUS. if u keep it small the resetting looks obvious
    ground= createSprite(300,570,1500,20);
   
  //creating groups
    foodGroup = new Group();
    obstacleGroup = new Group();
  
  //REMOVED THIS FOLLOWING COMMENT 
    //ground.x=ground.width/2;
   //ground.velocityX=-4;
  
  
}

function draw() {
   background(255);
  
  //delete all the below things...u r calculating survival time 
  //this is done from line 53
   //stroke("white");
   //textSize(20);
   //fill("white");
   //text("SCORE: "+score, 500, 50);
  
   stroke("black");
   textSize(20);
   fill("black");
  //Calculates the closest int value that is greater than or equal to the value of the parameter.
  //For example, ceil(9.03) returns the value 10.
  //It's basically same as Math.round
   survivalTime=Math.ceil(frameCount/frameRate());
   text("SURVIVAL TIME: "+survivalTime, 40, 50);
  
  //added velocity to ground here
  ground.velocityX=-4;
  
  //resetting the ground
  if(ground.x<0){
    ground.x=ground.width/2;
   }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
 }
  monkey.velocityY = monkey.velocityY +0.8;
  
   
   
  monkey.collide(ground);
  
  food();
  obstacles();
  drawSprites();
}



function food(){
  
  if(frameCount%100===0){
    //added var here since banana is local var
    var banana=createSprite(100, 450);
    banana.addImage("banana", bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(250, 500));
    banana.x=Math.round(random(100, 300));
    banana.velocityX=-4;
    banana.lifetime=150;
    banana.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
    foodGroup.add(banana);
  }
}

function obstacles(){
  
  if(frameCount%150===0){
    //added var here since rock is local var
    rock=createSprite(300, 510);
    rock.addImage("rock", obstacleImage);
    rock.scale=0.3;
    rock.velocityX=-4;
    rock.lifetime=150;
  }
}
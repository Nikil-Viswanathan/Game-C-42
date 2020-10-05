var Player , PlayerAnim;
var bg,bgImg;
var Enemy1 , Enemy1Anim;
var Enemy2 , Enemy2Anim;
var map, mapImg;
var sword , swordImg;
var ground , invisground;
var PlayerHeartImg , BlueHeartImg , PlayerHeart , BlueHeart;
var PlayerHealth = 3;
var BlueGhostHealth =3;

function preload(){
PlayerAnim=loadAnimation("Player/P1.png","Player/P2.png","Player/P3.jpg");
bgImg = loadImage("Forest.jpg");
Enemy1Anim = loadAnimation("EnemyNo1/Enemy1.png" , "EnemyNo1/Enemy2.png" , "EnemyNo1/Enemy3.png" , "EnemyNo1/Enemy4.png" , "EnemyNo1/Enemy5.png")
Enemy2Anim =loadAnimation("EnemyNo2/2Enemy1.png","EnemyNo2/2Enemy2.png","EnemyNo2/2Enemy3.png","EnemyNo2/2Enemy4.png","EnemyNo2/2Enemy5.png","EnemyNo2/2Enemy6.png","EnemyNo2/2Enemy7.png","EnemyNo2/2Enemy8.png","EnemyNo2/2Enemy9.png","EnemyNo2/2Enemy10.png","EnemyNo2/2Enemy11.png","EnemyNo2/2Enemy12.png","EnemyNo2/2Enemy13.png","EnemyNo2/2Enemy14.png","EnemyNo2/2Enemy15.png","EnemyNo2/2Enemy16.png","EnemyNo2/2Enemy17.png","EnemyNo2/2Enemy18.png","EnemyNo2/2Enemy19.png","EnemyNo2/2Enemy20.png")
mapImg = loadImage("map1.jpg");
swordImg = loadImage("Sword.png");
PlayerHeartImg = loadImage("GameHeart.png");
BlueHeartImg = loadImage("GameHeartBlue.png");
}



function setup(){
createCanvas(displayWidth - 20 , displayHeight -20);

bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
bg.addImage(bgImg);
bg.scale = 3.5;
sword = createSprite(100 , 100 ,10 ,10);
sword.addImage(swordImg);
sword.scale = 0.1;
sword.visible = false;
Player = createSprite(displayWidth/2 - 300 , displayHeight - 230 , 50 ,50)
Player.addAnimation("PlayerImg" , PlayerAnim);
Enemy1 = createSprite(displayWidth/2 + 70 , displayHeight - 350 ,50,50);
Enemy1.scale = 2;
Enemy1.addAnimation("Enemy1Img" , Enemy1Anim );
//Enemy2 = createSprite(displayWidth/2 + 70 , displayHeight - 300 ,50 ,50);
//Enemy2.scale = 1.5;
//Enemy2.addAnimation("Enemy2Img" , Enemy2Anim);
map = createSprite(displayWidth/2 - 650 , displayHeight - 760 ,200, 200);
map.addImage(mapImg)
map.scale =0.3;
PlayerHeart = createSprite(displayWidth/2 - 400 ,100 , 10 ,10);
PlayerHeart.addImage(PlayerHeartImg);
PlayerHeart.scale = 0.3;

BlueHeart = createSprite(displayWidth/2 + 400 , 100 ,10 ,10);
BlueHeart.addImage(BlueHeartImg);
BlueHeart.scale=0.3;
invisground = createSprite(displayWidth/2,displayHeight-150,displayWidth,10);
invisground.visible = false;
}
function draw(){
background(0);
if(sword.collide(Enemy1)){
    BlueGhostHealth - 1;
}
if(keyWentDown(RIGHT_ARROW)){
    Player.x=Player.x+5;
}
/*if(keyWentUp(RIGHT_ARROW)){
    Player.velocityX = 0;
}*/
if(keyWentDown(LEFT_ARROW)){
    Player.x = Player.x -5;
}
/*if(keyWentUp(LEFT_ARROW)){
    Player.velocityX = 0;
}*/
if(keyWentDown(UP_ARROW)&& Player.y > 642){

    Player.velocityY = -10;
}
Player.velocityY = Player.velocityY + 0.5;

if(keyWentDown("k")){
    sword.visible = true;
sword.x = Player.x + 90;
sword.y = Player.y - 30;
}
if(keyWentUp("k")){
    sword.visible = false;

}
Player.collide(invisground);
//console.log(Player.y);
drawSprites();
}
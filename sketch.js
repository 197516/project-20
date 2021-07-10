var garden, cat, rat;
var gardenimg,catmoving,ratanimation, ratstable,catstable,catstop,ratstop;

function preload() {
    //load the images here
   gardenimg = loadImage("garden.png");
   catmoving = loadImage("cat1.png")
   catstable = loadAnimation("cat2.png,cat3.png")
   catstop = loadImage ("cat4.png");
   ratanimation = loadImage("mouse1.png")
   ratstable = loadAnimation("mouse2.png,mouse3.png");
   ratstop = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden= createSprite(950,800,40,50);
    garden.addImage(gardenimg);

    cat= createSprite(900,750,0,0);
    cat.addImage(catstable);

    rat= createSprite(850,750,0,0);
    rat.addImage(ratstable);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-rat.x<(cat.width/2+rat.width)/2 &&
 rat.x-cat.x<(rat.width+cat.width)/2){
  
        cat.addImage(catstop);
        cat.velocityX=0;
        rat.addImage(ratstop);
        }
        keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyDown === Left_Arrow){
  rat.addAnimation(ratanimation);
  cat.changeAnimation(catmoving);
  cat.velocityX=1;
 }


}

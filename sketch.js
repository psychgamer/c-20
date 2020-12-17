var movingrec,fixedrec


function setup() {
  createCanvas(800,400);
  movingrec=createSprite(400, 200, 50, 50);
fixedrec=createSprite(300,100,50,50)
}

function draw() {
  background(55,5,25);
 movingrec.x=mouseX
 movingrec.y=mouseY
  
 console.log(movingrec.x - fixedrec.x)
 console.log(movingrec.width/2 + fixedrec.width/2)

  if(movingrec.x - fixedrec.x < movingrec.width/2 + fixedrec.width/2 &&
    fixedrec.x - movingrec.x < movingrec.width/2 + fixedrec.width/2 &&
    movingrec.y - fixedrec.y < movingrec.width/2 + fixedrec.width/2 &&
      fixedrec.y - movingrec.y < movingrec.width/2 + fixedrec.width/2 ){
    movingrec.shapeColor="red";
    fixedrec.shapeColor="red";
  }
  else{
    movingrec.shapeColor="green";
    fixedrec.shapeColor="green";
  }

  drawSprites();
}
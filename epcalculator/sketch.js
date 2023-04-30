/*
Notes: 
- History showing previous answers, mass and height
- Show current mass and height
- keyPressed()
*/


let Mass = 0 
let Gravity = 9.81
let Height = 0

let massButtonColor = "black"

function preload() {
  brunoAce = loadFont("fonts/BrunoAceSC-Regular.ttf")
  kanit = loadFont("fonts/Kanit-Regular.ttf")
}

function setup(){
  createCanvas(800,1000);
  background(72, 76, 217);
  formulaImg = loadImage("images/formula.png");
}

function draw(){

  // constantly draws the background to not let text or other objects over-lap when change occurs.
  background(72, 76, 217);

  // Mass is multiplied by Gravity which is multiplied by height giving the gravitational potential energy. the round() function rounds the number to the nearest whole number
  ep = round(Mass * Gravity * Height);
  
  fill("black");
  textFont(brunoAce);
  textSize(30);
  text('Gravitational',257, 65 )
  text("Potential Energy Calculator",120,100);

  image(formulaImg, 260,130, 200,100)

  // Uses rectMode to change the text and background colour of the button when cursor is hovering on button. Gives more of a buttony look
  if (overRect(200, 300, 200,100)){
    
    fill(255,255,255)
  } else {
    fill(0,0,0)
  }
  rectMode(CENTER);
  rect(200, 300, 200,100,10,10,10,10);
  if (overRect(200, 300, 200,100)){
    fill(0,0,0)
  } else {
    fill(255,255,255)
  }
  textFont(kanit);
  textSize("14");
  text("Set Mass", 140,310)

  fill("black")
  textFont(kanit)
  textSize("12")
  text("Mass: " + Mass, 150,390)

  // Uses rectMode2 to change the text and background colour of the button when cursor is hovering on button. Gives more of a buttony look
  if (overRect2(200, 300, 200,100)){
    
    fill(255,255,255)
  } else {
    
    fill(0,0,0)
  }
  rectMode(CENTER);
  rect(530,300, 200,100,10,10,10,10);
  if (overRect2(200, 300, 200,100)){
    fill(0,0,0)
  } else {
    fill(255,255,255)
  }
  textFont(kanit);
  textSize("14");
  text("Set Height", 460, 310);

  fill("black")
  textFont(kanit)
  textSize("12")
  text("Height: " + Height, 470,390)

  btnclr = color("black");

  // If the height or mass are larger than 0 then it will calculate ep

  if(Height>0&&Mass>0){
    fill("black");
    textFont("Helvetica");
    textSize(25);
    text("Your answer is: " + ep + " J", 260, 450)
    console.log(ep + " J" + " Is your answer");
  } else if(Height<0||Mass<0) { // If mass and or height is inputted as negative it will show an error
    fill("black");
    textFont("Helvetica");
    textSize(25);
    text("Error: Mass and or Weight can not be a negative number",95,450)
    console.log("Input Error: User has input a invalid number (negative value)")
  } else {
    fill("black");
    textFont("Helvetica");
    textSize(25);
    text("Please input Mass and Height", 213, 450);
  }


  


  // Shows keybinds that the user can use to automatically increase/decrease mass or height
  fill("black");
  textFont("Helvetica");
  textSize(30);
  text("Keybinds", 300, 550);
  fill("black")
  textFont("Helvetica");
  textSize(23)
  text("J = Increase Mass", 272, 605)
  fill("black")
  textFont("Helvetica");
  textSize(23)
  text("K = Increase Height", 270, 645)
  fill("black")
  textFont("Helvetica");
  textSize(23)
  text("N = Decrease Mass", 270, 685)
  fill("black")
  textFont("Helvetica");
  textSize(23)
  text("M = Decrease Height", 268, 725)

  // Changes the cursor if hovering on either buttons (|| = "or")
  if(mouseX>=100&&mouseX<=300&&mouseY>=250&&mouseY<=350||mouseX>=430&&mouseX<=630&&mouseY>=250&&mouseY<=350) {
    cursor(HAND)
  } else {
    cursor(ARROW)
  }

}

// Checks if mouse if over the buttons and if so it returns true as a value.
function overRect(x, y, w, h){
  if(mouseX>=100&&mouseX<=300&&mouseY>=250&&mouseY<=350) {
    return true;
  } else {
    return false
  }
}

// Same as "overRect"
function overRect2(x, y, w, h){
  if(mouseX>=430&&mouseX<=630&&mouseY>=250&&mouseY<=350) {
    return true;
  } else {
    return false
  }
}

// When mass button is pressed the script will prompt the user to input mass
function mousePressed(){
  if(mouseX>=100&&mouseX<=300&&mouseY>=250&&mouseY<=350){
    Mass = 0
    Mass = window.prompt("What is your objects mass?")
  }

  // When height button is pressed the script will prompt the user to input mass
  if(mouseX>=430&&mouseX<=630&&mouseY>=250&&mouseY<=350){
    Height = 0
    Height = window.prompt("What is your objects height?")
  }
}

// When J, K, N,M are pressed this function is ran and mass and or height are changed.
function keyPressed() {
  if(keyCode==74){
    Mass = Mass - -1
  }

  if(keyCode==75){
    Height = Height- -1
  }

  if(keyCode==78){
    Mass = Mass - 1
  }

  if(keyCode==77){
    Height = Height - 1
  }
}
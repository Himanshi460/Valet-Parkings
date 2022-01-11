//Create a reference for canvas canvas=
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 10;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 255;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = greencar_image;
	 
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0,cavas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_imgTag, 0, 0,cavas.width,canvas.height);
	
}
  

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=10)
	{
		greencar_y -= 10;
         console.log("When up arrow is pressed,x = " + rover_x +"| y =" + rover_y);
         uploadBackground();
         uploadrover();
	}
}

function down()
{
	if(greencar_y >=10)
	{
		greencar_y += 10;
         console.log("When up arrow is pressed,x = " + rover_x +"| y =" + rover_y);
         uploadBackground();
         uploadrover();
	}
}

function left()
{
	if(greencar_y >=10)
	{
		greencar_y -= 10;
         console.log("When up arrow is pressed,x = " + rover_x +"| y =" + rover_y);
         uploadBackground();
         uploadrover();
	}
}

function right()
{
	if(greencar_y >=10)
	{
		greencar_y += 10;
         console.log("When up arrow is pressed,x = " + rover_x +"| y =" + rover_y);
         uploadBackground();
         uploadrover();
	}
}

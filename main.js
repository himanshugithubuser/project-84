canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

image_height = 50;
image_width = 250;

image = "";

function add_image() {
	img = new Image();
	img.onload = upload;
	img.src = image;
}

function upload () {
	ctx.drawImage(img, 135, 125, image_width, image_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keypressed = e.keyCode;
	console.log(keypressed);

	if((keypressed >=97 && keypressed <= 122) || (keypressed >=65 && keypressed <=90)) {
		alphabetkey();
		document.getElementById("d1").innerHTML = "You pressed Alphabet key";
		console.log("alphabet key");
	}

	else if(keypressed >=48 && keypressed <= 57) {
		numberkey();
		document.getElementById("d1").innerHTML = "You pressed Number key";
		console.log("number key");
	}

	else if(keypressed >=37 && keypressed <=40) {
		arrowkey();
		document.getElementById("d1").innerHTML = "You pressed Arrow key";
		console.log("arrow key");
	}

	else if((keypressed == 17) || (keypressed == 18) || (keypressed == 27)) {
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed Special key";
		console.log("special key")
	}

	else { otherkey();
		document.getElementById("d1").innerHTML = "You pressed Other key";
	}
}

function alphabetkey() {
	image = "Alpkey.png";
	add_image();
}

function numberkey() {
	image = "numkey.png";
	add_image();
}

function arrowkey() {
	image = "Arrkey.png";
	add_image();
}

function specialkey() {
	image = "spkey.png";
	add_image();
}

function otherkey() {
	image = "otherkey.png";
	add_image()
}
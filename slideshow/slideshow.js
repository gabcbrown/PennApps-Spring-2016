var images = new Array()
images[0] = "SWemojipic.jpg";
images[1] = "starwarspic2.jpg";
images[2] = "starwarspic3.jpg";

var timer = setInterval("changeImage()", 1000);
var x=0;


var lastTime = 0;

function changeImage()
{
	document.getElementById("img").src=images[x]

	//Get highest of BPM array
	//Clear BPM array

	x++;
	if (x == 3) {
		clearInterval(timer);
		//Show winner
	}

}

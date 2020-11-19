var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	document.getElementById("myVideo").play();
	document.getElementById("volume").innerHTML = String((document.getElementById("myVideo").volume * 100) + "%");
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	document.getElementById("myVideo").pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	document.getElementById("myVideo").playbackRate = (document.getElementById("myVideo").playbackRate * 0.9);
	console.log("New speed is " + document.getElementById("myVideo").playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	document.getElementById("myVideo").playbackRate = (document.getElementById("myVideo").playbackRate * 1.1);
	console.log("New speed is " + document.getElementById("myVideo").playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (document.getElementById("myVideo").currentTime > (document.getElementById("myVideo").duration - 5)) {
		document.getElementById("myVideo").currentTime = 0
		document.getElementById("myVideo").play();
		console.log("Current location " + document.getElementById("myVideo").currentTime);
	} else {
		document.getElementById("myVideo").currentTime = document.getElementById("myVideo").currentTime + 5;
		document.getElementById("myVideo").play()
		console.log("Current location " + document.getElementById("myVideo").currentTime);	
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.getElementById("myVideo").muted == false) {
		document.getElementById("myVideo").muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	} else {
		document.getElementById("myVideo").muted = false;
		document.getElementById("mute").innerHTML = "Mute"
	}
});

/* Figured out below function with the help of https://stackoverflow.com/questions/62160275/js-audio-volume-slider */
document.querySelector("#volumeSlider").addEventListener("change", function(i) {
	document.getElementById("myVideo").volume = i.currentTarget.value / 100;
	document.getElementById("volume").innerHTML =  String((document.getElementById("myVideo").volume = i.currentTarget.value / 100)*100 + "%");
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").classList.remove("oldTime");
});



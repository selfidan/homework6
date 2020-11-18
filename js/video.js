var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	//let vol = document.querySelector("#volume").innerHTML = video.volume + 99 + "%" 
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video" + video.playbackRate);
	//console.log(this.value)
	video.playbackRate *= .9;
	//video.playbackRate = video.playbackRate * .9;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video" + video.playbackRate);
	video.playbackRate /= .9;

});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration -5){
		video.currentTime += 5
		console.log("Skip ahead 5 sec" + video.currentTime)

	} else {
		video.currentTime = 0
		console.log("Going Back to Beginning of Video")
	}
	video.play();
	
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted === false) {
		video.muted = true; 
	} else { 
		video.muted = false;
		
	}	
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log(this);
	console.log(this.value);
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
	

});

document.querySelector("#old").addEventListener("click", function(){
	console.log("Old School Video");
	video.style.filter = "grayscale(100)";
	video.style.filter;
});

document.querySelector("#original").addEventListener("click", function(){
	console.log("Original Video");
	video.style.filter = "grayscale(0)";
	video.style.filter;
});


// document.que for each of the other elements we have to interact with

//(line 23)take that value and use it to update down under the volume bar

//dont change css style directly, you should be using classes and removing classes to get the direired effect

//mute button and skip ahead button for desired effect in other videos (find these videos!!)
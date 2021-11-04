
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1000;	// Time Between Switch
	 
// Image List
images[0] = "skz.jpg";
images[1] = "changbin.jpg";
images[2] = "han.jpg";
images[3] = "felix.jpg";
images[4] = "minho.jpg";
images[5] = "in.jpg";
images[6] = "chan.jpg";
images[7] = "hyunjin.jpg";
images[8] = "seugmin.jpg";



// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

// ref for glider.js https://www.youtube.com/watch?v=4YQ4svkETS0 //




gsap.to("#logo", {duration: 5, x: 654, ease: "bounce"});



gsap.utils.toArray(".slideText").forEach(text => {
    gsap.timeline({
      defaults: {ease: "none"},
      scrollTrigger: {
        scroller: text.closest(".horizSlider"),
        horizontal: true,
        trigger: text.closest(".slide"),
        start: "left right",
        end: "left left",
        scrub: true
      }
    })
    .fromTo(text, {x: 250}, {x: -250}, 0)
    .from(text.nextElementSibling, {scale: 0.8}, 0)
  });
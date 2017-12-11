(function() {
	// Call yo self
	// https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t

	// loader
	
	// tried to append later but nah
	// var divOverlay = document.createElement("Div");
	// divOverlay.id = "overlay";
	// document.body.appendChild(divOverlay);

	// var divSpinner = document.createElement("spinner");
	// divSpinner.id = "spinner";
	// document.body.appendChild(divSpinner);

	document.body.setAttribute("class", "noscroll");

    var overlay = document.getElementById("overlay");
    var spinner =	document.getElementById("spinner");

		overlay.style.display = "block";
		spinner.style.display = "block";

    window.onload = function() {
    	overlay.classList.toggle('fade');
    	spinner.classList.toggle('fade');

    	setTimeout(function(){
	      document.getElementById("spinner").style.display = "none";
	      document.getElementById("overlay").style.display = "none";
      },1000)

      document.body.className = document.body.className.replace(/\bnoscroll\b/,'');
    }
	
})();
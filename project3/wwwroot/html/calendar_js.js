
	window.onscroll = function() {myFunction()};
	
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	
function myFunction() {
  if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
  }
}



		//Get the button
		var mybutton = document.getElementById("myBtn");
		
		// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
		
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
  } else {
			mybutton.style.display = "none";
	  }
	}
	
	// When the user clicks on the button, scroll to the top of the document
function topFunction() {
			document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	  }




function color()
	{
		if(document.getElementById("one").checked)
		{
			document.getElementById("activee").className = "color";
	}
	else if(document.getElementById("two").checked)
		{
			document.getElementById("activee").className = "color1";
	}
	else if(document.getElementById("three").checked)
		{
			document.getElementById("activee").className = "color2";
	}
	else if(document.getElementById("four").checked)
		{
			document.getElementById("activee").className = "color3";
	}
	else if(document.getElementById("five").checked)
		{
			document.getElementById("activee").className = "color4";
	}
}
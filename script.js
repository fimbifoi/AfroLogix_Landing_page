var landingMessages = [" De PROXIMITE", " De QUALITE", " D'EXPERTISE", " D'INTEGRITE"],
    counter = 0,
    target = document.getElementById("landingMessage");

setInterval(function(){ 
  
  target.innerHTML = landingMessages[counter];
  counter++;
  
  if( counter >= landingMessages.length ) {
    counter = 0;
  }

}, 1000);

$(document).ready(function(){
	$(".afro-display-center").slideDown("slow");
});




// scroll to top icon
$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.afro-scroll-icon').fadeIn();
		} else {
			$('.afro-scroll-icon').fadeOut();
			}
	});
	
	//Click event to scroll to top
	$('.afro-scroll-icon').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
// Alerts
jQuery(function($){



var	clickIt = 0,
	wowThing = {}
	wowThing["1"] = "Coming soon...",
	wowThing["2"] = "I'm working on it!",
	wowThing["3"] = "Almost there!",
	wowThing["4"] = "Wait for it...",
	wowThing["5"] = "Nope, you definitely have to come back in a few.",
	//muchWow = {"data-content" , wowThing[clickIt]}

	


	$( "#blog" ).on( "mouseover", function() {
		clickIt++;
		if (clickIt > 5 ) {
			clickIt = 5;
		}
		if (clickIt <= 5) {
			$( this ).attr( "data-original-title" , wowThing[clickIt])
			}
		$('[data-toggle="tooltip"]').tooltip("show");
		console.log(clickIt);
		
	});

	$( "#blog" ).on ( "click", function (){
		event.preventDefault()
	});
});

//Sourced from: https://codepen.io/onge/pen/ByjNbj
//Letter by letter animation
//A PEN BY Andrew Burton
//TODO: e-mail Andrew to notify of credit

$(function(){
	// Our selector
	var $letters = $("#letters");
	var $words = $("#myInfo");
	
	// Use lettering.js to wrap each character & word in a span tag
	$letters.lettering();
	$words.lettering("words");

	var $span_letters = $("#letters > span");
	var $span_words = $("#myInfo > span");
	var $objectsToAnimate = $span_letters.add($span_words);

	//Animate in
	setTimeout(function(){
		animateElements($objectsToAnimate,true);
	},500);

	//Animate out
	setTimeout(function(){
		animateElements($span_letters,false);
	},6000); //TODO: use previous call to animateElements() with callback to determine the timeout

});

// Animate the elements
function animateElements(elements,animIn)
{	
	var scale = (animIn) ? 1 : 1.5;
	var opacity = (animIn) ? 1 : 0;
	var delayFactor = 100;
	var transDelay = 0;

	// Loop through each letter, adding inline styles
	for(let i=1; i<=elements.length; i++)
	{
		transDelay = i*delayFactor+(i*i); //formula to get reveal the elements at a nice speed

		var span_class = "." + $(elements[i-1]).attr('class');

		$(span_class).attr("style","opacity: " + opacity + "; transition-delay: " + (transDelay) + "ms; transform:perspective(1050px) rotateY(0deg) scale(" + scale + "); -webkit-transition-delay: " + (transDelay) + "ms; -webkit-transform:perspective(1050px) rotateY(0deg) scale(" + scale + ");");

		//TODO: smarter way to add break without having to arbitrarily check for unrelated animIn
		if(animIn) {
			$(span_class).after("<br />");
		}
	}
}



$(document).ready(function(){
	$('#imprimir').click(function(e){
		e.preventDefault();
		window.print();
	});
	 $("#share").jsSocials({
    showLabel: false,
    showCount: false,
    shares: ["linkedin", "email", "facebook", "twitter", "googleplus", "pinterest"]
	});
});
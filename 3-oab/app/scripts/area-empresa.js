$(document).ready(function(){
	console.log('pronto');
	$('.dropdown').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('todown');
		$('.sublist').toggleClass('show');
	})
});
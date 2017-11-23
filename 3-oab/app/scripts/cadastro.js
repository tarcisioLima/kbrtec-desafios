$(document).ready(function(){
	console.log('foiii');
	$('#vai').click(function(e){
		e.preventDefault();
		$('#inputfile').click();
	});
	$('#inputfile').change(function(){
		var nome = "n mudou";
	    if($('#inputfile').val().length > 0){
	    	nome = $(this).val();
	    } 
	    console.log(nome);
	    alert(nome);
	});
});
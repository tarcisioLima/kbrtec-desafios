$(document).ready(function(){
	console.log('foiii');
	$('#resumoupload').click(function(e){
		e.preventDefault();
		$('#inputfile').click();
	});
	$('#inputfile').change(function(){
		var nome = "";
	    if($(this).val().length > 0){
	    	nome = $(this).val();
	    } 
	    $('#filename').val(nome);
	    console.log(nome);	  
	});
});
$(document).ready(function(){

	$('.quick-menu ul li').click(function(){
		$('.quick-menu ul li').removeClass('active');
		$(this).addClass('active');
		$('.quick-content .item-article').removeClass('active');
		$(".quick-content").find("[data-item='" + $(this).data('item') + "']").addClass('active').delay(1000);	
	});
});
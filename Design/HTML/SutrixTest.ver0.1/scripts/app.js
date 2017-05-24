jQuery(document).ready(function(){
	
	var maxWidth=window.innerWidth;
	
		jQuery("#top-menu").click(function(){
			if(parseInt(maxWidth)<526 && parseInt(maxWidth)>270){
				jQuery("ul").toggleClass('active');
				console.log("#top-menu clicked!");
				console.log(maxWidth);
			}
			else
			{
				jQuery("ul").removeClass('active');
			}
		});
});

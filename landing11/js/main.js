(function(){

	$('.triple-bars').click(function(){
		$('.responsive').toggleClass('open');
		$('.wrap').css({'width': '100%'});
	});

	$('.x-float-r').click(function(){
		$('.responsive').removeClass('open');
		$('.wrap').css({'width': '0%'});
	});

	$('.search-icon').click(function(){
		$('.ul-right > input').toggleClass('shift');
		$('.search-icon').css({'display': 'inline-block'});
	});

	var count = 0;
    $('.chev-right').click(function(){
    	var currentActive = $('.active');
    	if(count >= 4){
    		$('.content').first().removeClass('dn');
    		$('.content').first().addClass('active');
 
    		count = 0;
    	} else {
    		$('.content').next().removeClass('dn');
    		$('.active').next().addClass('active');
    
    		count=count+1;
    	}
    	$(currentActive).removeClass('active');
    });

    $('.chev-left').click(function(){

    	var currentActive = $('.active');
    	if(count <= 0){
    		$('.content').last().removeClass('dn');
    		$('.content').last().addClass('active');
    		currentActive.removeClass('active');
    		// setTimeout(function() {
	     //    $(currentActive).addClass('dn');
	    	// 	}, 10);
    		count = 4;
    	} else {
    		$('.content').prev().removeClass('dn');
    		$('.active').prev().addClass('active');
    		currentActive.removeClass('active');
    		// setTimeout(function() {
    		// $(currentActive).addClass('dn');
    		// }, 10);
    		count = count-1;
    	}
    	
    });

})();

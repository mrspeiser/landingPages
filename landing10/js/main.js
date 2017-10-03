(function(){

$('#login').on('click', function(){
	$('#login-form').toggle().css({'height': '400', 'opacity': '1', 'transition':'all 300ms ease-in-out'});
});

$('#login').on('click', function(){
	$('.login-form').toggleClass('form-show');
});

if($(window).width() <= 768){
		$('.img-contain').hide();
	} else {
		$('.img-contain').show();
	}
	
$(window).resize(function(){
	if($(window).width() <= 768){
		$('.img-contain').hide();
	} else {
		$('.img-contain').show();
	}
});
	

$('.register').click(function(){
	$('.drop').addClass('height100');
	$('.register-form-contain').addClass('display');
	$('.register-form-contain').css({'opacity': '1'});
	$('.exit-btn').css({'opacity': '1'});
	$('.exit-btn').addClass('display');
});

$('.beta-sign-up').click(function(e){
	e.preventDefault();
	$('.drop').addClass('height100');
	$('.register-form-contain').addClass('display');
	$('.register-form-contain').css({'opacity': '1'});
	$('.exit-btn').css({'opacity': '1'});
	$('.exit-btn').addClass('display');
});


$('#register-now').click(function(){
	$('.drop').addClass('height100');
	$('.register-form-contain').addClass('display');
	$('.register-form-contain').css({'opacity': '1'});
	$('.exit-btn').css({'opacity': '1'});
	$('.exit-btn').addClass('display');
});

$('.exit-btn').click(function(){
	$('.drop').removeClass('height100');
	$('.register-form-contain').removeClass('display');
	$('.register-form-contain').css({'opacity': '0'});
	$('.exit-btn').css({'opacity': '0'});
	$('.exit-btn').removeClass('display');
});


})();

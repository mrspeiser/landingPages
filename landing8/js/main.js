(function(){

  $('.title').removeClass('top-100px');

  $('.togg').click(function(){
  	$('aside').toggleClass('left-25pct');
  	$('.togg').toggleClass('left25pct');
  	$('.fa-chevron-right').toggleClass('rotate180 left25pct');
  	$('.wrapper').toggleClass('left25pct');
  	$('.underline-fx').toggleClass('underline');
  });

})();

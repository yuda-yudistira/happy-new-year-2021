// parallax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0, '+ wScroll/6 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0, '+ wScroll/1.6 +'%)'
	});
});

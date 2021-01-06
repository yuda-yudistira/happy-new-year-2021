// parallax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0, '+ wScroll/6 +'%)'
	});


	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0, '+ wScroll/1.1 +'%)'
	});

	// sambutan
	if (wScroll > $('.sambutan').offset().top - 300) {
		$('.sambutan .img-thumbnail').each(function(i) {
			setTimeout(function() {
				$('.sambutan .img-thumbnail').eq(i).addClass('muncul');
			}, 300*(i+1));
		});
	}

	// sambutan bikin ulang besok
	// if(wScroll > $('.sambutan').offset().top - 250) {
	// 	$('.sambutan .img-thumbnail').each(function(i) {
	// 		setTimeout(function() {
	// 			$('.sambutan .img-thumbnail').eq(i).addClass('muncul');
	// 		}, 300 * (i+1));
	// 	});

	// }
});

// gagal di buat
// paralax2
// smooth scrolling 
// $('.page-scroll').on('click', function(e) {
// 	var tujuan = $(this).attr('href');
// 	var elemenTujuan = $(tujuan);

// 	console.log($('body').scrollTop('700'));

// 	e.preventDefault();
// });
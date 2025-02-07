$(function(){

	// carousel

	 $('.jcarousel').jcarousel({
        wrap: 'both'
    });

	 $('.jcarousel').jcarousel({
    animation: {
        duration: 300,
        easing: 'linear'
    } 
	});

	 $('.jcarousel').jcarouselAutoscroll({
          interval: 3000,
          target: '+=1',
          autostart: true
        });
	
	$('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function() {
			$(this).addClass('jcarousel-pagination__link--active');
		})
		.on('jcarouselpagination:inactive', 'a', function() {
			$(this).removeClass('jcarousel-pagination__link--active');
		})
		.jcarouselPagination();

		    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '"></a>';
        }
    });

	// accordion

	$('.accordion__tab').eq(0).siblings('.accordion__article').show();
	$('.accordion__tab').eq(0).addClass('accordion__tab--visible');
	$('.accordion__tab').eq(0).children('.accordion__title').addClass('accordion__title--visible');

	$('.accordion__tab').on('click', function(){
		$('.accordion__article').hide();
		$('.accordion__tab').removeClass('accordion__tab--visible');
		$('.accordion__title').removeClass('accordion__title--visible');

		$(this).siblings('.accordion__article').toggle();
		$(this).toggleClass('accordion__tab--visible');
		$(this).children('.accordion__title').toggleClass('accordion__title--visible');
	});


});
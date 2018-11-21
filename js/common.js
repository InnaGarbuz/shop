
$(document).ready(function() {
	// $(".tabs__menu li").click(function() {
	// 	if (!$(this).hasClass("active")) {
	// 		var i = $(this).index();
	// 		$(".tabs__menu li.active").removeClass("active");
	// 		$(".tabs__content .active").hide().removeClass("active");
	// 		$(this).addClass("active");
	// 		$($(".tabs__content").children(".info")[i]).fadeIn(1000).addClass("active");
	// 	}
	// });

    $('.menu-cont').on('click', function () {

        $('.menu').toggleClass('active');
        $('.an-header__nav').slideToggle(200);
        return 0;

    });

    $('.an-filter').on('click', function () {
       event.preventDefault();
        $('.an-sidebar__wrapp').slideToggle(200);
        return 0;

    });

	// $('.advanced-search__link a').click(function(event) {
	// 	event.preventDefault();
	// 	$('.advanced-search__content').slideToggle();
	// 	$(".advanced-search__link a i").toggleClass("fa-angle-double-up"); return false;
	// });

	// $('.menu-cont').on('click', function () {

	// 	$('.menu').toggleClass('active');
	// 	$('.se-header__nav').slideToggle(200);
	// 	return 0;

	// });

	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

		$(".accordion > .accordion-item").click(function() {
			// Cancel the siblings
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
			// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


	$('.an-material__slider, .an-slidershop__wrap').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
      nextArrow: '<i class="fa  fa-angle-right"></i>',
      prevArrow: '<i class="fa  fa-angle-left"></i>',
    responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
             {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
           
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
	});


    $('.an-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    });


    $('.an-content__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


});

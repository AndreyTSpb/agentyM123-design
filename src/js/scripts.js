//Слайдеры на JQUERY
$(document).ready(function(){
    //меню при прокрутке
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('fixed-menu');
        } else {
            $('.header').removeClass('fixed-menu');
        }
    });
    //Слайдер журналы
    $('.magazines-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    centerMode: true,
                    dots: true
                }
            }
        ]
    });
    //Слайдер с субновостями 
    $('.news-subnews').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    centerMode: true,
                    dots: true
                }
            }
        ]
    });
    //Слайдер с субновостями 
    $('.news-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    //Слайдер с преподами 
    $('.teachers-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    centerMode: true,
                    dots: true
                }
            }
        ]
    });
  });
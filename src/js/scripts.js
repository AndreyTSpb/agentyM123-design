//Слайдеры на JQUERY
$(document).ready(function(){
    //меню при прокрутке
    $(window).scroll(function(){
        if ($(this).scrollTop() > 120) {
            $('.header').addClass('fixed-menu');
            $('body').addClass('add-mt-200');
        } else {
            $('.header').removeClass('fixed-menu');
            $('body').removeClass('add-mt-200');
        }
    });
    //Слайдер в шапке
    $('.slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        //centerPadding: '10px',
        autoplay: true,
        //arrows: false,
        autoplaySpeed: 10000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.png"></button>',
        //dots: true
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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: true
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
                breakpoint: 450,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode: true,
                    centerPadding: '160px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
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
                    centerMode: true,
                    centerPadding: '40px',
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
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
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
    //инициализация подсказок средствами bootstrap
    $('[data-toggle="tooltip"]').tooltip();

    //Сортировка журналов по месяцам
        //выбор журналов по годам
    function show_and_hide_magazine(selector) {
        let breadcrumb = selector.querySelector('.breadcrumb');
        if(breadcrumb == null) return false;
        let items = breadcrumb.querySelectorAll('.breadcrumb-item');

        breadcrumb.addEventListener('click',(e)=>{
            let target = e.target;
            //console.log(target);
            if(target.classList.contains('breadcrumb-item')){
                remove_active();
                target.classList.add('active');
                let year = target.getAttribute('data-select');
                if(year === '0'){
                    show_all_magazines();
                }else{
                    hide_magazines(year);
                }
            }
        });

        function show_all_magazines(){
            let magazines = selector.querySelectorAll('.magazine-item');
            magazines.forEach(e => {
                e.style.display = 'block';
            });
        }

        function hide_magazines(year) {
            let magazines = selector.querySelectorAll('.magazine-item');
            magazines.forEach(e => {
                //console.log(e);
                if(e.getAttribute('data-year') === year){
                    e.style.display = 'block';
                }else{
                    e.style.display = 'none';
                }
            });
        }

        function remove_active(){
            items.forEach( e => {
                e.classList.remove('active');
            });
        }
    }

    let block_magazines = document.querySelector('.magazine');
    if(block_magazines != null){
        show_and_hide_magazine(block_magazines);
    }
  });
$(function() {

    'use strict';
    var w = $(window).width();

    //-------------------------------
    //Меню
    //-------------------------------

    var $headerMenuBtn = $('.header__menu-button'),
        $headerMenuList = $('.header__menu-list');

    $headerMenuBtn.click(function() {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            $headerMenuList.slideDown(500);
        } else {
            $this.removeClass('active');
            $headerMenuList.slideUp(500);
        }
    });

    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 640 && $headerMenuList.is(':hidden')) {
            $headerMenuList.removeAttr('style');
        }
    });

    //------------------------------------------------
    // Плавный скролл
    //------------------------------------------------

    $('.scroll').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect + 20 }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) + 800), 'linear');
    });

    //---------------------------------
    //Адаптивный слайдер
    //---------------------------------

    $('.delegates__box').append('<div class="delegates__dots"></div>');
    var delegatesLenght = $('.delegates__slider-item').length,
        delegatesMas = [];
    for (var i = 0; i < delegatesLenght; i++ ) {
        var imgPath = $('.delegates__slider-item').eq(i).find('img').attr('src');
        delegatesMas.push(imgPath);
    }

    $(".delegates__slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 600,
        autoHeight: false,
        dotsContainer: '.delegates__dots',
        onInitialized: function() {
            for (var i = 0; i < delegatesLenght; i++ ) {
                $('.owl-dot').eq(i).html('<img src="' + delegatesMas[i] + '">');
            }
        }
    });

    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------
    $(".advantages__main-item-title").equalHeight();
    $(".advantages__additional-item-title").equalHeight();

    //---------------------------------------------
    //Видеопопап
    //---------------------------------------------

    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    //---------------------------------------------
    //Сокрытие программы
    //---------------------------------------------
    var programTableBox = $('.program__table-box');
    programTableBox.hide();
    $('.program__table-link a').click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('show')) {
            $(this).addClass('show').html('Скрыть полную программу');
            programTableBox.slideDown(500);
        } else {
            $(this).removeClass('show').html('Показать полную программу');
            programTableBox.slideUp(500);
        }
    });

    //------------------------------------
    //popup
    //------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    //---------------------------------------------
    //gallery
    //---------------------------------------------

    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});


    //---------------------------------------------
    //tooltip
    //---------------------------------------------
    $('.tooltip').tooltip({
        position: {
            my: "center top",
            at: "center bottom"
        }
    });

    /*  -------------
    //Валидация полей формы на странице заказа
    ------------- */

    var validator1 = $("#form1").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 2
            },
            city: {
                required: true,
                minlength: 2
            },
            company: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        }
    });



    /*  -------------
         Contact Form
        ------------- */

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail

    $("#form1").submit(function() { //Change
        var th = $(this);
        if (validator1.form() == true) {
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                th.trigger("reset");
                setTimeout(function() {
                    $(".gratitude-link").trigger("click");
                    setTimeout(function() {
                        $.magnificPopup.close();
                    }, 5000);
                }, 500);
            });
        }
        return false;
    });

    var validator2 = $("#form2").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 2
            },
            city: {
                required: true,
                minlength: 2
            },
            company: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        }
    });



    /*  -------------
         Contact Form
        ------------- */

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail

    $("#form2").submit(function() { //Change
        var th = $(this);
        if (validator2.form() == true) {
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                th.trigger("reset");
                setTimeout(function() {
                    $(".gratitude-link").trigger("click");
                    setTimeout(function() {
                        $.magnificPopup.close();
                    }, 5000);
                }, 500);
            });
        }
        return false;
    });

    var validator3 = $("#form3").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 2
            },
            city: {
                required: true,
                minlength: 2
            },
            company: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        }
    });



    /*  -------------
         Contact Form
        ------------- */

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail

    $("#form3").submit(function() { //Change
        var th = $(this);
        if (validator3.form() == true) {
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                th.trigger("reset");
                setTimeout(function() {
                    $(".gratitude-link").trigger("click");
                    setTimeout(function() {
                        $.magnificPopup.close();
                    }, 5000);
                }, 500);
            });
        }
        return false;
    });

    var validator4 = $("#form4").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 2
            },
            city: {
                required: true,
                minlength: 2
            },
            company: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        }
    });



    /*  -------------
         Contact Form
        ------------- */

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail

    $("#form4").submit(function() { //Change
        var th = $(this);
        if (validator4.form() == true) {
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                th.trigger("reset");
                setTimeout(function() {
                    $(".gratitude-link").trigger("click");
                    setTimeout(function() {
                        $.magnificPopup.close();
                    }, 5000);
                }, 500);
            });
        }
        return false;
    });

    var validator5 = $(".popup__form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 2
            }
        }
    });

    $(".popup__form").submit(function() { //Change
        var th = $(this);
        if (validator5.form() == true) {
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                th.trigger("reset");
                $.magnificPopup.close();
                setTimeout(function() {
                    $(".gratitude-link").trigger("click");
                    setTimeout(function() {
                        $.magnificPopup.close();
                    }, 5000);
                }, 500);
            });
        }
        return false;
    });


    //---------------------------------------------
    //Яндекс карта
    //---------------------------------------------

    var $map = $('#map');
    var myMap;
    ymaps.ready(function() {
        myMap = new ymaps.Map('map', {
                center: [55.744992, 37.585556],
                zoom: 16,
                controls: ['zoomControl'],
                behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
            }, {
                searchControlProvider: 'yandex#search'
            }),
        myMap.geoObjects.add(new ymaps.Placemark([55.745275, 37.580469], {
            preset: "islands#blueStretchyIcon"
        }));
        // function disableDrag() {
        //     var w = $(window).width();
        //     if (w < 768) {
        //         myMap.behaviors.disable('drag');
        //         myMap.setZoom(17);
		// 		myMap.panTo([55.745275, 37.580469], {flying: false, duration: 400});
        //     } else {
        //         myMap.behaviors.enable('drag');
        //     }
        //     if (w < 480) {
        //         myMap.setZoom(15);
		// 		myMap.panTo([55.741125, 37.581995], {flying: false, duration: 400});
        //     } else {
        //         myMap.setZoom(16);
        //         myMap.panTo([55.745253, 37.584377], {flying: false, duration: 400});
        //     }
        // }
        // disableDrag();
        // $(window).resize(function() {
        //     disableDrag();
        // });
    });



    //------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });
});

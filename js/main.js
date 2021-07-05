'use strict';


function open_menu(menu, open) {
    var div_menu = menu;
    var body = $('html, body');
    open.toggleClass('open');
    if (open.hasClass('open')) {
        $(document).find(div_menu).slideDown(350, function() {
            open.addClass('open');
        });
    } else {
        $(document).find(div_menu).slideUp(350, function() {
            open.removeClass('open');
            $(this).removeAttr("style");// options
        });
    }
}

function openPopup($popup, $timer) {
    var body = $('body');
    if (!$popup.length) {
        return;
    }
    body.addClass('overflow');
    $popup.fadeIn(200, function() {

        $(this).addClass('active');

    });
}

function closePopup($popup, callback) {
    var body = $('body');
    $popup.removeClass('active');
    setTimeout(function() {
        $popup.fadeOut(200, callback);
        body.removeClass('overflow');
    }, 500);
}

function popup(gallery) {
    var swiper_popup_gallery = gallery;
    var body = $('body');
    $(document).on('click', '.open_popup', function(event) {
        event.preventDefault();
        openPopup($($(this).data('popup')));
        swiper_popup_gallery.init()
    });
    $(document).on('click', '.close_popup, .popup_close', function(event) {
        closePopup($(this).parents('.popup'));
        event.preventDefault();
    });
    $(document).on('click', '.backdrop', function() {
        closePopup($(this).parent('.popup'));
    });
}

$(document).ready(function () {
    var swiper_popup_gallery = new Swiper('.swiper_popup_gallery', {
        speed: 400,
        init: false,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    popup(swiper_popup_gallery);


    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top  - 100
            }, 1200, 'swing');
			if ($(window).width() <= 767){
				$(document).find('.header_menu').slideUp(350, function() {
                $('.menu_open_close').removeClass('open'); 
                $(this).removeAttr("style");// options
            });
			}
		    
        }

    });

    $('.menu_open_close').click(function(e) {
        e.preventDefault();
        var menu = $('.header_menu');
        var open = $(this);
        open_menu(menu, open);
    });


    var main_swiper = new Swiper('.main_swiper', {
        speed: 400,
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 5000
        }
    });

    var testimonials_slider = new Swiper('.testimonials_slider', {
        speed: 400,
        effect: 'fade',
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 5000
        }
    });
});

function ajaxFormSubmit($form, callback_on_success) {
    if (typeof(FormData) === 'undefined') {
        return;
    }
    var $success_msg = $form.find('.success_msg'),
        $error_msg = $form.find('.error_msg'),
        $error_fields_in_form = $form.find('.error');
    $success_msg.html('');
    $error_msg.html('');
    $error_fields_in_form.removeClass('error');
    event.preventDefault();
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: new FormData($form[0]),
        dataType: 'json',
        success: function(result) {
            if (result.error !== undefined) {
                var error_msg;
                for (var field in result.error) {
                    var $field = $form.find('[name*=\\[' + field + '\\]]');
                    if ($field.length) {
                        $field.addClass('error');
                    }
                    if (result.error[field] && !error_msg) {
                        error_msg = result.error[field];
                    }
                }
                if (error_msg) {
                    $error_msg.html(error_msg);
                }
            } else if (result.success !== undefined) {
                $success_msg.html(result.success);
                if (callback_on_success !== undefined) {
                    callback_on_success.call(this, result);
                }
            }
        },
        error: ajaxError,
        cache: false,
        contentType: false,
        processData: false
    });
}

function ajaxError(jqXHR, exception) {
    alert('Something went wrong...');
}

$(function() {
    $(document).on('submit', '#contact_form', function(event) {
        event.preventDefault();
        var $form = $(this);
        ajaxFormSubmit($form, function() {
            $form[0].reset();
        });
    });
});
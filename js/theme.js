(function ($) {
  $(document).on('ready', () => {
    // ------------------------------ Theme Menu
    const menu = $('#mega-menu-holder');
    if (menu.length) {
      menu.slimmenu({
        resizeWidth: '991',
        animSpeed: 'medium',
        indentChildren: true,
      });
    }


    // --------------------------------- Search Box
    const sbutton = $('#search');


    const mainSearch = $('#searchWrapper');


    const close = $('#close-button');
    if (sbutton.length) {
      sbutton.on('click', () => {
        mainSearch.addClass('show-box');
      });
      close.on('click', () => {
        mainSearch.removeClass('show-box');
      });
    }


    // ------------------------ Case Slider
    const mSlider = $('.case-slider');
    if (mSlider.length) {
      mSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          575: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      });
    }


    // -------------------- Remove Placeholder When Focus Or Click
    $('input,textarea').each(function () {
      $(this).data('holder', $(this).attr('placeholder'));
      $(this).on('focusin', function () {
        $(this).attr('placeholder', '');
      });
      $(this).on('focusout', function () {
        $(this).attr('placeholder', $(this).data('holder'));
      });
    });

    // -------------------- From Bottom to Top Button
    // Check to see if the window is top if not then display button
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    // Click event to scroll to top
    $('.scroll-top').on('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 1500);
      return false;
    });


    // ----------------------------- Counter Function
    const timer = $('.timer');
    if (timer.length) {
      timer.appear(() => {
        timer.countTo();
      });
    }

    // ------------------------------------- Fancybox
    const fancy = $('.fancybox');
    if (fancy.length) {
      fancy.fancybox({
        arrows: true,
        animationEffect: 'zoom-in-out',
        transitionEffect: 'zoom-in-out',
      });
    }

    // ------------------------------ MixitUp
    if ($('#mixitUp-item').length) {
      $('#mixitUp-item').mixItUp();
    }


    // ------------------------------- Case Details Slider
    const tSlider = $('.case-details-slider');
    if (tSlider.length) {
      tSlider.owlCarousel({
        loop: true,
        nav: true,
        navText: ['  ', '  '],
        dots: false,
        margin: 30,
        autoplay: false,
        smartSpeed: 1200,
        lazyLoad: true,
        items: 1,
      });
    }


    // ------------------------ Realated case
    const rSlider = $('.related-case-slider');
    if (rSlider.length) {
      rSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          575: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      });
    }


    // --------------------------------- Contact Form Validation
    if ($('.form-validation').length) {
      $('.form-validation').validate({ // initialize the plugin
        rules: {
          name: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          },
          phone: {
            required: true,
          },
          message: {
            required: true,
          },
        },
        submitHandler(form) {
          $(form).ajaxSubmit({
            success() {
              $('.form-validation :input').attr('disabled', 'disabled');
              $('.form-validation').fadeTo('slow', 1, function () {
                $(this).find(':input').attr('disabled', 'disabled');
                $(this).find('label').css('cursor', 'default');
                $('#alert-success').fadeIn();
              });
            },
            error() {
              $('.form-validation').fadeTo('slow', 1, () => {
                $('#alert-error').fadeIn();
              });
            },
          });
        },
      });
    }


    // ---------------------------------- Validation Alert
    const closeButton = $('.closeAlert');
    if (closeButton.length) {
      closeButton.on('click', () => {
        $('.alert-wrapper').fadeOut();
      });
      closeButton.on('click', () => {
        $('.alert-wrapper').fadeOut();
      });
    }


    // -------------------------------- Accordion Panel
    if ($('.theme-accordion > .panel').length) {
      $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
        const heading = $(this).find('.panel-heading');
        heading.addClass('active-panel');
      });
      $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        const heading = $(this).find('.panel-heading');
        heading.removeClass('active-panel');
        // setProgressBar(heading.get(0).id);
      });
      $('.panel-heading a').on('click', function (e) {
        if ($(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
          e.stopPropagation();
        }
      });
    }

    // Smooth Scroll
    const scroll = new SmoothScroll('a[href*="#"]:not([href="#client-slider"])');
  });


  $(window).on('load', () => { // makes sure the whole site is loaded
    // -------------------- Site Preloader
    $('#loader').fadeOut(); // will first fade out the loading animation
    $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({ overflow: 'visible' });


    // ------------------------------- AOS Animation
    AOS.init({
      duration: 1000,
      mirror: true,
    });
  });
}(jQuery));

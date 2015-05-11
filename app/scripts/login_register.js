(function ($) {
  'use strict';

  $(function () {
    //get viewport rect
    var $viewport = $('.viewport');
    var viewportRect = {
      'width': $viewport.width(),
      'height': $viewport.height()
    };

    switchLoginRegister(viewportRect);
    registerSteps(viewportRect);
    validateFormSubmit();


    $('#register_avatar').on('change', function () {
      readURL(this, $('.placeholder_img'));
    })
  });

  var validateFormSubmit = function () {
    $('form').on('submit', function () {
      if (!validateInput($(this).find('input[required]'))) return false;
    })
  };

  var readURL = function (input, $tgtImg) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $tgtImg.attr('src', e.target.result);
        $tgtImg.css('display', 'block');
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  var validateInput = function ($input) {
    let showMsg = function ($container) {
      $container.css({
        '-webkit-transform': 'translate3D(0, -50px, 0)'
        'transform': 'translate3D(0, -50px, 0)'
      });
      setTimeout(function () {
        $container.css({
          '-webkit-transform': 'translate3D(0, 50px, 0)'
          'transform': 'translate3D(0, 50px, 0)'
        })
      }, 5000)
    };
    for (let i = 0; i < $input.length; i++) {
      let $item = $($input[i]);
      if ($item.val().trim() === '') {
        let $msgContainer = $('#error_msg'), placeholder = $item.attr('placeholder');
        if ($msgContainer.length === 0) {
          $msgContainer = $('<span style="position:fixed;' +
            'width:80%;' +
            'left:50%;' +
            'margin-left: -40%;' +
            'right:0;' +
            'padding: 0.12rem 0;' +
            'text-align: center;' +
            ' bottom: 0;' +
            '-webkit-transform: translate3D(0, 50px, 0); ' +
            'transform: translate3D(0, 50px, 0); ' +
            '-webkit-transition: all 0.2s ease;' +
            'transition: all 0.2s ease;">${placeholder} 不能为空</span>')
            .appendTo('body');
        } else {
          $msgContainer.text('${placeholder} 不能为空');
        }
        showMsg($msgContainer);
        $item.trigger('focus');
        return false;
      }
    }
    return true;
  };

  var registerSteps = function (viewportRect) {
    $('.slides').css('height', viewportRect.height);
    var slides = new $JssorSlider$('register_slider', {
      $DragOrientation: 0,
      $AutoPlay: false,
      $Loop: 0,
      $DragOrientations: 1,
      $StartIndex: location.hash.slice(1) || 0,
      $SlideWidth: viewportRect.width,
      $SlideHeight: viewportRect.height,
      $HWA: false
    });

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales
    //while window resizes
    function ScaleSlider() {
      var parentWidth = $('#register_slider').parent().width();
      if (parentWidth) {
        slides.$ScaleWidth(parentWidth);
      }
      else
        window.setTimeout(ScaleSlider, 30);
    }

    //Scale slider after document ready
    ScaleSlider();

    //Scale slider while window load/resize/orientationchange.
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end

    $('.next_step').on('click', function () {
      //validate form
      if (!validateInput($('.required_input'))) return;

      slides.$Next();
    });

    $('.prev_step').on('click', function () {
      slides.$Prev();
    });
  };

  var switchLoginRegister = function () {
    var loginSection = $('#login');
    var registerSection = $('#register');
    loginSection.find('p').addClass('show');

    $('.switcher').on('click', function (ev) {
      var $tgt = $(ev.target);
      if ($tgt.hasClass('to_register')) {
        $tgt.hide();
        $('.to_login').show();
        registerSection.css({
          '-webkit-transform': 'translate3D(0,0,0)',
          'transform': 'translate3D(0,0,0)'
        }).find('p').addClass('show');
        loginSection.css({
          '-webkit-transform': 'translate3D(0,-100%,0)',
          'transform': 'translate3D(0,-100%,0)'
        }).find('p').removeClass('show');
      }
      else {
        $tgt.hide();
        $('.to_register').show();
        loginSection.css({
          '-webkit-transform': 'translate3D(0,0,0)',
          'transform': 'translate3D(0,0,0)'
        }).find('p').addClass('show');
        registerSection.css({
          '-webkit-transform': 'translate3D(0,100%,0)',
          'transform': 'translate3D(0,100%,0)'
        }).find('p').removeClass('show');
      }
    });
  }
})(jQuery);

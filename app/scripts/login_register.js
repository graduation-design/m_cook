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

    $('#register_avatar').on('change', function () {
      readURL(this, $('.placeholder_img'));
    })
  });

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

  var registerSteps = function (viewportRect) {
    $('.slides').css('height', viewportRect.height);
    var slides = new $JssorSlider$('register_slider', {
      $DragOrientation: 0,
      $AutoPlay: false,
      $Loop: 0,
      $DragOrientations: 1,
      $StartIndex: location.hash.slice(1) || 0,
      $SlideWidth: viewportRect.width,
      $SlideHeight: viewportRect.height
      //$HWA: false
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
      //var $requiredInput = $('.required_input');
      //for(var i = 0; i < $requiredInput.length; i++){
      //  if(!$requiredInput[i].checkValidity()){
      //    $('#register_btn').click();
      //    return;
      //  }
      //}
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

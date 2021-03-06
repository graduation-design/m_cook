(function ($) {
  'use strict';

  $(function () {
    var msg = new MsgDisplayer();

    sectionTranslate(msg);
    errorHandler(msg);
    validateFormSubmit(msg);

    //upload avatar
    $('#register_avatar').on('change', function () {
      readURL(this, $('.placeholder_img'));
    })
  });

  var errorHandler = function (msg) {
    var val = $('#J_error_msg').val().trim();
    if (val !== '${error_msg}') {
      msg.setText(val);
      msg.showMsg();
    }
  };

  var sectionTranslate = function (msg) {
    //get viewport rect
    var $viewport = $('.viewport');
    var viewportRect = {
      'width': $viewport.width(),
      'height': $viewport.height()
    };
    //section translate
    switchLoginRegister(viewportRect);
    registerSteps(viewportRect, msg);
  };


  //message display class
  var MsgDisplayer = function () {
    this.$msgContainer = $(`<span id="error_msg" style="
            position:fixed;
            width:70%;
            left:50%;
            margin-left: -35%;
            right:0;
            padding: 0.12rem 0;
            text-align: center;
             bottom: 0;
            -webkit-transform: translate3D(0, 50px, 0);
            transform: translate3D(0, 50px, 0);
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            color: #fff;
            background-color: rgba(0,0,0,0.6);
            font-size: 0.24rem;
            border-radius: 3px;"></span>`)
      .appendTo('body');
  };

  MsgDisplayer.prototype.showMsg = function () {
    var self = this;
    this.$msgContainer.css({
      '-webkit-transform': 'translate3D(0, -50px, 0)',
      'transform': 'translate3D(0, -50px, 0)'
    });
    setTimeout(function () {
      self.$msgContainer.css({
        '-webkit-transform': 'translate3D(0, 50px, 0)',
        'transform': 'translate3D(0, 50px, 0)'
      })
    }, 2300);
  };

  MsgDisplayer.prototype.setText = function (info) {
    this.$msgContainer.text(info);
  };

  var validateFormSubmit = function (msg) {
    $('form').on('submit', function () {
      if (!validateInput($(this).find('input[required]'), msg)) return false;
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

  var validateInput = function ($input, msg) {
    for (let i = 0; i < $input.length; i++) {
      let $item = $($input[i]);
      if ($item.val().trim() === '') {
        let placeholder = $item.attr('placeholder');
        msg.setText(`${placeholder} 不能为空`);

        msg.showMsg();
        //$item.trigger('focus');
        return false;
      }
    }
    return true;
  };

  var registerSteps = function (viewportRect, msg) {
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
      if (!validateInput($('.required_input'), msg)) return;

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

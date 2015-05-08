(function($){
  'use strict';

  $(function(){
    switchLoginRegister();
    registerSteps();

    $('#register_avatar').on('change', function(){
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

  var registerSteps = function(){
    var $viewport = $('.viewport');
    var height =$viewport.height();
    $('.slides').css('height', height);
    var slides = new $JssorSlider$('register_slider', {
      $DragOrientation:0,
      $AutoPlay: false,
      $Loop: 0,
      $DragOrientations: 1,
      $StartIndex: location.hash.slice(1) || 0,
      $SlideWidth: $viewport.width(),
      $SlideHeight: height
      //$HWA: false
    });

    $('.next_step').on('click', function(){
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

    $('.prev_step').on('click', function(){
      slides.$Prev();
    });
  };

  var switchLoginRegister = function(){
    var loginSection = $('#login');
    var registerSection = $('#register');
    loginSection.find('p').addClass('show');

    $('.switcher').on('click', function(ev){
      var $wrapper = $('.wrapper');
      var $tgt = $(ev.target);
      if($tgt.hasClass('to_register')){
        $tgt.hide();
        $('.to_login').show();
        $wrapper.css('transform', 'translateY(-50%)');
        registerSection.find('p').addClass('show');
        loginSection.find('p').removeClass('show');
      }
      else{
        $tgt.hide();
        $('.to_register').show();
        $wrapper.css('transform', 'translateY(0)');
        loginSection.find('p').addClass('show');
        registerSection.find('p').removeClass('show');
      }
    });
  }
})(jQuery);

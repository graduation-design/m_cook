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
    $('.next_step').on('click', function(){
      //validate form
      //var $requiredInput = $('.required_input');
      //for(var i = 0; i < $requiredInput.length; i++){
      //  if(!$requiredInput[i].checkValidity()){
      //    $('#register_btn').click();
      //    return;
      //  }
      //}

      //show next step
      $('.slider').addClass('show_second');
      $('.prev_step').css('display', 'block');
    });

    $('.prev_step').on('click', function(){
      $('.slider').removeClass('show_second');
      $('.prev_step').css('display', 'none');
    });
  };

  var switchLoginRegister = function(){
    var loginSection = $('#login');
    var registerSection = $('#register');
    loginSection.find('p').addClass('show');

    $('.switcher').on('click', function(ev){
      var $wrapper = $('.wrapper');
      if($(ev.target).hasClass('to_register')){
        $wrapper.css('transform', 'translateY(-100%)');
        registerSection.find('p').addClass('show');
        loginSection.find('p').removeClass('show');
      }
      else{
        $wrapper.css('transform', 'translateY(0)');
        loginSection.find('p').addClass('show');
        registerSection.find('p').removeClass('show');
      }
    });
  }
})(jQuery);

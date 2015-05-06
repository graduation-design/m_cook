(function($){
  'use strict';

  $(function(){
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
  })
})(jQuery);

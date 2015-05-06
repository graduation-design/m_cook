(function($){
  'use strict';

  $(function(){
    $('.switcher').on('click', function(ev){
      var $wrapper = $('.wrapper');
      if($(ev.target).hasClass('to_register'))
        $wrapper.css('transform', 'translateY(-100%)');
      else
        $wrapper.css('transform', 'translateY(0)');

    });
  })
})(jQuery);

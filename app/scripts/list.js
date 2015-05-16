(function(){
  'use strict';

  $(function(){
    $('.list_section').on('click', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);

      $tgtItem.css('background-color', '#ccc');
      setTimeout(function(){
        $tgtItem.css('background-color', 'transparent');
      },100);

      Android.callDetailPage($tgtItem.attr('data-id'), $tgtItem.attr('data-type'));
    });
  });

  $(window).on('load', function(){
    $('.loading_cover').fadeOut();
    setTimeout(function(){
      $('.blink_text').addClass('play');

      setTimeout(function(){
        //banner title to small
        $('.banner_detail').addClass('small');
        $('.cookbook_name').addClass('small');
        $('.author').addClass('small');
      },3000)
    }, 1000);
  })
})(jQuery);

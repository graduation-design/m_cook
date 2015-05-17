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
      if($('#banner').length === 0) return;

      $('.blink_text').addClass('play');

      setTimeout(function(){
        //banner title to small
        $('.banner_detail').addClass('small');
        $('.cookbook_name').addClass('show');
        $('.author').addClass('show');
      },2000)
    }, 1000);
  })
})(jQuery);

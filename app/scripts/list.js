(function(){
  'use strict';

  for(let i = 0; i < 10; i++ ){
    console.log(i);
  }
  console.log(i);

  $(function(){
    $('.list_section').on('click', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);

      $tgtItem.css('background-color', '#ccc');
      setTimeout(function(){
        $tgtItem.css('background-color', 'transparent');
      },300);

      Android.callDetailPage($tgtItem.attr('data-id'), $tgtItem.attr('data-type'));
    });
  })
})(jQuery);

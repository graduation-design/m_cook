(function(){
  'use strict';

  $(function(){
    $('.list_section').on('click', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);

      $('#test').html(window.Android.callDetailPage($tgtItem.attr('data-id'), $tgtItem.attr('data-type')));
    });
  })
})(jQuery);

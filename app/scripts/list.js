(function(){
  'use strict';

  $(function(){
    $('.list_section').on('click', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);

      $('body').append(window.Android.callDetailPage($tgtItem.attr('data-id'), $tgtItem.attr('data-type')));
    });
  })
})(jQuery);

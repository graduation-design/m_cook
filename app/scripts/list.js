(function(){
  'use strict';

  $(function(){
    $('.list_section').on('click', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);

      window.Android.callDetailPage($tgtItem.attr('data-id', 'data-type'));
    });
  })
})(jQuery);

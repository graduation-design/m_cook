(function(){
  'use strict';

  $(function(){
    $('.list_section').on('click', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);

      console.log($tgtItem);

      $('#test').html(Android.callDetailPage($tgtItem.attr('data-id'), $tgtItem.attr('data-type'))+ '010' +Android.testfunc('t'));
    });
  })
})(jQuery);

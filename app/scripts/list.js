(function(){
  'use strict';

  $(function(){
    var listSection = $('.list_section');

    listSection.on('touchstart', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);
      $tgtItem.css('background-color', '#ccc');
    });

    listSection.on('touchend', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);
      $tgtItem.css('background-color', 'transparent');
    });

    listSection.on('click', 'li', function(ev){
      var $tgtItem = $(ev.currentTarget);

      Android.callDetailPage($tgtItem.attr('data-id'), $tgtItem.attr('data-type'));
    });
  })
})(jQuery);

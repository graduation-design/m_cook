(function () {
  'use strict';

  var name = "Bob", time = "today";
  console.log('Hello ${name}, how are you ${time}?');

  $(function () {
    $('.list_section').on('click', 'li', function (ev) {
      var $tgtItem = $(ev.currentTarget);

      $tgtItem.css('background-color', '#ccc');
      setTimeout(function () {
        $tgtItem.css('background-color', 'transparent');
      }, 300);

      Android.callDetailPage($tgtItem.attr('data-id'), $tgtItem.attr('data-type'));
    });
  })
})(jQuery);

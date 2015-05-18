(function ($) {
  'use strict';
  $(function () {
    toolbarTap();
  });

  var toolbarTap = function () {
    $('.social_toolbar li').on('click', function (ev) {
      $(ev.target).find('span').toggleClass('used');
    })
  }
})(jQuery);

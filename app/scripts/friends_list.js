(function ($) {
  $(function () {

  });

  var showItem = function ($item) {
    $item.css({
      '-webkit-transform': 'translate3D(0,0,0)',
      'transform': 'translate3D(0,0,0)',
      'opacity': 1
    });

    setTimeout(function () {
      showItem($item.next())
    }, 100);
  };

  window.onload = function () {
    $('.loading_cover').fadeOut();
    showItem($('.friends_list li:first-child'));
  }
}(jQuery));

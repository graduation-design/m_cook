(function ($) {
  $(function () {
    $('.friends_list').on('click', 'li', function(ev){
      var $tgt = $(ev.currentTarget);

      $tgt.addClass('active');
      setTimeout(function(){
        $tgt.removeClass('active');
      },1000);

      Android.callDetailPage($tgt.attr('data-id'),
        'friend',
        $tgt.find('.user_name').text().replace(/♂|♀/, ''),
        $tgt.find('.sign').text(),
        $tgt.attr('data-isFocus'));
    });
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

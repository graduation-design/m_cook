(function ($) {
  'use strict';
  $(function () {
    toolbarScrollHandler();
    toolbarTap();
  });

  var toolbarScrollHandler = function(){
    var $toolbar = $('.social_toolbar');
    var $toolbarList = $toolbar.find('ul');
    var socialToolbarOffset = $toolbarList.find('li').offset();
    var isFixed = false;
    $(document).on('scroll', function () {
      if (socialToolbarOffset.top - 12 < $(this).scrollTop()) {
        if(isFixed) return;
        $toolbarList.css({
          'position': 'fixed',
          'top': 12,
          'left': socialToolbarOffset.left
        });
        isFixed = true
      }else{
        if(!isFixed) return;
        $toolbarList.css('position', 'static');
        isFixed = false;
      }
    });
  };

  var toolbarTap = function(){
    $('.social_toolbar ul').on('click', 'li', function(ev){
      $(ev.currentTarget).find('span').toggleClass('used');
    })
  }
})(jQuery);

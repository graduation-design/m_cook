/**
 * Created by Administrator on 2015/4/24.
 */

$(function () {
  var num = 1;
  $(".step-pic").on("click", ".selected", function () {
    if (num < 3) {
      $(".selected+li").addClass("selected");
      $(this).removeClass("selected");

      num = num + 1;
      $(".header").text(num + '/3')
    }
  });

  $('.big-pic').hammer().on('swipeleft swiperight', function (ev) {
    var curSelected = $('.selected');
    if (ev.type === 'swipeleft') {
      if (num < 3) {
        $(".selected+li").addClass("selected");
        $(curSelected).removeClass("selected");

        num = num + 1;
        $(".header").text(num + '/3')
      }
    }
    if (ev.type === 'swiperight') {

    }
  })

});

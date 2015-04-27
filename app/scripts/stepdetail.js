/**
 * Created by Administrator on 2015/4/24.
 */

$(function () {
  var num = 1;

  $('.big-pic').hammer().on('swipeleft swiperight', function (ev) {
    var curSelected = $('.selected');
    var stepItems = $('.step-pic li');
    if (ev.type === 'swipeleft') {
      if (num < 3) {
        $(stepItems[curSelected.index() + 1]).addClass('selected');
        $(curSelected).removeClass("selected");

        num = num + 1;
        $(".header").text(num + '/3')
      }
    }
    if (ev.type === 'swiperight') {
      if (num > 1) {
        $(stepItems[curSelected.index() - 1]).addClass('selected');
        $(curSelected).removeClass("selected");

        num = num - 1;
        $(".header").text(num + '/3')
      }
    }
  })

});

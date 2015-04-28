/**
 * Created by Administrator on 2015/4/24.
 */

function init() {
  var viewportWidth = $(document).width();

  $('.step-pic').css('width', viewportWidth);
  $('.step-pic ol li').css('width', viewportWidth);
  $('.step-pic ol').css('width', 3 * viewportWidth);
}

function setPicIndex(index) {
  $('.step-pic ol').css('left', -index * $(document).width());
  $(".header").text(index + 1 + '/3');
}

$(function () {
  init();

  var num = parseInt(location.hash.slice(1));
  setPicIndex(num - 1);

  $('.big-pic').hammer().on('swipeleft swiperight', function (ev) {
    if (ev.type === 'swipeleft' && num < 3) {
      num = num + 1;
      setPicIndex(num - 1)
    }
    if (ev.type === 'swiperight' && num > 1) {
      num = num - 1;
      setPicIndex(num - 1)
    }
  })

});

/**
 * Created by Administrator on 2015/4/24.
 */

function init(viewportWidth) {
  $('.step-pic').css('width', viewportWidth);
  $('.step-pic ol li').css('width', viewportWidth);
  $('.step-pic ol').css('width', 3 * viewportWidth);
}

function setPicIndex(index, viewportWidth) {
  $('.step-pic ol').css('transform', 'translateX('+ (-index * viewportWidth) +'px)');
  $(".header").text(index + 1 + '/3');
}

$(function () {
  var viewportWidth = $(document).width();
  init(viewportWidth);

  var num = parseInt(location.hash.slice(1));
  setPicIndex(num - 1, viewportWidth);

  $('.big-pic').hammer().on('swipeleft swiperight', function (ev) {
    if (ev.type === 'swipeleft' && num < 3) {
      num = num + 1;
      setPicIndex(num - 1, viewportWidth)
    }
    if (ev.type === 'swiperight' && num > 1) {
      num = num - 1;
      setPicIndex(num - 1, viewportWidth)
    }
  })

});

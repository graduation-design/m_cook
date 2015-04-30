/**
 * Created by Administrator on 2015/4/24.
 */

function init() {
  var height = $('.big-pic').height();
  $('#slider_container').css('height', height);
  $('.slides').css('height', height);

  var slides = new $JssorSlider$('slider_container', {
    $AutoPlay: false,
    $Loop: 0,
    $DragOrientations: 1,
    $StartIndex: location.hash.slice(1) || 0
  });

  slides.$On($JssorSlider$.$EVT_PARK, function (index) {
    $('.header').text((index+1)+'/3');
  });
}

$(function () {
  init();
});

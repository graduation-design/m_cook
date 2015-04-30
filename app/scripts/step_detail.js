/**
 * Created by Administrator on 2015/4/24.
 */

function init() {
  var height = $('.big-pic').height();
  $('#slider_container').css('height', height);
  $('.slides').css('height', height);

  new $JssorSlider$('slider_container', {
    $AutoPlay: false,
    $DragOrientations: 1
  })
}

$(function () {
  init();
});

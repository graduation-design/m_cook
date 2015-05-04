$(function () {
  $('#one').on('click', function () {
    $('.big-pic').css('display', 'block');
  });

  $('.send_comment').on('click', function () {
    var editor = $('#comment_editor');
    var content = editor.text().trim();

    if (content === '') return;

    $.getJSON('#', {comment: content}, function () {
      editor.text('');
    });
  });

  $('.more').on('click', function(){
    $.getJSON('#', function(data){
      console.log(data);
    });
  });

  function addComment(commentInfo) {
    var tpl = '<li class="talk">\
      <div class="talk-pic-container">\
      <div class="talk-pic" style="background-image: url(' + commentInfo.avatar + ');"></div>\
      </div>\
      <div class="talk-text">\
      <span class="ayname">'+ commentInfo.userName +'</span>\
      <p>'+commentInfo.comment+'</p>\
      <span class="aytime">'+ commentInfo.timestamp+'</span>\
    </div>\
    </li>';

    $('.discus ul').append($(tpl));
  }
});

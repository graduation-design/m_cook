$(function () {
  var uuid = $('#uuid').val();

  $('.file_selector').on('change', function (ev) {
    imgUpload($(ev.target), uuid)
  });
});

function imgUpload(fileInput, uuid) {
  var formData = new FormData();
  var index = 0;

  if (fileInput.attr('id') === 'main_pic_selector') {
    index = 0;
  } else {
    index = fileInput.parents('li').index() + 1;
  }

  readURL(fileInput[0], fileInput.siblings('.pic_placeholder'));

  formData.append('uuid', uuid);
  formData.append('index', index);
  formData.append('img', fileInput[0].files[0]);

  $.ajax({
    url: $('#J_pic_upload_url').val(),
    type: 'POST',
    data: formData,
    cache: false,
    dataType: 'json',
    processData: false, // Don't process the files
    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
    success: function (data, textStatus, jqXHR) {
    }
  });
}

function readURL(input, $tgtImg) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $tgtImg.attr('src', e.target.result);
      $tgtImg.css('display', 'block');
    };

    reader.readAsDataURL(input.files[0]);
  }
}

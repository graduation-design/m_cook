$(function () {
  var uuid = $('#uuid').val();

  $('.file_selector').on('change', function (ev) {
    imgUpload($(ev.target), uuid, function (data, textStatus, jqXHR) {

    })
  });

  $('.material .add').on('click', function(){
    addMaterial();
  });

  $('.material .delete').on('click', function(ev){
    $(ev.target).parents('li').remove();
  })
});

function addMaterial() {
  var tpl = '<li class="one_material">\
    <input name="food_name" placeholder="如 鸡蛋" class="one_piece">\
    <input name="food_quantity" placeholder="如 一个" class="amount_material">\
    <span class="entypo-cancel-circled delete"></span>\
    </li>';

  $('.food_material').append(tpl);
}

function addStep() {

}

function imgUpload(fileInput, uuid) {
  var formData = new FormData();
  var index = 0;

  if (fileInput.attr('id') === 'main_pic_selector') {
    index = 0;
  } else {
    index = fileInput.parents('li').index() + 1;
  }

  formData.append('uuid', uuid);
  formData.append('index', index);
  formData.append('img', fileInput[0].files[0]);

  $.ajax({
    url: 'submit.php?files',
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

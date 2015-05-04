$(function () {
  var uuid = $('#uuid').val();

  $('.file_selector').on('change', function (ev) {
    imgUpload($(ev.target), uuid)
  });
  bindMaterialEvent();
  bindStepEvent();
});

function bindMaterialEvent() {
  var $material = $('.food_material');
  $material.on('click', '.add', function () {
    addMaterial();
  });

  $material.on('click', '.delete', function (ev) {
    if ($material.find('li').length === 1) return;
    $(ev.target).parents('li').remove();
  });

  $material.on('blur', 'li', function (ev) {
    $(ev.currentTarget).find('.delete').fadeOut();
  });

  $material.on('focus', 'li', function (ev) {
    $(ev.currentTarget).find('.delete').fadeIn();
  });
}

function bindStepEvent() {
  var $steps = $('.food-step');
  $steps.on('focus', '.step-text', function (ev) {
    $(ev.target).siblings('.btn').fadeIn();
  });
  $steps.on('blur', '.step-text', function (ev) {
    $(ev.target).siblings('.btn').fadeOut();
  });

  $steps.on('click', '.add', function(ev){
    addStep($(ev.target).parents('li'));
  });
  $steps.on('click', '.delete', function(ev){
    deleteStep($(ev.target).parents('li'));
  })
}

function addMaterial() {
  var tpl = '<li class="one_material">\
    <input name="food_name" placeholder="如 鸡蛋" class="one_piece">\
    <input name="food_quantity" placeholder="如 一个" class="amount_material">\
    <span class="fontawesome-minus-sign delete"></span>\
    </li>';

  $('.food_material').append(tpl);
}

function addStep(tgt) {
  var tpl = '<li class="each-step">\
    <div class="step-pic">\
    <span class="fontawesome-camera"></span>\
    <input class="file_selector" type="file" accept="image/*"/>\
    </div>\
    <div class="step-num">1</div>\
    <textarea name="step_content" rows="5" class="step-text"></textarea>\
    <div class="btn">\
    <div class="fontawesome-minus-sign delete"></div>\
    <div class="fontawesome-plus-sign add"></div>\
    </div>\
    </li>';
  $(tpl).insertAfter(tgt);

  resetStepNum();
}

function deleteStep(step){
  if($('.each-step').length <= 1) return;
  step.remove();
  resetStepNum();
}

function resetStepNum(){
  var numDom = $('.step .step-num');

  for(var i = 0; i < numDom.length; i++){
    $(numDom[i]).text(i+1);
  }
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

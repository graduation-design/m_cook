"use strict";function addTags(){var e=$(".tags").val().trim().replace(/ +/g," "),t=[],a=[],n="";""!==e&&(t=e.split(" ").sort());for(var i=0;i<t.length;i++)t[i]!==t[i+1]&&a.push(t[i]);a.forEach(function(e){n+='<input type="hidden" name="food_class" value="'+e+'"/>'}),$("#form").append($(n))}function bindMaterialEvent(){var e=$(".food_material");$(".material .add").on("click",function(){addMaterial()}),e.on("click",".delete",function(t){1!==e.find("li").length&&$(t.target).parents("li").remove()}),e.on("blur","li",function(e){$(e.currentTarget).find(".delete").fadeOut()}),e.on("focus","li",function(e){$(e.currentTarget).find(".delete").fadeIn()})}function bindStepEvent(){var e=$(".food-step");e.on("focus",".step-text",function(e){$(e.target).siblings(".btn").fadeIn()}),e.on("blur",".step-text",function(e){$(e.target).siblings(".btn").fadeOut()}),e.on("click",".add",function(e){addStep($(e.target).parents("li"))}),e.on("click",".delete",function(e){deleteStep($(e.target).parents("li"))})}function addMaterial(){var e='<li class="one_material">    <input name="food_name" placeholder="如 鸡蛋" class="one_piece">    <input name="food_quantity" placeholder="如 一个" class="amount_material">    <span class="fontawesome-minus-sign delete"></span>    </li>';$(".food_material").append(e)}function addStep(e){var t='<li class="each-step">    <div class="step-pic">    <span class="fontawesome-camera"></span>    <input class="file_selector" type="file" accept="image/*"/>    </div>    <div class="step-num">1</div>    <textarea name="step_content" rows="5" class="step-text"></textarea>    <div class="btn">    <div class="fontawesome-minus-sign delete"></div>    <div class="fontawesome-plus-sign add"></div>    </div>    </li>';$(t).insertAfter(e),resetStepNum()}function deleteStep(e){$(".each-step").length<=1||(e.remove(),resetStepNum())}function resetStepNum(){for(var e=$(".step .step-num"),t=0;t<e.length;t++)$(e[t]).text(t+1)}function imgUpload(e,t){var a=new FormData,n=0;n="main_pic_selector"===e.attr("id")?0:e.parents("li").index()+1,readURL(e[0],e.siblings(".pic_placeholder")),a.append("uuid",t),a.append("index",n),a.append("img",e[0].files[0]),$.ajax({url:$("#J_pic_upload_url").val(),type:"POST",data:a,cache:!1,dataType:"json",processData:!1,contentType:!1,success:function(e,t,a){}})}function readURL(e,t){if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(e){t.attr("src",e.target.result),t.css("display","block")},a.readAsDataURL(e.files[0])}}$(function(){var e=$("#uuid").val();$(".file_selector").on("change",function(t){imgUpload($(t.target),e)}),$("#form").on("submit",function(){addTags()}),bindMaterialEvent(),bindStepEvent()});
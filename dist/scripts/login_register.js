!function(s){"use strict";s(function(){i(),t(),s("#register_avatar").on("change",function(){e(this,s(".placeholder_img"))})});var e=function(s,e){if(s.files&&s.files[0]){var t=new FileReader;t.onload=function(s){e.attr("src",s.target.result),e.css("display","block")},t.readAsDataURL(s.files[0])}},t=function(){var e=s(".viewport"),t=e.height();s(".slides").css("height",t);var i=new $JssorSlider$("register_slider",{$DragOrientation:0,$AutoPlay:!1,$Loop:0,$DragOrientations:1,$StartIndex:location.hash.slice(1)||0,$SlideWidth:e.width(),$SlideHeight:t,$HWA:!1});s(".next_step").on("click",function(){i.$Next()}),s(".prev_step").on("click",function(){i.$Prev()})},i=function(){var e=s("#login"),t=s("#register");e.find("p").addClass("show"),s(".switcher").on("click",function(i){var r=s(".wrapper"),n=s(i.target);n.hasClass("to_register")?(n.hide(),s(".to_login").show(),r.css("transform","translateY(-50%)"),t.find("p").addClass("show"),e.find("p").removeClass("show")):(n.hide(),s(".to_register").show(),r.css("transform","translateY(0)"),e.find("p").addClass("show"),t.find("p").removeClass("show"))})}}(jQuery);
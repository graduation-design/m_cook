!function(e){"use strict";e(function(){t(),s(),e("#register_avatar").on("change",function(){i(this,e(".placeholder_img"))})});var i=function(e,i){if(e.files&&e.files[0]){var s=new FileReader;s.onload=function(e){i.attr("src",e.target.result),i.css("display","block")},s.readAsDataURL(e.files[0])}},s=function(){var i=e(".viewport"),s=i.height();e(".slides").css("height",s);var t=new $JssorSlider$("register_slider",{$DragOrientation:0,$AutoPlay:!1,$Loop:0,$DragOrientations:1,$StartIndex:location.hash.slice(1)||0,$SlideWidth:i.width(),$SlideHeight:s});e(".next_step").on("click",function(){t.$Next()}),e(".prev_step").on("click",function(){t.$Prev()})},t=function(){var i=e("#login"),s=e("#register");i.find("p").addClass("show"),e(".switcher").on("click",function(t){var o=e(".wrapper"),r=e(t.target);r.hasClass("to_register")?(r.hide(),e(".to_login").show(),o.css("top","-100%"),s.find("p").addClass("show"),i.find("p").removeClass("show")):(r.hide(),e(".to_register").show(),o.css("top","0"),i.find("p").addClass("show"),s.find("p").removeClass("show"))})}}(jQuery);
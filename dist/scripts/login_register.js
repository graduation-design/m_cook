!function(s){"use strict";s(function(){n(),r(),s("#register_avatar").on("change",function(){e(this,s(".placeholder_img"))})});var e=function(s,e){if(s.files&&s.files[0]){var r=new FileReader;r.onload=function(s){e.attr("src",s.target.result),e.css("display","block")},r.readAsDataURL(s.files[0])}},r=function(){s(".next_step").on("click",function(){s("#register_form").addClass("show_second"),s(".prev_step").css("display","block")}),s(".prev_step").on("click",function(){s("#register_form").removeClass("show_second"),s(".prev_step").css("display","none")})},n=function(){var e=s("#login"),r=s("#register");e.find("p").addClass("show"),s(".switcher").on("click",function(n){var o=s(".wrapper"),t=s(n.target);t.hasClass("to_register")?(t.hide(),s(".to_login").show(),o.css("transform","translateY(-50%)"),r.find("p").addClass("show"),e.find("p").removeClass("show")):(t.hide(),s(".to_register").show(),o.css("transform","translateY(0)"),e.find("p").addClass("show"),r.find("p").removeClass("show"))})}}(jQuery);
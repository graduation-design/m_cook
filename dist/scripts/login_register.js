"use strict";!function(t){t(function(){var a=new e;r(a),n(a),s(a),t("#register_avatar").on("change",function(){i(this,t(".placeholder_img"))})});var n=function(n){var r=t("#J_error_msg").val().trim();"${error_msg}"!==r&&(n.setText(r),n.showMsg())},r=function(n){var r=t(".viewport"),e={width:r.width(),height:r.height()};l(e),o(e,n)},e=function(){this.$msgContainer=t('<span id="error_msg" style="\n            position:fixed;\n            width:70%;\n            left:50%;\n            margin-left: -35%;\n            right:0;\n            padding: 0.12rem 0;\n            text-align: center;\n             bottom: 0;\n            -webkit-transform: translate3D(0, 50px, 0);\n            transform: translate3D(0, 50px, 0);\n            -webkit-transition: all 0.2s ease;\n            transition: all 0.2s ease;\n            color: #fff;\n            background-color: rgba(0,0,0,0.6);\n            font-size: 0.24rem;\n            border-radius: 3px;"></span>').appendTo("body")};e.prototype.showMsg=function(){var t=this;this.$msgContainer.css({"-webkit-transform":"translate3D(0, -50px, 0)",transform:"translate3D(0, -50px, 0)"}),setTimeout(function(){t.$msgContainer.css({"-webkit-transform":"translate3D(0, 50px, 0)",transform:"translate3D(0, 50px, 0)"})},2300)},e.prototype.setText=function(t){this.$msgContainer.text(t)};var s=function(n){t("form").on("submit",function(){return a(t(this).find("input[required]"),n)?void 0:!1})},i=function(t,n){if(t.files&&t.files[0]){var r=new FileReader;r.onload=function(t){n.attr("src",t.target.result),n.css("display","block")},r.readAsDataURL(t.files[0])}},a=function(n,r){for(var e=0;e<n.length;e++){var s=t(n[e]);if(""===s.val().trim()){var i=s.attr("placeholder");return r.setText(""+i+" 不能为空"),r.showMsg(),!1}}return!0},o=function(n,r){function e(){var n=t("#register_slider").parent().width();n?s.$ScaleWidth(n):window.setTimeout(e,30)}t(".slides").css("height",n.height);var s=new $JssorSlider$("register_slider",{$DragOrientation:0,$AutoPlay:!1,$Loop:0,$DragOrientations:1,$StartIndex:location.hash.slice(1)||0,$SlideWidth:n.width,$SlideHeight:n.height,$HWA:!1});e(),t(window).bind("load",e),t(window).bind("resize",e),t(window).bind("orientationchange",e),t(".next_step").on("click",function(){a(t(".required_input"),r)&&s.$Next()}),t(".prev_step").on("click",function(){s.$Prev()})},l=function(){var n=t("#login"),r=t("#register");n.find("p").addClass("show"),t(".switcher").on("click",function(e){var s=t(e.target);s.hasClass("to_register")?(s.hide(),t(".to_login").show(),r.css({"-webkit-transform":"translate3D(0,0,0)",transform:"translate3D(0,0,0)"}).find("p").addClass("show"),n.css({"-webkit-transform":"translate3D(0,-100%,0)",transform:"translate3D(0,-100%,0)"}).find("p").removeClass("show")):(s.hide(),t(".to_register").show(),n.css({"-webkit-transform":"translate3D(0,0,0)",transform:"translate3D(0,0,0)"}).find("p").addClass("show"),r.css({"-webkit-transform":"translate3D(0,100%,0)",transform:"translate3D(0,100%,0)"}).find("p").removeClass("show"))})}}(jQuery);
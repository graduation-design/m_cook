"use strict";!function(t){t(function(){t(".friends_list").on("click","li",function(i){var n=t(i.currentTarget);n.addClass("active"),setTimeout(function(){n.removeClass("active")},1e3),Android.callDetailPage(n.attr("data-id"),"friend")})});var i=function n(t){t.css({"-webkit-transform":"translate3D(0,0,0)",transform:"translate3D(0,0,0)",opacity:1}),setTimeout(function(){n(t.next())},100)};window.onload=function(){t(".loading_cover").fadeOut(),i(t(".friends_list li:first-child"))}}(jQuery);
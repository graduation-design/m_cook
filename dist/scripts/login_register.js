!function(s){"use strict";s(function(){var a=s("#login"),r=s("#register");a.find("p").addClass("show"),s(".switcher").on("click",function(n){var t=s(".wrapper");s(n.target).hasClass("to_register")?(t.css("transform","translateY(-100%)"),r.find("p").addClass("show"),a.find("p").removeClass("show")):(t.css("transform","translateY(0)"),a.find("p").addClass("show"),r.find("p").removeClass("show"))})})}(jQuery);
"use strict";!function(){$(function(){$(".list_section").on("click","li",function(t){var a=$(t.currentTarget);a.css("background-color","#ccc"),setTimeout(function(){a.css("background-color","transparent")},100),Android.callDetailPage(a.attr("data-id"),a.attr("data-type"))})}),$(window).on("load",function(){$(".loading_cover").fadeOut(),setTimeout(function(){0!==$("#banner").length&&($(".blink_text").addClass("play"),setTimeout(function(){$(".banner_detail").addClass("small"),$(".cookbook_name").addClass("show"),$(".author").addClass("show")},2e3))},1e3)})}(jQuery);
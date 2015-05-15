(function ($) {
  'use strict';

  $(function () {
    toDetailEvent();

    bindSTEvent();
  });

  var toDetailEvent = function () {
    $('.moment_list').on('click', '.post_img a', function (ev) {
      var $tgt = $(ev.currentTarget);
      var $momentsItem = $tgt.parents('.moment_item');

      Android.callDetailPage($momentsItem.attr('data-id'), $momentsItem.attr('data-type'));
    })
  };

  //bind SocialToolbar event
  var bindSTEvent = function () {
    var $momentsList = $('.moments_list');

    $momentsList.on('click', '.social_toolbar .share', function (ev) {
      var $tgt = $(ev.currentTarget);
      var $shareNum = $tgt.find('.num');
      var $momentsItem = $tgt.parents('.moment_item');
      duangIcon($tgt.find('.icon'));

      $shareNum.text(parseInt($shareNum.text()) + 1);

      $.getJSON($momentsList.attr('data-share'), {
        obj_id: $momentsItem.attr('data-id'),
        type: $momentsItem.attr('data-type')
      }, function () {

      });
    });

    $momentsList.on('click', '.social_toolbar .hate', function (ev) {
      var $tgt = $(ev.currentTarget);
      var $momentsItem = $tgt.parents('.moment_item');
      var $hateNum = $tgt.find('.num');

      var $like = $tgt.siblings('.like');
      var $likeNum = $like.find('.num');
      duangIcon($tgt.find('.icon'));

      if ($tgt.hasClass('used')) {
        $tgt.removeClass('used');
        $hateNum.text(parseInt($hateNum.text()) - 1);
      } else {
        $tgt.addClass('used');
        $hateNum.text(parseInt($hateNum.text()) + 1);

        if ($like.hasClass('used')) {
          $like.removeClass('used');
          $likeNum.text(parseInt($likeNum.text()) - 1);
        }
      }

      $.getJSON($momentsList.attr('data-hate'), {
        obj_id: $momentsItem.attr('data-id'),
        type: $momentsItem.attr('data-type')
      }, function () {

      });
    });

    $momentsList.on('click', '.social_toolbar .like', function (ev) {
      var $tgt = $(ev.currentTarget);
      var $likeNum = $tgt.find('.num');
      var $momentsItem = $tgt.parents('.moment_item');

      var $hate = $tgt.siblings('.hate');
      var $hateNum = $hate.find('.num');
      if ($hate.hasClass('used')){
        $hate.removeClass('used');
        $hateNum.text(parseInt($likeNum.text()) - 1);
      }

      duangIcon($tgt.find('.icon'));
      if ($tgt.hasClass('used')) {
        $tgt.removeClass('used');
        $likeNum.text(parseInt($likeNum.text()) - 1);
      } else {
        $tgt.addClass('used');
        $likeNum.text(parseInt($likeNum.text()) + 1);
      }

      $.getJSON($momentsList.attr('data-like'), {
        obj_id: $momentsItem.attr('data-id'),
        type: $momentsItem.attr('data-type')
      }, function () {

      });
    });

    var duangIcon = function ($icon) {
      $icon.addClass('pulse').addClass('animated');

      //setTimeout(function () {
      //  $icon.removeClass('pulse').removeClass('duang');
      //}, 1000)
    }
  }
}(jQuery));

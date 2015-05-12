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
        id: $momentsItem.attr('data-id'),
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
        isUsed: !$tgt.hasClass('used'),
        id: $momentsItem.attr('data-id'),
        type: $momentsItem.attr('data-type')
      }, function () {

      });
    });

    $momentsList.on('click', '.social_toolbar .like', function (ev) {
      var $tgt = $(ev.currentTarget);
      var $likeNum = $tgt.find('.num');
      var $momentsItem = $tgt.parents('.moment_item');

      if ($tgt.siblings('.hate').hasClass('used')) return;

      duangIcon($tgt.find('.icon'));
      if ($tgt.hasClass('used')) {
        $tgt.removeClass('used');
        $likeNum.text(parseInt($likeNum.text()) - 1);
      } else {
        $tgt.addClass('used');
        $likeNum.text(parseInt($likeNum.text()) + 1);
      }

      $.getJSON($momentsList.attr('data-like'), {
        isUsed: !$tgt.hasClass('used'),
        id: $momentsItem.attr('data-id'),
        type: $momentsItem.attr('data-type')
      }, function () {

      });
    });

    var duangIcon = function ($icon) {
      $icon.css({
        '-webkit-transform': 'scale(1.5)',
        'transform': 'scale(1.5)'
      });

      setTimeout(function () {
        $icon.css({
          '-webkit-transform': 'scale(1)',
          'transform': 'scale(1)'
        });
      }, 250)
    }
  }
}(jQuery));

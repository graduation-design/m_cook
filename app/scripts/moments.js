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
      var $momentsItem = $tgt.parents('.moment_item');
      duangIcon($tgt.find('.icon'));
      $.getJSON($momentsList.attr('data-share'), {
        id: $momentsItem.attr('data-id'),
        type: $momentsItem.attr('data-type')
      }, function () {

      });
    });

    $momentsList.on('click', '.social_toolbar .comments', function (ev) {
      var $tgt = $(ev.currentTarget);
      var $momentsItem = $tgt.parents('.moment_item');
      duangIcon($tgt.find('.icon'));
      Android.commentsPage($momentsItem.attr('data-id'), $momentsItem.attr('data-type'));
    });

    $momentsList.on('click', '.social_toolbar .like', function (ev) {
      var $tgt = $(ev.currentTarget);
      var $momentsItem = $tgt.parents('.moment_item');
      duangIcon($tgt.find('.icon'));
      $tgt.toggleClass('liked');
      $.getJSON($momentsList.attr('data-like'), {
        isLiked: !$tgt.hasClass('liked'),
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

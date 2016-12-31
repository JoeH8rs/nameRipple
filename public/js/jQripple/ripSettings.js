$(document).ready(function () {
  try {
    $('body').ripples({
      resolution: 256,
      dropRadius: 20, //px
      perturbance: 0.05,
    });

  }
  catch (e) {
    $('.error').show().text(e);
  }

  $('.js-ripples-disable').on('click', function () {
    $('body, body').ripples('destroy');
    $(this).hide();
  });

  $('.js-ripples-play').on('click', function () {
    $('body, body').ripples('play');
  });

  $('.js-ripples-pause').on('click', function () {
    $('body, body').ripples('pause');
  });

  // Automatic drops
  setInterval(function () {
    var $el = $('body');
    var x = Math.random() * $el.outerWidth()
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 40;
    var strength = .05 + Math.random() * .001;
    $el.ripples('drop', x, y, dropRadius, strength);
  }, 1500);

  $(document).ready(function () {
    setTimeout(function () {
      $(".backfade").animate({
        "opacity": "0.85"
      }, 6000);
    }, 12000);

  });

});

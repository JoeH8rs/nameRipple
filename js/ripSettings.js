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

    $(".search").click(function () {
        $(".searchArea").animate({ "top": "-220px" }, "slow");
    });

    $(".search").click(function () {
        $(".someText").hide(0).delay(800).fadeIn();
    });
$(document).ready(function () {
    setTimeout(function () {        
            $(".backfade").animate({
                "opacity": "0.95"
            }, 10000);
        }, 8000);

    });

});

(function ($) {
  "use strict";

  // scroll to up click the arrow button
  $(window).on("scroll", function () {
    var scrollUp = $(".scroll-up"),
      scroll = $(window).scrollTop();
    if (scroll >= 600) {
      scrollUp.fadeIn(200);
    } else {
      scrollUp.fadeOut(100);
    }
  });
  $(".scroll-up").on("click", function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
  AOS.init();
})(jQuery);

var el = document.querySelectorAll(".field-page-internal-link > a");

for (i = 0; i < el.length; ++i) {
  el[i].innerHTML = "<span></span>";
}

const box = document.querySelector('.marquee img');
const rect = box.getBoundingClientRect();

function isInViewport(element) {
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

console.log(rect);


(function ($) {
  // add markup to region-header
  var $window = $(window);
  var $hamburger = $(".hamburger");
  var $body = $("body");
  var $overlay = $("#overlay");

  function resize() {
    // resize function
    if ($window.width() < 1024) {
      $body.addClass("mobile");
    } else {
      $body.removeClass("mobile");
      $body.removeClass("is-open");
      $hamburger.removeClass("is-active");
      $overlay.removeClass("is-open");
    }
  }

  $hamburger.on("click", function () {
    // hamburger clicked
    $hamburger.toggleClass("is-active"); // change hamburger state
    $body.toggleClass("no-scroll"); // disable scrolling
    $body.toggleClass("is-open"); // add class to hide menu
    $overlay.toggleClass("is-open");
  });

  $window.resize(resize).trigger("resize");
})(jQuery);

(function ($) {
  var $searchBtn = $(".search");
  var $searchContainer = $(".search-container");
  var $body = $("body");
  var $closeSearchContainer = $(".search-menu");
  $searchBtn.on("click", function () {
    $searchBtn.toggleClass("is-active");
    $body.toggleClass("no-scroll");
    $body.toggleClass("is-open");
    $searchContainer.toggleClass("is-open");
  });
  $closeSearchContainer.on('click', function () {
    $body.toggleClass("no-scroll");
    $body.toggleClass("is-open");
    $searchContainer.toggleClass("is-open");
  })
})(jQuery);

// This should be a preprocess function at *.theme
var el = document.querySelectorAll('.field-page-internal-link > a');
var quickNewsLinks = document.querySelectorAll('.field-quick-news-links a')
var zoomLinks = document.querySelectorAll('.field-events-zoom-link a')
var sofZoomLinks = document.querySelectorAll('.field-sof-zoom-link a')


for (i = 0; i < el.length; ++i) {
  el[i].innerHTML = '<span></span>';
}

for (i = 0; i < quickNewsLinks.length; ++i) {
  quickNewsLinks[i].innerHTML = '<span></span>';
}

for (i = 0; i < zoomLinks.length; ++i) {
  zoomLinks[i].innerHTML = '<span></span>';
}

for (i = 0; i < sofZoomLinks.length; ++i) {
  sofZoomLinks[i].innerHTML = '<span></span>';
}


// Card links
// const card = document.querySelectorAll(".path-news-far-afield .card-inner")
// const externalLink = document.querySelectorAll(".field-quick-news-links a")

// document.addEventListener("DOMContentLoaded", function () {


//   for (i = 0; i < card.length; ++i) {
//     card[i].addEventListener("click", function(event) {
//       const isTextSelected = window.getSelection().toString();
//       if (!isTextSelected) {
//         // externalLink[i].click();
//       }
//     })
//   }
// });

// function handleClick(event) {
//   const isTextSelected = window.getSelection().toString();
//   if (!isTextSelected) {
//     externalLink.click();
//   }
// }

(function ($) {
  // add markup to region-header
  var $window = $(window);
  var $hamburger = $(".hamburger");
  var $body = $("body");
  var $overlay = $("#overlay");

  function resize() { // resize function
    if ($window.width() < 1024) {
      $body.addClass("mobile");
    } else {
      $body.removeClass("mobile");
      $body.removeClass("is-open");
      $hamburger.removeClass("is-active");
      $overlay.removeClass("is-open");
    }
  };

  $hamburger.on("click", function () { // hamburger clicked
    $hamburger.toggleClass("is-active"); // change hamburger state
    $body.toggleClass("no-scroll"); // disable scrolling
    $body.toggleClass("is-open"); // add class to hide menu
    $overlay.toggleClass("is-open");
  });


  $window
    .resize(resize)
    .trigger('resize');

})(jQuery);

// var userLoginLabel = document.querySelector('.user-login-form .form-text');
// var userLoginContainer = document.querySelector('.user-login-form .form-item');
// var userLoginInput = document.querySelector('.user-login-form input');
// var value = userLoginInput.value;
// userLoginLabel.addEventListener('focus', function () {
//   userLoginContainer.classList.add('form-active');
// });
// userLoginLabel.addEventListener('blur', function () {
//   console.log(value);

//   if (value) {
//     userLoginInput.dataset.state = '';
//     userLoginContainer.classList.add('form-active');
//     return;
//   }

//   var trimmed = value.trim();

//   if (trimmed) {
//     console.log(trimmed);
//     userLoginInput.dataset.state = 'valid';
//     userLoginContainer.classList.add('form-active');
//   } else {
//     userLoginInput.dataset.state = 'invalid';
//     userLoginContainer.classList.remove('form-active');
//   }
// });

// var input = document.querySelector('form-text');
// input.addEventListener('input', function (evt) {
//   var value = input.value;

//   if (!value) {
//     input.dataset.state = '';
//     return;
//   }

//   var trimmed = value.trim();

//   if (trimmed) {
//     input.dataset.state = 'valid';
//   } else {
//     input.dataset.state = 'invalid';
//   }
// });

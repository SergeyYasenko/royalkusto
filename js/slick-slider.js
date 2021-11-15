// SLICK CLIDER

$(document).ready(function () {
   $('.main__slider').slick({
      dots: false,
      arrows: false,
      adaptiveHeight: false,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 4000,
      waitForAnimate: false,
      // touchThreshold: 12,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      swipe: false,
      variableWidth: true,
   });
});
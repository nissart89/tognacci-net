//jQuery to collapse the navbar on scroll
$(document).ready().scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $(".navbar-brand").removeClass("big-name");
    $(".sub-title").addClass("sub-title-hid");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    $(".navbar-brand").addClass("big-name");
    $(".sub-title").removeClass("sub-title-hid");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
});

//Random bg
$(function() {
  var RandomBG = ['stjohns-harb', 'stjohns-wall', 'bordeaux', 'stemy', 'cagn', 'nice']
  $('#slider-container').addClass(RandomBG[Math.floor(Math.random() * RandomBG.length)])
});

//Sticked Slider

$(document).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('#slider-container').css('background-position', 'center ' + ((scrolledY)) + 'px');
});

//Hover Titres slider
$(document).ready(function() {
  $(".slider-title").hover(
    function() {
      $(this).siblings().children(".slider-desc").stop().toggleClass("active"),
        $(this).toggleClass("active");
    });
});


//Sticked Footer

$(document).ready().scroll(function() {
  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  if (scrollBottom < $(".footer").height()) {
    $(".footer-border").addClass("footer-border-sticked");
  } else {
    $(".footer-border").removeClass("footer-border-sticked");
  }
});

//Sticked Timeline bar
$(document).on('scroll', function(e) {

  var scroll = $(window).scrollTop() * 1.5,
    wheight = $(window).height();

  $('.linedown').css('height', '' + (scroll + wheight - 1250) + 'px');
});

(function getTheYear() {
var cursorX,
    cursorY,
    webDiv = document.getElementById("web");

  document.addEventListener("click", function(e) {
      cursorX = e.pageX - (webDiv.offsetLeft + (webDiv.offsetWidth / 2));
      cursorY = e.pageY - (webDiv.offsetTop + (webDiv.offsetHeight));
      webDiv.style.textShadow = "" + (-cursorX / 10) + "px " + (-cursorY / 10) + "px 0px #263238";
  });
})();

(function getTheYear() {
  var yearSpan = document.getElementById('year'),
    d = new Date(),
    y = d.getFullYear();
  yearSpan.innerHTML = y;
})();

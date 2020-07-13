var isFirst = true;

$(document).ready(function () {
  $(document).on('scroll', onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        'swing',
        function () {
          window.location.hash = target;
          $(document).on('scroll', onScroll);
        }
      );
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#main-navbar .nav-link').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#main-navbar .nav-link').removeClass('active');
      currLink.addClass('active');
    } else {
      currLink.removeClass('active');
    }
  });
}

$(function () {
  $(document).scroll(function () {
    var $nav = $('#main-navbar');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    var $scroll_indicator = $('#scroll-indicator');
    if ($(this).scrollTop() > $nav.height() && isFirst) {
      // $('.scroll-animation').css('display', 'none');
      // $('.scroll-animation').animate({opacity:'0'});
      $('#scroll-indicator').fadeOut(300);
      isFirst = false;
    }
  });
});

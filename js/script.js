$(document).ready(function () {

  //* vars
  // modal
  var MD = $(".modal")
  var MDOpenLog = $('.btn-log');
  var MDOpenReg = $('.btn-reg');
  var MDOpenAdm = $('.btn-adm');
  var MDClose = $('.modal-close');
  var RepeatPW = $("input[id='repeat-password']");
  // other
  var preloader = $(".preloader");
  var navLink = $(".nav__link");
  var burger = $(".header__burger");

  //? code

  setTimeout(function () {
    window.scrollTo(0, 0);
    if (!preloader.hasClass("done")) {
      preloader.addClass("done");
    }
  }, 1000);

  function scrollWidth() {
    var div = $('<div>').css({
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100px',
      height: '100px',
      visibility: 'hidden',
      overflow: 'scroll',
    });
    $('body').eq(0).append(div);
    var width = div.get(0).offsetWidth - div.get(0).clientWidth;
    div.remove();
    return width;
  }

  var scrollBarWidth = parseInt(scrollWidth());

  function hideScroll() {
    $("html, body").addClass("no-scroll");
    $(".site-container").css({
      'padding-right': scrollBarWidth + 'px',
    });
  }

  function showScroll() {
    $("html, body").removeClass("no-scroll");
    $('.site-container').css({
      'padding-right': 0 + 'px',
    });
  }

  function menu() {
    burger.click(function (e) {
      e.preventDefault();
      window.scrollTo(0, 0);
      $(this).toggleClass("active-burger");
      $(".burger-btn").toggle();
      if ($(window).width() <= '1200') {
        $(".header__nav").toggle();
      }
    });

    $(".nav__item, .burger-btn, .active-burger").click(function (e) {
      e.preventDefault();
      burger.removeClass("active-burger");
      if ($(window).width() <= '1200') {
        $(".header__nav").hide();
      }
    });
  }

  function customiseOption() {
    const elements = document.querySelectorAll('.select');
    elements.forEach(el => {
      const choices = new Choices(el, {
        noResultsText: 'No results found',
      });
    })
  }

  function setDate() {
    $('.calendar').datepicker({
      minDate: new Date(),
    });
  }

  function clickOutOfRange() {
    $(document).mouseup(function (e) {
      var modal = $('.modal-container');
      if (
        !modal.is(e.target) &&
        modal.has(e.target).length === 0
      ) {
        MD.fadeOut('400', function () {
          showScroll();
          $(".modal-form input").removeClass("error");
          $(".modal input[type!='submit']").val('');
          if (RepeatPW.attr('hidden', true)) {
          } else {
            RepeatPW.attr("hidden", false);
          }
        });
      }
    });
  }

  // form validate 

  function formValidate() {
    $('.modal-form').each(function () {
      $(this).validate({
        errorPlacement(error, element) {
          return true;
        },
        focusInvalid: false,
        rules: {
          mail: {
            required: true,
            email: true,
          },
          password: {
            required: true,
          },
          reppass: {
            required: true,
          },
          header: {
            required: true,
          },
          maintext: {
            required: true,
          }
        },
      });
    });
  }

  //* == modal open ==

  function openLogModal() {
    MDOpenLog.on('click', function () {
      formValidate();
      hideScroll();
      $('.modal-login').show();
      $('.modal-admin').hide();
      MD.fadeIn('400');
    });

    MDOpenReg.on('click', function () {
      formValidate();
      hideScroll();
      MD.fadeIn('400');
      $('.modal-login').show();
      $('.modal-admin').hide();
      RepeatPW.removeAttr("hidden");
    });

    MDOpenAdm.on('click', function () {
      formValidate();
      hideScroll();
      $('.modal-login').hide();
      $('.modal-admin').show();
      MD.fadeIn('400')
    })
  }

  function closeModal() {
    MDClose.on('click', function () {
      MD.fadeOut('400', function () {
        showScroll();
        $(".modal input[type!='submit']").val('');
        $(".modal-form input").removeClass("error");
        if (RepeatPW.attr('hidden', true)) {
        } else {
          RepeatPW.attr("hidden", false);
        }
      });
    });
  }

  //* scroll to top
  navLink.click(function (e) {
    e.preventDefault;
    navLink.removeClass('nav__link--selected');
    $(this).addClass('nav__link--selected');
    let href = $(this).attr('href');
    let offset = $(href).offset().top;
    $('html, body').animate({ scrollTop: offset }, 1000);
  });

  menu();
  setDate();
  clickOutOfRange();
  openLogModal();
  closeModal();
  customiseOption();
});
$(document).ready(function () {

  //* vars
  var nowDate = new Date(),
    // date
    month = nowDate.getMonth() + 1, // 0 соответствует январю, 1 — февралю и так далее.
    day = nowDate.getDate(),
    year = nowDate.getFullYear(),
    today = day + '.' + month + '.' + year,
    tomorrow = (day + 1) + '.' + month + '.' + year,
    afterTomorrow = (day + 2) + '.' + month + '.' + year,
    // modal
    MD = $(".modal"), /* MD - modal window */
    MDcont = $(".modal-container"),
    MDOpenLog = $('.modal-log'),
    MDOpenReg = $('.modal-reg'),
    MDClose = $('.modal-close'),
    mail = $("input[id='email']"),
    PW = $("input[id='password']"), /* PW - Password */
    RepeatPW = $("input[id='repeat-password']");

  //? code

  $('option[id="today"]').text(today);
  $('option[id="tomorrow"]').text(tomorrow);
  $('option[id="afterTomorrow"]').text(afterTomorrow);

  //* == modal open ==


  MDOpenLog.on('click', function () {
    MD.fadeIn('400');
  });

  MDOpenReg.on('click', function () {
    MD.fadeIn('400');
    RepeatPW.removeAttr("hidden");
  });

  //* == /modal open ==

  //? == modal close ==

  MDClose.on('click', function () {
    MD.fadeOut('400', function () {
      if (RepeatPW.attr('hidden', true)) {
      } else {
        RepeatPW.attr("hidden", false);
      }
    });
  });

  //? == /modal close ==




});


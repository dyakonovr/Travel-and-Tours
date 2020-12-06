$(document).ready(function () {

  //* vars
  var nowDate = new Date(),
    // date
    days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    day = days[nowDate.getDay()],
    month = nowDate.getMonth() + 1, // 0 соответствует январю, 1 — февралю и так далее.
    dateNow = nowDate.getDate(),
    year = nowDate.getFullYear(),
    today = days[nowDate.getDay()] + ',' + ' ' + dateNow + '.' + month + '.' + year,
    tomorrow = days[nowDate.getDay() + 1] + ',' + ' ' + (dateNow + 1) + '.' + month + '.' + year,
    afterTomorrow = days[nowDate.getDay() + 2] + ',' + ' ' + (dateNow + 2) + '.' + month + '.' + year,
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

  console.log(day);

  function setDate() {
    $('option[id="today"]').text(today);
    $('option[id="tomorrow"]').text(tomorrow);
    $('option[id="afterTomorrow"]').text(afterTomorrow);

    if (day < 10) {
      var day = '0' + day
    }
  }



  //* == modal open ==

  function openModal() {
    MDOpenLog.on('click', function () {
      MD.fadeIn('400');
    });

    MDOpenReg.on('click', function () {
      MD.fadeIn('400');
      RepeatPW.removeAttr("hidden");
    });
  }

  function closeModal() {
    MDClose.on('click', function () {
      MD.fadeOut('400', function () {
        if (RepeatPW.attr('hidden', true)) {
        } else {
          RepeatPW.attr("hidden", false);
        }
      });
    });
  }

  setDate();
  openModal();
  closeModal();
});


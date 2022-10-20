$(document).ready(function () {
 
  let NowMoment = moment().format("dddd MMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;
  
  function currentHour() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        if (blockHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
          $(this).addClass("present");
          $(this).removeClass("past");
          $(this).removeClass("future");
        }
        else {
          $(this).addClass("future");
          $(this).removeClass("present");
          $(this).removeClass("past");
        }
    })
}
currentHour();
})

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));

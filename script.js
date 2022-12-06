$(document).ready(function (){
  var today = dayjs();
$("#currentDay").text(today.format('dddd, MMMM DD, YYYY. h:mm a'));
$(".saveBtn").on("click", function(){
  console.log(this);
  var eventText = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, eventText);
  $(".saveEvent").addClass('show');

   setTimeout (function(){
    $(".saveEvent").removeClass('show')
   },3000)
   });
   

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

  
  function hourPlanner() {
    //get current number of hours.
    var currentHour = dayjs().hour(); 

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)

        //check if we've moved past this time, display css given classes of past, present, or future
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourPlanner(); //re-run function
  })
  


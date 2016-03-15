$(document).ready(function(){

  alarmTime = null;

  var i = setInterval(function() {
    console.log("Alarm: " + alarmTime);
    console.log("Current Time: " + moment().format('LT'));
    $('#time').text(moment());
      if(alarmTime === moment().format('LT')) {
        alert("Hey Wake Up Pal");
      }
  }, 1000);

  $('#submitAlarm').click(function(event){
    event.preventDefault();
    var alarm = $('#alarm').val()
    var hour = alarm.substring(11,13);
    var half = null;
    if(hour > 12) {
      hour -= 12;
      half = "PM";
    } else {
      half = "AM";
    }
    alarmTime = hour + ":" + alarm.substring(14,16) + " " + half;
    console.log("Alarm: " + alarmTime);
    $('#alarmContainer').prepend('<p> Your alarm is set for ' + alarmTime + '</p>');
  });
});

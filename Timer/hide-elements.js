$(document).ready(function() {
	var deadline = new Date();
	console.log('Now is '+ deadline);


  var deadline = new Date()
  deadline.setSeconds(deadline.getSeconds() + 15);
  initializeClock('clockdiv', deadline);

});

var clockIntervar;
var daysSpan;
var hoursSpan;
var minutesSpan;
var secondsSpan;

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateClock(){
  var t = getTimeRemaining(endtime);
  clock.innerHTML = 'days: ' + t.days + '<br>' +
                    'hours: '+ t.hours + '<br>' +
                    'minutes: ' + t.minutes + '<br>' +
                    'seconds: ' + t.seconds;
  if(t.total<=0){
    clearInterval(timeinterval);
  }
}



function initializeClock(id, endtime){
  var clock = document.getElementById(id);
    daysSpan = clock.querySelector('.days');
    hoursSpan = clock.querySelector('.hours');
	minutesSpan = clock.querySelector('.minutes');
	secondsSpan = clock.querySelector('.seconds');
  var timeinterval = clockIntervar = setInterval(function(){
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}


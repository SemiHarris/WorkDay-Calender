var time = [9,10,11,12,1,2,3,4,5];
var currentHour="";
var timeTextarea = [];

/*This will display Current Date*/
var displayCurrent = function() {
    var currentTime = moment().format("dddd, MMM Do YYYY, h:mm a");
    var currentDay = $("#currentDay");
    currentDay.text(currentTime);

    currentHour = moment().format("k");
     
    backgroundColor()
}

/*Update the time on the screen*/
setInterval(function(){
    displayCurrent() 

}, 1000);

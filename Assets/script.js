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

/*Display Work Hours*/
var displayWorkHour = function(){
    for (var i = 0; i < time.length; i++){

        var conatainer = $(".container")
        var timeBlock = $("<div class= 'row'>").appendTo(conatainer)

        if (time[i] <= 5){
            
            $("<P class='time-block col-1'>").text((time[i]) + 'PM').appendTo(timeBlock);
    
            $("<textarea class= 'col-10'>").addClass('timeText' + i).appendTo(timeBlock);
        
            $("<button class= 'saveBtn col-1'>").on( "click", function(){save()}).appendTo(timeBlock)
        }else if (time[i] == 12){

            $("<P class='time-block col-1'>").text((time[i]) + 'PM').appendTo(timeBlock);
    
            $("<textarea class= 'col-10'>").addClass('timeText' + i).appendTo(timeBlock);
        
            $("<button class= 'saveBtn col-1'>").on( "click", function(){save()}).appendTo(timeBlock)
        }else{

            $("<P class='time-block col-1'>").text(time[i] + 'AM').appendTo(timeBlock);
    
            $("<textarea class= 'col-10'>").addClass('timeText' + i).appendTo(timeBlock);

            $("<button class= 'saveBtn col-1'>").on( "click", function(){save()}).appendTo(timeBlock);
        }
    

    }
    $("<span class='oi oi-account-login'>").appendTo($('.saveBtn'))
    
    load()
    backgroundColor()
};

/*This adds 12 hours to the pm times*/
var backgroundTime = function(i) {
    if ((time[i] + 12) < currentHour){

        var timeText = $('.timeText' + i)
        timeText.removeClass('future present')
        timeText.addClass('past')
       }else if ((time[i] + 12) > currentHour){                     
        var timeText = $('.timeText' + i)
        timeText.removeClass('past present')
        timeText.addClass('future')
       }else{
        var timeText = $('.timeText' + i)
        timeText.removeClass('past future')
        timeText.addClass('present')    
       }   
} 

/*Adds background color to the textarea*/
var backgroundColor = function (){
    for ( var i = 0; i < time.length; i++){
       if (time[i] < 6){

        backgroundTime(i)      
        }else if (time[i] < currentHour){

        var timeText = $('.timeText' + i)
        timeText.removeClass('future present')
        timeText.addClass('past')

       }else if (time[i] > currentHour) {

        var timeText = $('.timeText' + i)
        timeText.removeClass('past present')
        timeText.addClass('future')

       }else{
        var timeText = $('.timeText' + i)
        timeText.removeClass('past future')
        timeText.addClass('present')

       }
    }
};

/*Saves the text to the local storage*/
var save = function(){
    timeTextarea = []

    for (var i = 0; i < time.length; i++){

        var timeText = $('.timeText' + i)
        .val()
        .trim();
    
        timeTextarea.push(timeText);
    }

    localStorage.setItem("timeTextarea", JSON.stringify(timeTextarea));
}

/*Load the saved text*/
var load = function(){
    timeTextarea = localStorage.getItem("timeTextarea");
    timeTextarea = JSON.parse(timeTextarea);

    
    if (!timeTextarea){
        save()
    }

    for (var i = 0; i < timeTextarea.length; i++){

        var textarea = $('.timeText' + i)
        var savedText = timeTextarea[i];

        $(textarea).text(savedText);

    }
}


displayCurrent()
displayWorkHour()
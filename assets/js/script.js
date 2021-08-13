var currentDayEl = document.getElementById('currentDay')
var hourEl = document.getElementById('hour-9');
var userInputEl = document.querySelector('.userinput');

// create our document ready function to make sure nothing runs before we load the page
$(document).ready(function () {

// function to listen for click events on page
function infoEntered(event) {
    // grab the saved event options
        // create variables to save user input and time 

    var userData = userInputEl
    var time = hourEl

    
    // save to localStorage
    localStorage.setItem('Todo', userData);
    localStorage.setItem('time', time);

    // alert the user that items have been saved to localStorage.
    var Hey = setTimeout(function() { alert("Your task has been saved!"); }, 3000);
    
    // create a timeOut value that removes the alert
    endAlert();
}


function endAlert () {
    clearTimeout(Hey);
}


// create time updater function()
function currentTime() {
    var update = moment().format('MMM DD YYYY [at] hh:mm:ss a');
    currentDayEl.text(update);



    // get the current time 

    // create our loop to go over all the time blocks
    
    // if else statment to
        //check to see if we have passed our time
            // check out removeClass and addClass
        // check to see if current hour matches physical hour

        // check to see if the time is in the future


}
setInterval (currentTime, 1000);


// Retrieve localStorage and render items to the correct rows




userInputEl.on('click', infoEntered)


})
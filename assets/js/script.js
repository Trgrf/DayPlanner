var hourEl = document.getElementById('hour-9');
var userInputEl = document.querySelector('.userinput');


// create our document ready function to make sure nothing runs before we load the page
$(document).ready(function () {
    $('.save-button').on('click', infoEntered)
// function to listen for click events on page
function infoEntered() {
    
    var task = $(this).siblings('.user-input').val().trim();
    var time = $(this).parent().attr('id');
    
    localStorage.setItem(time, task);
}

function hourColorize() {
    var currentHour = moment().hours()
    console.log(currentHour);
    $('.time-block').each(function (){
        var rowHour = parseInt($(this).attr('id').split('-')[1]);
        if (rowHour < currentHour) {
            $(this).children('.user-input').addClass('past')
        }
        else if (rowHour === currentHour) {
            $(this).children('.user-input').addClass('present');
            $(this).children('.user-input').removeClass('past');
        }
        else {
            $(this).children('.user-input').addClass('future')
            $(this).children('.user-input').removeClass('present')
            $(this).children('.user-input').removeClass('past')
        }
        console.log(rowHour);
    })
}
hourColorize();

$('#hour-9 .user-input').val(localStorage.getItem('hour-9'));
$('#hour-10 .user-input').val(localStorage.getItem('hour-10'));
$('#hour-11 .user-input').val(localStorage.getItem('hour-11'));
$('#hour-12 .user-input').val(localStorage.getItem('hour-12'));
$('#hour-13 .user-input').val(localStorage.getItem('hour-13'));
$('#hour-14 .user-input').val(localStorage.getItem('hour-14'));
$('#hour-15 .user-input').val(localStorage.getItem('hour-15'));
$('#hour-16 .user-input').val(localStorage.getItem('hour-16'));
$('#hour-17 .user-input').val(localStorage.getItem('hour-17'));



var update = moment().format('MMM DD YYYY');
$('#currentDay').text(update);

})
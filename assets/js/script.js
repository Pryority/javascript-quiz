var startButton = $( "a #start" );
var startContainer = $('div #start-quiz-wrapper')
var question = $('#question')
// var time = $('#time')


// 1. Display starting screen
$(document).ready(function(){
    // 2. User presses start quiz
    startContainer.on("click", "#start", function() {
        startContainer.addClass('invisible')
        question.removeClass('invisible')
        handleTimeUp();
        
        // 3. a) if user answers incorrectly, subract 5000 milliseconds from current time
        // 4. a) When the timer reaches zero, remove any question displayed on the screen.
        // 4. b) Display score and give user option to enter their initials for a high-score.
    });
})

// create a function handle time up and when all questions answered

var handleTimeUp = function() {
    var timeInterval = setInterval(function(){
        // 3. Timer starts counting down from 60 every second
        time.textContent -= 1
        
        if (time.textContent === "0") {
            console.log('time is up!')
            

            clearInterval(timeInterval);
            question.removeClass('invisible')
        }
    }, 10)
}
var startButton = $( "a #start" );
var startContainer = $('div #start-quiz-wrapper')
var question1 = $('#question1')
var score = $('div #score')
var correct = $('#correct-prompt')
var incorrect = $('#incorrect-prompt')


var handleTimeUp = function() {
    var timeInterval = setInterval(function(){
        // 3. Timer starts counting down from 60 every second
        time.textContent -= 1
        
        if (time.textContent === "0") {
            console.log('time is up!')
            

            clearInterval(timeInterval);
            question1.show()
        }
    }, 1000)
}

// 1. Display starting screen
$(function(){
    $('#correct-prompt').hide()
    $('#incorrect-prompt').hide()
    question1.hide()
    score.hide()

    // 2. User presses start quiz
    startContainer.on("click", "#start", function() {
        // Starting screen is hidden
        startContainer.hide()
        // First question becomes visible
        question1.show()
        question1.on('click', '#answer', function(){
            question1.hide()
        })
        // Function to handle end of game from time out
        handleTimeUp();
        
        // 3. a) if user answers incorrectly, subract 5000 milliseconds from current time
        // 4. a) When the timer reaches zero, remove any question displayed on the screen.
        // 4. b) Display score and give user option to enter their initials for a high-score.
    });
})

var startButton = $( "a #start-button" );
var startContainer = $('div #start-quiz-wrapper')


// 1. Display starting screen
// 2. User presses start quiz

// Start quiz and delete the start quiz container
startContainer.on("click", startButton, function() {
    startContainer.remove()
    setInterval(function(){
        time.textContent -= 1
    }, 1000)
});


// 3. Timer starts counting down from 60
// 3. a) if user answers incorrectly, subract 5000 milliseconds from current time
// 3. b) if user answers correctly, display the next question
// 4. When the timer reaches zero, remove any question displayed on the screen.
// 5. Display score and give user option to enter their initials for a high-score.
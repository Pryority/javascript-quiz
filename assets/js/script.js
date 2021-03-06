var startButton = $( "a #start" );
var startContainer = $('div #start-quiz-wrapper')
var endGame = $('div #end-game')
var question1 = $('#question1')
var question2 = $('#question2')
var question3 = $('#question3')
var question4 = $('#question4')
var question5 = $('#question5')
var score = $('div #score')
var correct = $('#correct-prompt')
var incorrect = $('#incorrect-prompt')
var highScore = $('high-score')
let timeInt = 1000;


// Add function that handles displaying the correct/incorrect prompt in a modal that lasts for a brif moment.

var handleTimeUp = function() {
    var timeInterval = setInterval(function(){
        // 3. Timer starts counting down from 60 every second
        time.textContent -= 1
        
        if (time.textContent <= "0") {
            console.log('time is up!')
            

            clearInterval(timeInterval);
            question1.hide()
            question2.hide()
            question3.hide()
            question4.hide()
            question5.hide()
            endGame.show()
        }
    }, timeInt)
}

// 1. Display starting screen
$(function(){
    $('#correct-prompt').hide()
    $('#incorrect-prompt').hide()
    question1.hide()
    question2.hide()
    question3.hide()
    question4.hide()
    question5.hide()
    score.hide()
    endGame.hide()

    // 2. User presses start quiz
    startContainer.on("click", "#start", function() {
        // Starting screen is hidden
        startContainer.hide()
        // First question becomes visible
        question1.show()
        question1.on('click', '#answer', function(){
            question1.hide()
            question2.show()
            question2.on('click', '#answer', function(){
                question2.hide()
                question3.show()
                question3.on('click', '#answer', function(){
                    question3.hide()
                    question4.show()
                    question4.on('click', '#answer', function(){
                        question4.hide()
                        question5.show()
                        question5.on('click', '#answer', function(){
                            question5.hide()
                        })
                    })
                    
                })
                
            })
            
        })
        
        // Function to handle end of game from time out
        handleTimeUp();
        
        // 3. a) if user answers incorrectly, subract 5000 milliseconds from current time
        // 4. a) When the timer reaches zero, remove any question displayed on the screen.
        // 4. b) Display score and give user option to enter their initials for a high-score.
    });

    endGame.on('click', '#restart', function(){
        time.textContent = "60"
        endGame.hide()
        startContainer.show()
    })
    endGame.on('click', '#enter', function appendText() {
        var txt1 = "<p>Text.</p>";        // Create text with HTML
        var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
        var txt3 = document.createElement("p");
        txt3.innerHTML = $('#username').text;         // Create text with DOM
        $("#high-score").append(txt1, txt2, txt3); })
})


// var appendInitials = function() {
//     var initials = $("<p></p>").text("Text.");
//     initials.innerHTML = "Text.";  
//     high.appendInitials(initials)
// }
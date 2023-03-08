var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  '“When I was just as far as I could walk From here today, There was an hour All still When leaning with my head against a flower I heard you talk. Don’t say I didn’t, for I heard you say— You spoke from that flower on the window sill— Do you remember what it was you said?” “First tell me what it was you thought you heard.” “Having found the flower and driven a bee away, I leaned my head, And holding by the stalk, I listened and I thought I caught the word— What was it? Did you call me by my name? Or did you say— Someone said ‘Come’— I heard it as I bowed.”  “I may have thought as much, but not aloud.” “Well, so I came.”';
var words = message.split(' ');

function countdown() {
  var timeLeft = 5;
  timerEl.textContent = "Time left: "+ 5;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft;
      if(timeLeft == -1){
        clearInterval(timeInterval);
        timerEl.textContent = " ";
        displayMessage();
      }
  }, 1000);
}

function displayMessage() {
  var wordCount = 0;
  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
      mainEl.textContent = " "
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 333);
}



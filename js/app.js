//Initial we set an empty array for starting the game 
let guesses = [];

//Declare at top the correct Number
let correctNumber = getRandomNumber();

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    showYouWon();
}

//Function playgame 
function playGame() {
    let guessNumber = document.getElementById("number-guess").value;
    displayResult(guessNumber);
    getGuessHistory(guessNumber);
    displayHistory();
}

//Function For Display Result 
function displayResult(guessNumber) {
    if (guessNumber > correctNumber) {
        showNumberAbove();
    } else if (guessNumber < correctNumber) {
        showNumberBelow();
    } else {
        showYouWon();
    }
}

//Function initgame for resetiing the all values
function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
}

//Function for all guess History
function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>";
    while (index >= 0) {
        list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>";
        index -= 1;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}


//Function for get random number
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;

}

//Function for guess History
function getGuessHistory(guess) {
    guesses.push(guess);
    console.log(guesses);
}

//Dialog function
function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

//Show Function If you Won
function showYouWon() {
    const text = "Hurrraaay You get It.";
    let dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
}


//Show Function If you guess above
function showNumberAbove() {
    const text = "Your Guess is too high!";
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}


//Show Function If you guess low
function showNumberBelow() {
    const text = "Your Guess is too low!";
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}
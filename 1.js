let randomNumber = parseInt(Math.random() * 100 + 1);

console.log(randomNumber);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too low.');
    } else if (guess > randomNumber) {
        displayMessage('Number is too high.');
    }
}

function displayGuess(guess) {
    userinput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userinput.value = '';
    userinput.setAttribute('disabled', 'disabled');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}


// Generates a random number between 1 and 100 and stores it in the variable randomNumber.

// Selects various HTML elements using their IDs or class names and stores them in corresponding variables.

// prevGuess: An array to store previous guesses.
// numGuess: The current number of guesses made.
// playGame: A boolean indicating whether the game is currently active.

// Adds an event listener to the submit button.
// When the button is clicked, it prevents the default form submission behavior.
// Reads the user's input, converts it to an integer, and calls the validateGuess function.

// Validation of User Guess:

// checkGuess: Compares the user's guess with the randomly generated number and updates the UI message accordingly.
// displayGuess: Updates the UI with the current guess.
// displayMessage: Displays messages in the UI (e.g., if the guess is correct, too low, or too high).

// endGame: Disables user input, adds a button to start a new game, and sets up for a new game.
// newGame: Resets variables and UI elements for a new game when the "Start New Game" button is clicked.
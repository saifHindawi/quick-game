let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

    checkButton.addEventListener("click", (e) => {
        e.preventDefault();
        const userGuess = parseInt(guessInput.value);
    
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = "Please enter a number between 1 and 100.";
            message.style.color = "red";
            return;
        }
    
        attempts++;

        if(attempts == 7){
            checkButton.disabled = true;
            message.textContent = "No More Attempts.";
            message.style.color = "red";
            return;
        }
        
        if (userGuess === secretNumber) {
            message.textContent = `Congratulations! You guessed it in ${attempts} attempts! 🎉`;
            message.style.color = "green";
            guessInput.disabled = true;
            checkButton.disabled = true;
        } else if (userGuess < secretNumber) {
            message.textContent = "Too low! Try again.";
            message.style.color = "orange";
        } else {
            message.textContent = "Too high! Try again.";
            message.style.color = "orange";
        }
    
        attemptsDisplay.textContent = `Attempts Rimaining: ${7 - attempts}`;
        attemptsDisplay.style.color = "white";
    });



resetButton.addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    attemptsDisplay.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    checkButton.disabled = false;
});

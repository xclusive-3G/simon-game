const buttons = document.querySelectorAll(".btn");
let currentButtonIndex = null; // checks the currently highlighted button index
let gameStarted = false; // checks whether the game has started
let level = 0; // set level to 0

// Function to get a random index that's not the current index
const getRandomIndex = (excludeIndex) => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * buttons.length);
    } while (randomIndex === excludeIndex);
    return randomIndex;
};

// Function to highlight a button briefly
const shadowButton = (index) => {
    currentButtonIndex = index; // Update the current button index
    buttons[index].classList.add("btn-shadow"); // Add shadow to the button

    // Remove shadow after 100ms
    setTimeout(() => {
        buttons[index].classList.remove("btn-shadow");
    }, 100);
};

// Function to reset the game
const resetGame = () => {
    gameStarted = false;
    currentButtonIndex = null;
    level = 0;
    document.querySelector('.header').innerHTML = "Game Over! ❌";
};

// Add click event listeners to each button
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (!gameStarted) {
            //code to start the game
            gameStarted = true;
            level = 1; // Start at level 1
            document.querySelector('.header').innerHTML = `Level ${level}`;
            shadowButton(index);
        } else if (index === currentButtonIndex) {
            level++; // Increase the level
            document.querySelector('.header').innerHTML = `Level ${level}`;
            const nextButtonIndex = getRandomIndex(currentButtonIndex); // Choose a random next button
            shadowButton(nextButtonIndex);
        } else {
            resetGame(); // Reset the game
        }
    });
});

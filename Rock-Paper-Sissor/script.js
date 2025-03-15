let userChoice;
let computerChoice;
let userCount = 0;  // Moved these variables outside of updateValue
let computerCount = 0;

const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        userChoice = choice.getAttribute('id');
        computerChoice = generateComputerChoise();
        showResult();
    });
});

generateComputerChoise = () => {
    const computerChoices = ['Rock', 'Paper', 'Scissor'];
    const index = Math.floor(Math.random() * 3);
    return computerChoices[index];
};

generateResult = () => {
    if (userChoice === computerChoice) {
        return null; // Return null for a draw
    }
    if (
        (userChoice === 'Rock' && computerChoice === 'Scissor') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        return true;  // User wins
    } else {
        return false; // Computer wins
    }
};

showResult = () => {
    const element = document.querySelector('.result');
    const userWin = generateResult();

    if (userWin === null) {
        element.innerText = `It's a Draw.`;
        element.style.backgroundColor = 'lightblue';
        element.style.border = '3px solid blue';
    } else if (userWin) {
        element.innerText = `You Won! ${userChoice} beats ${computerChoice}`;
        element.style.backgroundColor = 'lightgreen';
        element.style.border = '3px solid green';
        updateValue(userWin);
    } else {
        element.innerText = `You Lost. ${computerChoice} beats ${userChoice}`;
        element.style.backgroundColor = '#ffe4e1';
        element.style.border = '3px solid red';
        updateValue(userWin);
    }
};

updateValue = (userWin) => {
    if (userWin) {
        userCount++;
        document.querySelector('.user-score .score').innerText = userCount;
    } else {
        computerCount++;
        document.querySelector('.computer-score .score').innerText = computerCount;
    }
};
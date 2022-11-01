/* Imports */

/* Get DOM Elements */
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const answerP = document.getElementById('answer');

const answers = [
    'Yes, definitely',
    'It is decidely so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate harder and ask me again!',
    'Ask a friend instead',
    'No',
    'Probably not',
    'Ask a bug and listen for the answer in your thoughts',
];

function toggleSections() {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
}

submitBtn.addEventListener('click', () => {
    toggleSections();

    const randInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randInt];
    answerP.textContent = randomChoice;
});

resetBtn.addEventListener('click', toggleSections);

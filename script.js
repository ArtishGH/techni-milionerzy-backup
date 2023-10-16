const questionPools = {
    A: [
        {
            question: "Ile uczniów (około) w roku 2023 liczy Technischools w Warszawie?",
            options: ["120", "130", "140", "110"],
            correctAnswer: 1
        }
    ],
    B: [
        {
            question: "W jakiej lekturze szkolnej pojawia sie watek chlopomani?",
            options: ["Zemasta", "Dziady cz3", "Balladyna", "Wesele"],
            correctAnswer: 2
        }
    ],
    C: [
        {
            question: "W jakim roku powstal pierwszy komputer?",
            options: ["1946", "1976", "1940", "2021"],
            correctAnswer: 0
        }
    ],
    D: [
        {
            question: "W jakim frameworku webowym jest napisana strona technischools?",
            options: ["React", "Svelte", "Next", "View"],
            correctAnswer: 2
        }
    ]
};


let currentQuestionIndex = 0;
let selectedPool = null;

const poolSelectionButtons = document.querySelectorAll('.pool-selection');
poolSelectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedPool = button.dataset.pool;
        startGame();
        document.querySelector('.pool-selection-container').style.display = 'none';
    });
});

const questionElement = document.getElementById('question');
const optionButtons = document.getElementById('options');
const nextButton = document.getElementById('nextBtn');
const help = document.getElementById('help');

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion();
    document.querySelector('.container').style.display = 'block';
}

function showQuestion() {
    const currentQuestion = questionPools[selectedPool][currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionButtons.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        optionButtons.appendChild(button);
    });
    nextButton.classList.add('hide');
}

function selectOption(selectedIndex) {
    const currentQuestion = questionPools[selectedPool][currentQuestionIndex];
    const correctIndex = currentQuestion.correctAnswer;

    Array.from(optionButtons.children).forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add('correct');
        } else if (index === selectedIndex) {
            button.classList.add('wrong');
        }
    });

    
    
    console.log(currentQuestionIndex);

    if (selectedIndex === correctIndex) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = 'Koniec gry';
        nextButton.classList.remove('hide');
        nextButton.removeEventListener('click', showQuestion);
        nextButton.addEventListener('click', showGameOverScreen);
    }
}

function showGameOverScreen() {
    questionElement.innerText = 'Koniec gry';
    optionButtons.innerHTML = '';
    nextButton.classList.add('hide');
    help.classList.add('hide');


    const gameOverMessage = document.createElement('p');
    gameOverMessage.innerText = 'Dziękujemy za udział w grze';
    optionButtons.appendChild(gameOverMessage);
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionPools[selectedPool].length) {
        showQuestion();
    } 
    else {
        showGameOverScreen();
    }
});

const help5050 = document.getElementById('help5050');
const helpAudience = document.getElementById('helpAudience');
const helpPhone = document.getElementById('helpPhone');

help5050.addEventListener('click', () => {
    const currentQuestion = questionPools[selectedPool][currentQuestionIndex];
    const correctIndex = currentQuestion.correctAnswer;
    const wrongIndex = Math.floor(2);
    Array.from(optionButtons.children).forEach((button, index) => {
        if (index !== correctIndex && index !== wrongIndex) {
            button.disabled = true;
            button.classList.add('wrong');
        }
    });
    help5050.disabled = true;
    help5050.innerText = 'Wykorzystano';
});

helpAudience.addEventListener('click', () => {
    helpAudience.disabled = true;
    helpAudience.innerText = 'Wykorzystano';
    window.open('https://techni-milionerzy.vercel.app/qr');

});

helpPhone.addEventListener('click', () => {
    helpPhone.disabled = true;
    helpPhone.innerText = 'Wykorzystano';
    alert('30 sekund odliczane na tablicy');
});
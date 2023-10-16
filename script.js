const questionPools = {
    A: [
        {
            question: "Który z podanych uczniów w Technischools jest najstarszy?",
            options: ["Wiktor P. klasa 4", "Albert G. klasa 4", "Wiktoria W. klasa 4", "Gustaw P. klasa 4"],
            correctAnswer: 1
        },
        {
            question: "Ile wynosi obecna stawka VAT na podstawowe produkty spożywcze?",
            options: ["24%", "8%", "5%", "0%"],
            correctAnswer: 3
        },
        {
            question: "Jaki kolor powstanie ze zmieszania wszystkich kolorów światła?",
            options: ["Biały", "Czarny", "Brązowy", "Żółty"],
            correctAnswer: 0
        },
        {
            question: "Gdzie najczęściej można spotkać aparaty słuchowe telefoniczne samoinkasujące?",
            options: ["Na przystanku", "W sklepie", "W więzieniu", "W szkole"],
            correctAnswer: 2
        },
        {
            question: "Który z podanych youtuberów jest obecnie oskarżany o pedofilię?",
            options: ["Książulo", "Blowek", "Multi", "Stuu"],
            correctAnswer: 3
        },
        {
            question: "Jaki przedmiot ma najwięcej godzin w czasie całego cyklu nauki w szkole?",
            options: ["Polski", "Angielski", "Matematyka", "WF"],
            correctAnswer: 2
        },
        {
            question: "Jakim przedmiotem kiedyś robiono mało?",
            options: ["Maselniczka", "Maselnica", "Maślanka", "Masłownik"],
            correctAnswer: 1
        },
        {
            question: "Która liczba obchodzi swoje święto 14 marca?",
            options: ["Urojona", "Szatana", "Pi", "69"],
            correctAnswer: 2
        },
        {
            question: "Co Oles zawsze ma ze sobą na lekcji?",
            options: ["Drugie śniadanie", "Mundur", "Słodki napój gazowany", "Wodę"],
            correctAnswer: 2
        },
        {
            question: "Jaka przybliżona frekwencja w roku szkolnym 2023/2024 ma uczeń Mateusz Brzeziński?",
            options: ["75%", "50%", "25%", "0%"],
            correctAnswer: 3
        }
    ],
    B: [
        {
            question: "Z jakiego dziennika elektronicznego korzysta nasza szkoła?",
            options: ["Dzienniczek+", "Wulkan", "Librus", "Prymus"],
            correctAnswer: 2
        },
        {
            question: "Dokończ fragment ballady 'Świtezianka' A. Mickiewicza: 'Dochowaj, strzelcze, to moja rada: bo kto przysięgę naruszy, ach, biada jemu, za życia biada!...",
            options: ["Będzie ciągany za uszy!", "Szczerniały ząb mu się skruszy", "I biada jego złej duszy", "Kij będzie nosił kostuszy!"],
            correctAnswer: 2
        },
        {
            question: "Na jakiej z podanych matur nie można posiadać kalkulatora?",
            options: ["Informatyce", "Geografii", "Fizyce", "WOS"],
            correctAnswer: 0
        },
        {
            question: "Który z ptaków kuka?",
            options: ["Samica kulki", "Samiec kukułki", "Samiec gżegrzułki", "Samiec zazuli"],
            correctAnswer: 1
        },
        {
            question: "Ile około lat ma Ziemia?",
            options: ["2023 lata", "2 miliony lat", "4 miliardy lat", "5000 lat"],
            correctAnswer: 2
        },
        {
            question: "Ile mamy miesięcy w kalendarzu gregoriańskim?",
            options: ["13 miesięcy", "12 miesięcy", "11 miesięcy", "8 miesięcy"],
            correctAnswer: 1
        },
        {
            question: "Od czego jest skrót WHO?",
            options: ["World Humanity Organisation", "West Health Organisation", "West Humanity Organisation", "World Health Organisation"],
            correctAnswer: 3
        },
        {
            question: "Jaką godzinę powinny wskazywać sztućce po zakończonym posiłku?",
            options: ["15:00", "17:00", "20:00", "19:00"],
            correctAnswer: 1
        },
        {
            question: "Która liczba przypomina symbol zodiakalnego Raka?",
            options: ["69", "7", "13", "96"],
            correctAnswer: 0
        },
        {
            question: "Ile osób z obecnej klasy trzeciej miało poprawkę w sierpniu?",
            options: ["9", "5", "12", "7"],
            correctAnswer: 0
        }
    ],
    C: [
        {
            question: "Jaki adres ma Technischools w Lublinie?",
            options: ["Narutowicza 55a", "Narutowicza 55b", "Namysłowska 38a", "Namysłowska 55a"],
            correctAnswer: 1
        },
        {
            question: "W jakiej lekturze szkolnej pojawia się wątek chłopomani?",
            options: ["Zemsta", "Dziady 3", "Balladyna", "Wesele"],
            correctAnswer: 3
        },
        {
            question: "Jedno jajko gotuje się przez 2 minuty. Jasiu chce ugotować 12 jajek. Ile minut będzie potrzebował?",
            options: ["24 minuty", "12 minut", "4 minuty", "2 minuty"],
            correctAnswer: 3
        },
        {
            question: "Ile kosztuje chleb, który pierwotnie kosztował 10 złotych, następnie potaniał do 8 złotych, a później jego cena wzrosła o 20%?",
            options: ["8 złotych 20 groszy", "9 złotych 40 groszy", "9 złotych 60 groszy", "9 złotych 80 groszy"],
            correctAnswer: 2
        },
        {
            question: "Ile uczniów w roku 2023 liczy Technischools w Warszawie?",
            options: ["Około 120", "Około 130", "Około 140", "Około 110"],
            correctAnswer: 1
        },
        {
            question: "Ile odcinków prostych znajdziemy w rzymskiej cyfrze 50?",
            options: ["7", "2", "5", "1"],
            correctAnswer: 1
        },
        {
            question: "Najwięcej glukozy zużywa:",
            options: ["Mózg", "Serce", "Trzustka", "Wątroba"],
            correctAnswer: 0
        },
        {
            question: "Który kraj, poza Monako, ma flagę, która wygląda jak odwrócona do góry nogami flaga Polski?",
            options: ["Litwa", "Łotwa", "Egipt", "Indonezja"],
            correctAnswer: 3
        },
        {
            question: "Czym były biorące udział w pierwszej i drugiej wojnie światowej U-booty?",
            options: ["Szybowcami", "Bombowcami", "Okrętami", "Czołgami"],
            correctAnswer: 2
        },
        {
            question: "Która memiczna liczba jest związana z papieżem?",
            options: ["420", "69", "2137", "1337"],
            correctAnswer: 1
        }
    ],
    D: [
        {
            question: "Czym jest NaCl?",
            options: ["Mefedron", "Sól kuchenna", "Piasek", "Sodek chloru"],
            correctAnswer: 1
        },
        {
            question: "Jak nazywa się tytułowa bohaterka serialu, którą rolę grała Jenna Ortega?",
            options: ["Genny", "Alice", "Wednesday", "El (Eleven)"],
            correctAnswer: 2
        },
        {
            question: "Co w ruchu drogowym oznacza sześciokątny znak?",
            options: ["STOP", "Ustąp pierwszeństwa", "Zakaz zatrzymywania", "Droga główna"],
            correctAnswer: 1
        },
        {
            question: "Kuchenny synonim przekrętu to:",
            options: ["Wałek", "Tłuczek", "Dzban", "Blat"],
            correctAnswer: 0
        },
        {
            question: "Jakie danie uczniowie najbardziej lubią w kantynie?",
            options: ["Burger z szarpaną wieprzowiną", "Nuggetsy", "Kanapki", "Rosół"],
            correctAnswer: 0
        },
        {
            question: "Jaki znak interpunkcyjny stawiany po cyfrze arabskiej sprawia, że odczytujemy ją jako liczebnik porządkowy?",
            options: ["Przecinek", "Kropka", "Myślnik", "Średnik"],
            correctAnswer: 1
        },
        {
            question: "Która kość nie należy do kości czaszki?",
            options: ["Jarzmowa", "Potyliczna", "Skroniowa", "Promieniowa"],
            correctAnswer: 3
        },
        {
            question: "Ile stolic mają Chiny?",
            options: ["4", "3", "2", "1"],
            correctAnswer: 2
        },
        {
            question: "W którym roku powstał Discord szkolny?",
            options: ["2022", "2023", "2021", "Jeszcze nie powstał"],
            correctAnswer: 0
        },
        {
            question: "Która obecna klasa wygrała zeszłoroczny konkurs klas?",
            options: ["Klasa 3", "Klasa 4", "Klasa 2a", "Klasa 2b"],
            correctAnswer: 1
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
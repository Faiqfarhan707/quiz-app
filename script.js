const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b"
    },
    {
        question: "What is the largest ocean?",
        a: "Atlantic",
        b: "Indian",
        c: "Pacific",
        d: "Arctic",
        correct: "c"
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Mount Everest",
        c: "Mount Kilimanjaro",
        d: "Denali",
        correct: "b"
    },
    {
        question: "What is the primary language spoken in Spain?",
        a: "French",
        b: "Italian",
        c: "Portuguese",
        d: "Spanish",
        correct: "d"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Silver",
        c: "Diamond",
        d: "Iron",
        correct: "c"
          
    },
    {
        question: "What is the capital of the United States?",
        a: "Washington, D.C.",
        b: "New York",
        c: "Los Angeles",
        d: "Chicago",
        correct: "a"
    },
    {
        question: "What is the chemical symbol for water?",
        a: "O₂",
        b: "CO₂",
        c: "H₂O",
        d: "HO",
        correct: "c"
    },
    {
        question: "Which planet is closest to the Sun?",
        a: "Venus",
        b: " Earth",
        c: "Mars",
        d: "Mercury",
        correct: "d"
    },
    {
        question: "Who made this app?",
        a: "Faiq",
        b: "Ali",
        c: "Farhan",
        d: "Fahad",
        correct: "a"
    },
        
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answers = document.querySelectorAll('.answer');
    let answer = undefined;

    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.value;
        }
    });

    return answer;
}

function deselectAnswers() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
            deselectAnswers();
        } else {
            resultEl.innerHTML = `<h2>You scored ${score}/${quizData.length}</h2>`;
            submitBtn.style.display = 'none';
        }
    }
});

loadQuiz();

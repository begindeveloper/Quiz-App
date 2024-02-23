const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionELement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreElement = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex, score; 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0 // initialize the score
    scoreElement.innerText = score;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionELement.innerText = question.question
    question.answers.forEach(answer => { // Corrected property name "answers"
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild) // Corrected removal syntax
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        score += 10 // increase the score by 10 if the answer is correct
        scoreElement.innerText = score; // Update the displayed score
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach((button) =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide');
        score = 0; // Reset the score when the quiz is completed
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct", "wrong");
}


const questions = [{
    question: 'What is the highest-grossing holiday movie of all time?',
    answers: [
        {text:"It's a wonderful life", correct: false},
        {text:'Elf', correct: false},
        {text: 'Home Alone', correct: true},
        {text:'Die Hard', correct: false}
        ]
    },
    {
        question: 'What year did the Barbie movie with Margot Robbie premiere?',
        answers: [
            {text: '2023', correct: true},
            {text:'1985', correct: false},
            {text:'1998', correct: false},
            {text:'2005', correct: false}
        ]
    },
    {
        question: "What year did the movie, 'The Mummy' with Brendan Fraser premiere? ",
        answers: [
            {text:'2016', correct: false},
            {text:'2001', correct: false},
            {text:'1995', correct: false},
            {text: '1999', correct: true}
        ]
    },
    {
        question: 'What river passes through NewOrleans, Louisiana?',
            answers: [
                {text:'Atchafalaya River', correct: false},
                {text:'Orleans River', correct: false},
                {text:'Colorado River', correct: false},
                {text: 'Mississippi River', correct: true}
            ]
    },
    {
        question: 'Who made the third most 3-pointers in the playoffs in NBA history?',
        answers: [
            {text:'Kevin Durant', correct: false},
            {text:'JJ Reddick', correct: false},
            {text: 'Lebron James', correct: true},
            {text:'Kyle Korver', correct: false}
        ]
    },
    {
        question: 'What is the heaviest organ in the human body',
        answers: [
            {text:'Brain', correct: false},
            {text: 'Liver', correct: true},
            {text:'Heart', correct: false},
            {text:'Large Intestines', correct: false}
        ]
    },
    {
        question: 'What is the only food that cannot go bad?',
        answers: [
            {text:'Peanut Butter', correct: false},
            {text:'Canned Tuna', correct: false},
            {text: 'Honey', correct: true},
            {text:'Dark Chocolate', correct: false}
        ]
    },
    {
        question: 'How many infinity stones are there?',
            answers: [
                {text: '6', correct: true},
                {text:'5', correct: false},
                {text:'10', correct: false},
                {text:'7', correct: false}
            ]
    },
    {
        question: 'What planet is after Venus?',
        answers: [
            {text:'Pluto', correct: false},
            {text:'Mercury', correct: false},
            {text:'Mars', correct: false},
            {text: 'Earth', correct: true}
        ]
    },
    {
        question: 'What is 10^2?',
        answers: [
            {text:'10', correct: false},
            {text:'5', correct: false},
            {text: '100', correct: true},
            {text:'1000', correct: false}
        ]
    },
    {
        question: 'What element does the chemical symbol Au stand for?',
        answers: [
            {text: 'Gold', correct: true},
            {text:'Silver', correct: false},
            {text:'Carbon', correct: false},
            {text:'Salt', correct: false}
        ]
    }
];
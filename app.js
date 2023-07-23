const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionELement = document.getElementById('question')
const answerElement = document.getElementsById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionELement.innerText = question.question
    question.ansers.forEach(answer => {
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
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach((button) =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
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
    question: 'what year did the Barbie movie premiere?',
    answers: [
        {text: '2023', correct: true},
        {text:'1985', correct: false},
    ],

        question: 'what year did the Barbie movie premiere?',
        answers: [
            {text: '2023', correct: true},
            {text:'1985', correct: false},
        ],
            question: "What year did the movie, 'The Mummy' with Brendan Fraser premiere? ",
            answers: [
                {text: '1999', correct: true},
                {text:'2016', correct: false},
            ],
            question: 'What is 10^2?',
            answers: [
                {text: '100', correct: true},
                {text:'1000', correct: false},
            ],
            question: 'What planet is after Venus?',
            answers: [
                {text: 'Earth', correct: true},
                {text:'Mercury', correct: false},
            ],
            question: 'How many infinity stones are there?',
            answers: [
                {text: '6', correct: true},
                {text:'5', correct: false},
            ],
            question: 'What is the only food that cannot go bad?',
            answers: [
                {text: 'Honey', correct: true},
                {text:'Dark Chocolate', correct: false},
            ],
            question: 'What is the heaviest organ in the human body',
            answers: [
                {text: 'Liver', correct: true},
                {text:'Heart', correct: false},
            ],
            question: 'Who made the third most 3-pointers in the playoffs in NBA history?',
            answers: [
                {text: 'Lebron James', correct: true},
                {text:'Kevin Durant', correct: false},
            ],
            question: 'What element does the chemical symbol Au stand for?',
            answers: [
                {text: 'Gold', correct: true},
                {text:'Silver', correct: false},
            ],
            question: 'What river passes through NewOrleans, Louisiana?',
            answers: [
                {text: 'Mississippi River', correct: true},
                {text:'Atchafalaya River', correct: false},
            ]
}]
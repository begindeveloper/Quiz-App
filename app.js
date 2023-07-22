const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionELement = document.getElementById('question')
const answerElement = document.getElementsById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
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

function selectAnswer(e){
    
}

const questions = [{
    question: 'what year did the Barbie movie premiere?',
    answers: [
        {text: '2023', correct: true},
        {text:'1985', correct: false},
    ]
}]
const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

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
  
  function setNextQuestion() {
  
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  
  }
  
  function showQuestion(question) {
  
    questionElement.innerText = question.question
  
    question.answers.forEach(answer => {
  
      const button = document.createElement('button')

      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
  
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
  
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
  
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  
  const questions = [
  
    {
      question: 'Who invented JavaScript?',
      answers: [
        { text: 'Bill Gates', correct: false },
        { text: 'Steve Jobs', correct: false },
        { text: 'Brendan Eich', correct: true },
        { text: 'Richard Branson', correct: false }
      ]
    },
  
    {
      question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
      answers: [
        { text: 'document.getElementById("demo").innerHTML = "Hello World!";', correct: true },
        { text: '#demo.innerHTML = "Hello World!";', correct: false },
        { text: 'document.getElementByName("p").innerHTML = "Hello World!";', correct: false },
        { text: 'document.getElement("p").innerHTML = "Hello World!:;', correct: false }
      ]
    },
  
    {
      question: 'What is the correct syntax for referring to an external script called "xy.js"?',
      answers: [
        { text: '<script href="xy.js">', correct: false },
        { text: '<script name="xy.js">', correct: false },
        { text: '<script src ="xy.js">', correct: true },
        { text: '<script id ="xy.js">', correct: false }
      ]
    },
  
    {
      question: 'The external script requires the use of the <script> tags',
      answers: [
        { text: 'True', correct: false },
        { text: 'False', correct: true }
      ]
    }
  ]

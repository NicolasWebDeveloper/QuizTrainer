//Variables
const question = document.getElementById("question");
const domAnswer1 = document.getElementById("answer-1");
const domAnswer2 = document.getElementById("answer-2");
const domCurrentQuestion = document.getElementById("currentQuestion");
const domMaxQuestion = document.getElementById("maxQuestions");

//Question Constructor
function CreateQuestion(question, answerOne, answerTwo, rightAnswer) {
  this.question = question;
  this.answerOne = answerOne;
  this.answerTwo = answerTwo;
  this.rightAnswer = rightAnswer;
}

//Create Question Array and push Objects inside
let questions = [];
questions.push(new CreateQuestion("What is 1 + 1?", "1", "2", "2"));
questions.push(new CreateQuestion("What is 2 + 2?", "2", "4", "4"));
questions.push(new CreateQuestion("What is 4 + 2?", "4", "6", "6"));

//Programm start
let currentQuestion = 0;
let maxQuestions = questions.length;
updateStats();
loadQuestion(currentQuestion);

//Forward and Back Button Handler
document.getElementById("forwardButton").addEventListener("click", function() {
  goForward();
});

document.getElementById("backButton").addEventListener("click", function() {
  goBackwards();
});

function goForward() {
  if (currentQuestion === questions.length - 1) { return };
  $(".main-box").fadeToggle(400).fadeToggle(400);
  currentQuestion++;
  updateStats();
  loadQuestion(currentQuestion);
}

function goBackwards() {
  if (currentQuestion === 0) { return };
  $(".main-box").fadeToggle(400).fadeToggle(400);
  currentQuestion--;
  updateStats();
  loadQuestion(currentQuestion);
}

//Update Question Count on bottom
function updateStats() {
  domCurrentQuestion.innerText = currentQuestion + 1;
  domMaxQuestion.innerText = maxQuestions;
}

//Load new Question from Object
function loadQuestion(number) {
  question.innerText = questions[currentQuestion].question;
  domAnswer1.innerText = questions[currentQuestion].answerOne;
  domAnswer2.innerText = questions[currentQuestion].answerTwo;
}

//Handle answer
let buttons = document.querySelectorAll(".answer");
for (i = 0; i< buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (questions[currentQuestion].rightAnswer === this.innerText) {
      this.classList.toggle("green");
      let clickedButton = this;
      showCongratulation();
      setTimeout(function() {
        clickedButton.classList.toggle("green");
        goForward();
      }, 2000)
    } else {
      this.classList.toggle("red");
      let clickedButton = this;
      setTimeout(function() {
        clickedButton.classList.toggle("red");
      }, 200)
    }
  })
}

//Show congratulations
function showCongratulation() {
  setTimeout(function() {
    document.getElementById("congratulation-box").classList.toggle("visible");
    document.querySelector("title").innerText = "Nice!"
    setTimeout(function() {
      document.querySelector("title").innerText = "Your Answer ist correct!"
    }, 500)
  }, 500)
  setTimeout(function() {
    document.getElementById("congratulation-box").classList.toggle("visible");
    document.querySelector("title").innerText = "Quiz Trainer"
  }, 1900)
}

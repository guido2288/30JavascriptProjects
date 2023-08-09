const questions = [
  {
    question: "What year was JavaScript born?",
    aswers: [
      { text: "1996", correct: false },
      { text: "1995", correct: true },
      { text: "1997", correct: false },
      { text: "1998", correct: false },
    ]
  },
  {
    question: "What is the browser that created JavaScript?",
    aswers: [
      { text: "Mozilla", correct: false },
      { text: "Mosaic", correct: false },
      { text: "Netscape", correct: false },
      { text: "Mocha", correct: true },
    ]
  },
  {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    aswers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ]
  },
  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    aswers: [
      { text: "getElementbyId()", correct: false },
      { text: "getElementbyClassName()", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ]
  },
  {
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    aswers: [
      { text: "Throws an error", correct: false },
      { text: "Ignores the statements", correct: true },
      { text: "Gives a warning", correct: false },
      { text: "None of the above", correct: false },
    ]
  },
  {
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    aswers: [
      { text: "document.write()", correct: false },
      { text: "console.log()", correct: false },
      { text: "window.alert()", correct: false },
      { text: "All of the above", correct: true },
    ]
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    aswers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false },
    ]
  },
  {
    question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
    aswers: [
      { text: "Both the datatype and the result of the expression are compared", correct: true },
      { text: "Only the datatype of the expression is compared", correct: false },
      { text: "Only the value of the expression is compared", correct: false },
      { text: "None of the above", correct: false },
    ]
  },
  {
    question: "What keyword is used to check whether a given property is valid or not?",
    aswers: [
      { text: "in", correct: true },
      { text: "is in", correct: false },
      { text: "exists", correct: false },
      { text: "lies", correct: false },
    ]
  },
  {
    question: "What is the use of the noscript tag in Javascript?",
    aswers: [
      { text: "The contents are displayed by non-JS-based browsers", correct: true },
      { text: "Clears all cookies and cache", correct: false },
      { text: "Both A and B", correct: false },
      { text: "None of the above", correct: false },
    ]
  },
];

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.aswers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;

    }
    button.addEventListener('click', selectAnswer);
  })
};

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
};

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct")
    score++;
  } else {
    selectBtn.classList.add("incorrect")
  }
  Array.from(answerBtns.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextBtn.style.display = "block";
};

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
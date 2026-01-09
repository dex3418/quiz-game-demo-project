let quizData = [
  {
    question: "What does DOM stand for?",
    a: "Data Object Model",
    b: "Document Object Model",
    c: "Digital Object Method",
    d: "Document Oriented Method",
    correct: "b"
  },
  {
    question: "Which language is used for DOM manipulation?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "Python",
    correct: "c"
  },
  {
    question: "Which method is used to select an element by ID?",
    a: "getElementByClass",
    b: "querySelectorAll",
    c: "getElementById",
    d: "getElements",
    correct: "c"
  },
  {
    question: "Which DOM method adds an event to an element?",
    a: "addEvent",
    b: "onClick",
    c: "addEventListener",
    d: "attachEvent",
    correct: "c"
  },
  {
    question: "Which property is used to change text inside an element?",
    a: "innerHTML",
    b: "innerText",
    c: "textContent",
    d: "All of the above",
    correct: "d"
  },
  {
    question: "Which method creates a new HTML element?",
    a: "createNode",
    b: "newElement",
    c: "createElement",
    d: "appendElement",
    correct: "c"
  },
  {
    question: "Which method removes an element from DOM?",
    a: "delete()",
    b: "remove()",
    c: "removeChild()",
    d: "Both b and c",
    correct: "d"
  },
  {
    question: "Which selector returns ALL matching elements?",
    a: "querySelector",
    b: "getElementById",
    c: "querySelectorAll",
    d: "getElement",
    correct: "c"
  },
  {
    question: "What is the root node of DOM?",
    a: "html",
    b: "body",
    c: "document",
    d: "window",
    correct: "c"
  },
  {
    question: "Which DOM property is used to change CSS style?",
    a: "class",
    b: "style",
    c: "css",
    d: "design",
    correct: "b"
  }
];


// DOM selection
let questionEl = document.getElementById("question");
let optA = document.getElementById("optA");
let optB = document.getElementById("optB");
let optC = document.getElementById("optC");
let optD = document.getElementById("optD");
let submitBtn = document.getElementById("submitBtn");
let resultEl = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

// Load question
function loadQuiz() {
  let currentQuiz = quizData[currentQuestion];
  questionEl.innerText = currentQuiz.question;
  optA.innerText = currentQuiz.a;
  optB.innerText = currentQuiz.b;
  optC.innerText = currentQuiz.c;
  optD.innerText = currentQuiz.d;
}

loadQuiz();

// Submit event
submitBtn.addEventListener("click", function () {
  let selectedAnswer;

  let answers = document.querySelectorAll("input[name='answer']");
  answers.forEach((answer) => {
    if (answer.checked) {
      selectedAnswer = answer.value;
      answer.checked = false;
    }
  });

  if (selectedAnswer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    questionEl.innerText = "Quiz Completed!";
    document.querySelector(".options").style.display = "none";
    submitBtn.style.display = "none";
    resultEl.innerText = "Your Score: " + score + "/" + quizData.length;
  }
});

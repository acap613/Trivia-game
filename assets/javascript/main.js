// const variables based on divs we created in HTML
const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImg");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A"); //(ref.html.23)
const choiceB = document.getElementById("B"); //(ref.html.24)
const choiceC = document.getElementById("C"); //(ref.html.25)
const choiceD = document.getElementById("D"); //(ref.html.26)

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");
//question array, (ref.js.14-17)
let questions = [
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },
    {
        question : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "",
        imgSrc : "",
    },

    
]

//end array

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = "<img src= ' + q.imgSrc + '>";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    runningQuestionIndex = 0;
    renderQuestion()
    runningQuestionIndex++;
    renderQuestion()

}

function progressRender() {
    for (let i = 0; i <= lastQuestionIndex; i++) {
        progress.innerHTML += "<div class='prog' id=' + i + '></div>";
    }
}

function answerCorrect() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}

function answerWrong() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

//the timer counter
const questionTime = 10; // 10 secs for each question
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;

function counterRender() {
    if ( count <= questiontime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px" ;
        count++;
    } else {
        count = 0;
        answerWrong();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
        }
    }
}



let score = 0;

function checkAmswer(answer) {
    if (questions[runningQuestionIndex].correct === answer) {
        score++;
        answerCorrect();
    } else {
        answerWrong();
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
    }
}

start.addEventListener('click', startQuiz); //(ref.js.2) 
 
let TIMER;

function startQuiz() {
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender, 1000);
    progressRender(); //(ref.js.148)
    renderQuestion(); //(ref.js.132)
    quiz.style.display = "block";
}
 
function scoreRender() {
    scoreContainer.style.display = "block";
    let scorePerCent = Math.round(100 * score/questions.length);
    let img = (scorePerCent >= 80) ? "img/5.png":
              (scorePerCent >= 60) ? "img/4.png":
              (scorePerCent >= 40) ? "img/3.png":
              (scorePerCent >= 20) ? "img/2.png": "img/1.png";

    scoreContainer.innerHTML = "<img src=' + img + '><p>" + scorePerCent + "%</p>";
}
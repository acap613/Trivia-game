<<<<<<< HEAD
// select all elements
const start = document.getElementById("start");//start button
const quiz = document.getElementById("quiz"); //quiz container
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What game did Mario first apper in?",
        
        choiceA : "Donkey Kong",
        choiceB : "Super Mario Bros.",
        choiceC : "Mario Kart",
        choiceD : "Tetris",
        correct : "A"
    },
    {
        question : "What series was largely responsible for intrducing the RPG genre to console owners?",
        
        choiceA : "Breath of Fire",
        choiceB : "Castlevania",
        choiceC : "Final Fantasy",
        choiceD : "Tony Hawk",
        correct : "C"
    },
    {
        question : "What console system did the original Legend of Zelda release on?",
        
        choiceA : "Gameboy",
        choiceB : "NES",
        choiceC : "Atari",
        choiceD : "SNES",
        correct : "B"
    },
    {
        question : "What year did the Sega Genesis launch in North America?",
        
        choiceA : "1991",
        choiceB : "1989",
        choiceC : "1995",
        choiceD : "1985",
        correct : "B"
    },
    {
        question : "What does NES stand for?",
        
        choiceA : "Nintendo Electric Services",
        choiceB : "Nintendo Entertainment System",
        choiceC : "Nintendo's Elite Satellite",
        choiceD : "Never Enough Stuff",
        correct : "B"
    },
    {
        question : "What company did Steve Jobs work for before he co-founded Apple Computers?",
        
        choiceA : "Nintendo",
        choiceB : "NASA",
        choiceC : "Atari",
        choiceD : "IBM",
        correct : "C"
    },
    {
        question : "Which Character is NOT a Nintendo Character? ",
        
        choiceA : "Mario",
        choiceB : "Zelda",
        choiceC : "Pikachu",
        choiceD : "Sonic",
        correct : "D"
    },
    {

        question : "Which arcade hit was notoriously censored before coming to console systems in the 90s?",
        
        choiceA : "Street Fighter",
        choiceB : "Mortal Kombat",
        choiceC : "Final Fight",
        choiceD : "The Simpsons",
        correct : "B"
    },
    {
        question : "How many shapes are there in Tetris?",
       
        choiceA : "5",
        choiceB : "6",
        choiceC : "7",
        choiceD : "9",
        correct : "C"
    },
    {
        question : "World of Warcraft is defined as what kind of game?",
        
        choiceA : "MMORPG",
        choiceB : "MOBA",
        choiceC : "RTS",
        choiceD : "Sandbox",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 8; 
const gaugeWidth = 200; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

        question.innerHTML = "<p>"+ q.question +"</p>"; //(ref.css.79)
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

// render progress
function renderProgress(){
    for (let i = 0; i <= lastQuestion; i++){
        progress.innerHTML += "<div class='prog' id="+ i +"></div>"; //this should add the next question, but I want to incorporate the shuffle
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";//want to animate for smoother look
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }//still need to fix the appearance of the sscore showing.
    }
}

// checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
 
      
    
    scoreDiv.innerHTML =  scorePerCent +"%</p>";
}
=======
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
>>>>>>> 0c5396876a854a474df019c8bab1aa4014aa0be9

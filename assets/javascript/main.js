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
        gif: "<img src='../../assets/images.DK.gif'>",
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

//Global Variables
const start = document.getElementById('start');
const timeEl = document.getElementById('time');
const startScreen = document.getElementById('start-screen');
const questionsDiv = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices');
const feedbackDiv = document.getElementById('feedback');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const initials = document.getElementById('initials');
const submit = document.getElementById('submit');
let questionsArray = [];
let item;
let questNum;
let count = 0;
let random;
let answerArray = [];
let randomAnswers = [];
let correct;
let text;
let score = 0;
let time = 75;
let complete = false;
const user = {name: "",
            score: 0           
};
let stringified;
let stringVersion;

function initialise (){
    count=0;
    answerArray = [];
    randomAnswers = [];
    score=0;
    time = 75;
    complete = false;
};

//Randomise the question order
function randomise (arr){
    questionArray = [];
    while(questionsArray.length < arr.length){
        item = Math.floor(Math.random()*arr.length);
        if (!questionsArray.includes(item)){
            questionsArray.push(item);
        } else {
            item;
        };
    };
};

function nextQuestion (arr) {
    questionsDiv.style.display = 'block';

     if(count < arr.length){
        questNum = arr[count];
        count++;
       currentQuestion(questions[questNum]);     
    } else {
        complete = true;
        quizScore();
        return;
    };
};

function currentQuestion (question){
    //Set questions
    answerArray=[];
    randomAnswers =[];
    questionChoices.innerHTML="";
    answerArray = question.incorrect;
    answerArray.push(question.answer);
    questionTitle.innerText = question.question;
    correct = question.answer;
    
    //Randomise question order
    while(randomAnswers.length < answerArray.length){
        random = Math.floor(Math.random()*answerArray.length);
        if (!randomAnswers.includes(random)){
            randomAnswers.push(random);

            //Render answer buttons
            let answerBtn = document.createElement('button');
            answerBtn.innerText = answerArray[random];
            let text = answerBtn.innerText;
            answerBtn.addEventListener('click', ()=>{
                switch (text === correct) {
                    case true:
                        score++;
                        break;
                    default:
                        if ((time-10)>0){
                            time-= 10;
                        } else {
                            quizScore();
                            return;
                        };
                        break;
                };
                feedback(text);
                nextQuestion(questionsArray);
            });
            questionChoices.append(answerBtn);
        } else {
            random;
        };
    };
};

function feedback (string) {
    feedbackDiv.style.display = 'block';
    if (string===correct){
        feedbackDiv.innerHTML = 'Correct!';
         audio('correct');
    } else {
        feedbackDiv.innerHTML = 'Wrong!';
        audio('incorrect');
    }
    let feedbackTimer = setTimeout(()=>{feedbackDiv.style.display = 'none';}, 1500);
};

function audio (sound){
    let audioEl = document.createElement('audio');
    audioEl.setAttribute('autoplay', 'true');
    
    const quizSound = document.createElement('source');
    quizSound.setAttribute('src', `./assets/sfx/${sound}.wav`);
    audioEl.appendChild(quizSound);

    audioEl.play();
};

function timer () {
    timeEl.innerHTML = time;
    time--;
};

function quizScore () {
    complete = true;
    finalScore.innerText = score;
    questionsDiv.style.display = 'none';
    endScreen.style.display = 'block';
};

function localInfo () {
    if (!localStorage.getItem('userArray')){
        let userArray =[];
        stringVersion = JSON.stringify(userArray);
        localStorage.setItem('userArray',stringVersion);
    };

    let localArray = localStorage.getItem('userArray');
    userArray = JSON.parse(localArray);
    userArray.push(user);
    stringVersion = JSON.stringify(userArray);
    localStorage.setItem('userArray',stringVersion);
    
};

start.addEventListener('click', (e)=>{
    e.preventDefault;
    startScreen.style.display = "none";
    randomise(questions);
    nextQuestion(questionsArray);
    const timeInterval = setInterval(()=>{if(time>=0 &&!complete){timer();}else{clearInterval(timeInterval); quizScore();}}, 1000);  
   
});

 submit.addEventListener('click', (e)=>{
    e.preventDefault;
    user.name = initials.value;
    user.score = score;
    stringified=JSON.stringify(user);
    localInfo();
    localStorage.setItem('user', stringified);
    window.open('./highscores.html', target='_self');
 });

const body = document.querySelector('body');
body.setAttribute('style', 'background-image: none');
const localArray = localStorage.getItem('userArray');
let userArray;
const olEl = document.getElementById('highscores');
let liEl = document.createElement('li');
const clear = document.getElementById('clear');
let liArray =[];
let topTen;

function localArrayInfo() {
    if (localArray){
        userArray = JSON.parse(localArray);
        userArray.sort((a,b)=>{return b.score-a.score});
        topTen = userArray.length>10 ? 10 : userArray.length;
        for(let i=0; i<topTen; i++){
            liAppend(userArray[i]);
        };   
    };
};

function liAppend (item) {
        let liText = `${item.name} - ${item.score}`;
         liEl = document.createElement('li');
        liEl.innerHTML=liText;
        liArray.push(liEl);
        olEl.append(liEl);
};

function clearHighScore () {
    localStorage.setItem('userArray','');
    for (let i=0; i<liArray.length; i++){
        liArray[i].style.display = 'none';
    };
};

clear.addEventListener('click', ()=>{clearHighScore()});

localArrayInfo();



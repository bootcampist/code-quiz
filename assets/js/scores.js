const localUser = localStorage.getItem('user');
const localArray = localStorage.getItem('userArray');
let user;
let userArray;
const olEl = document.getElementById('highscores');
let liEl = document.createElement('li');
const clear = document.getElementById('clear');
let liArray =[];

function localArrayInfo() {
    if (localArray){
        userArray = JSON.parse(localArray);
        userArray.sort((a,b)=>{return b.score-a.score});
        for(let i=0; i<userArray.length; i++){
            liAppend(userArray[i]);
        };   
    };
}

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

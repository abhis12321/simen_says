let body = document.querySelector("body");
let start = document.querySelector(".start");
let quit = document.querySelector(".reset");
let scoreT = document.querySelector(".score");
let levelT = document.querySelector(".level");
let boxes = document.querySelectorAll(".box");

let level = 0;
let userData = [];
let randomData = [];
let levelchecker = 0;
let isStarted = false;
let bxs = ["red" , "green" , "yellow" , "voilet"];




function startGame(event) {
    if(!isStarted) {
        level = 0;
        userData = [];
        randomData = [];
        levelchecker = 0; 
        levelT.innerHTML = `Level : 0`
        scoreT.innerHTML = `Score : 0`  
        levelUp();
        isStarted = true;
    }
}
function reset() {
    level = 0;
    userData = [];
    randomData = [];
    levelchecker = 0;
    isStarted = false;  
    levelT.innerHTML = `Level : 0`
    scoreT.innerHTML = `Score : 0`  
}
function randomFlash(box) {
    box.classList.add('random-flash');
    setTimeout(() => {
        box.classList.remove('random-flash');
    }  , 200);
}
function userFlash(box){
    box.classList.add('user-flash');
    setTimeout(() => {
        box.classList.remove('user-flash');
    }  , 200);    
}
function handleClick(event) {
    if(isStarted) {
        userFlash(event.target);
        let color = event.target.getAttribute("id");
        if(color === randomData[levelchecker]) {
            userData.push(color);
            levelchecker++;
            if(level === levelchecker) {
                levelT.innerHTML = `Level : <b>${level}</b>`
                scoreT.innerHTML = `score : <b>${level*5}</b>`
                setTimeout(levelUp , 200);
            }
        }
        else {
            userFlash(body);
            console.log("reset");
            scoreT.innerHTML = `Game over!! Your score : <b>${level*5}</b>`
            isStarted = false;
        }
    
    }
    // console.log(userData , randomData)
}
function  levelUp (){
    let id = Math.floor(Math.random() * 4);
    let box = document.querySelector(`.${bxs[id]}`);
    randomFlash(box);
    randomData.push(bxs[id]);
    levelchecker = 0;
    level++;
}






for(box of boxes) {
    box.addEventListener('click' , handleClick);
}
start.addEventListener('click' , startGame);
quit.addEventListener('click' , reset);
const putNumber = document.querySelector("#put-number");
const myNumber = document.querySelector("#My-number");
const submit = document.querySelector("#submit-number");
const div = document.querySelector("div");
const result = document.querySelector("h5");
const winOrNot = document.querySelector("#h5");

function getPutNumber(event){
    event.preventDefault();
    const defaultNum = putNumber.value;
    const guessNum = myNumber.value;
    ChangedDefaultNum = parseInt(defaultNum);
    ChangedGuessNum = parseInt(guessNum);
    playGame(ChangedDefaultNum,ChangedGuessNum);
};

function playGame(DefaultValue,ChoseValue){   
    const Default = DefaultValue;
    const GameValue = ChoseValue;
    const newNum =  Math.ceil(Math.random() * Default);
    if(isNaN(Default)){
        alert("Write Down your Default Value")
    }else if(Default === GameValue){
        alert("Each keys should be different!");
    }else if(Default < GameValue){
        alert("write smaller number");
    }else{
        paintResult(newNum, GameValue);
    }
};

function paintResult(randomNum, GameNum){
    result.innerText = `You chose : ${GameNum}, the machine chose : ${randomNum}`
    if(randomNum === GameNum){
        winOrNot.innerText = "You Win!";
    }else{
        winOrNot.innerText = "You Lose!";
    }
};

submit.addEventListener("click",getPutNumber);

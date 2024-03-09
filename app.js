let operators = ["+" , "-" , "*" ];
const startBtn = document.getElementById('start-btn');
const question  = document.getElementById("questions");
const controls = document.querySelector(".controls-container");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-msg");
let answerValue;
let operatorQuestion;

//random value generator
const randomValue = (min,max) =>{
   Math.floor(Math.random()*(max-min)) + min;
}

const questionGenerator = ()=>{
    //two random values between 1 and 20
    let [num1,num2] = [randomValue(1,20) , randomValue(1,20)];
}
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
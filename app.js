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
   return Math.floor(Math.random()*(max-min)) + min;
}

const questionGenerator = ()=>{
    //two random values between 1 and 20
    let [num1,num2] = [randomValue(1,20) , randomValue(1,20)];

    //for  getting random operator
    let randomOperator = operators[Math.floor(Math.random() * operators.length)];

    if(randomOperator == "-" && num2 > num1){
        [num1,num2] = [num2,num1];
    }

    //solve equation
    let solution = eval(`${num1}${randomOperator}${num2}`);
    // console.log(num1,randomOperator,num2,solution);

    //for placing the input at random position
    //(1 for num1 , 2 for num2 , 3 for operator , anything else(4) for solution)
    let radomVar = randomValue(1,5);
    
    if(radomVar == 1){
        answerValue = num1;
        question.innerHTML = `<input type="number" id="inputValue" placeholder="?" \>${randomOperator}${num2} = ${solution}`;
    }

    else if(radomVar == 2){
        answerValue = num2;
        question.innerHTML = `${num1}${randomOperator}<input type="number" id="inputValue" placeholder="?" \>  = ${solution}`;
    }
    else if(radomVar == 3){
        answerValue = randomOperator;
        operatorQuestion = true;
        question.innerHTML = `${num1}<input type="text" id="inputValue" placeholder="?" \>${num2}  = ${solution}`;
    }
    else{
        answerValue = solution;
        question.innerHTML = `${num1}${randomOperator}${num2}  = <input type="number" id="inputValue" placeholder="?" \>`;

    }

    submitBtn.addEventListener('click',()=>{
        errorMessage.classList.add("hide");
        let userInput = document.getElementById('inputValue').value;
        console.log(userInput);
        //if user input is not empty
        if(userInput){
            //if the user guessed correct answer
            if(userInput==answerValue){
                stopGame(`Yippie!! <span>Correctly</span>Answer`)
            }
            //if user inputs operator other than + , - , *
            else if(operatorQuestion && !operators.includes(userInput)){
                errorMessage.classList.remove("hide");
                errorMessage.innerHTML = "Please enter a valid operator";
            }
            //if user guessed wrong answer 
            else{
                stopGame(`opps!!<span>wrong</span>Answer`);
            }
        }
        //if user input is empty
        else{
            errorMessage.classList.remove("hide");
            errorMessage.innerHTML = "Input Cannot Be Empty";
    }
    })
}

//start game
startBtn.addEventListener('click',()=>{
    operatorQuestion = false;
    answerValue ="";
    errorMessage.innerHTML="";
    errorMessage.classList.add("hide");
    questionGenerator();
})


//stop game
const stopGame = (resultText) =>{
    result.innerHTML = resultText;
    startBtn.innerHTML = "restart";
    // controls.classList.remove("hide");
    // startBtn.classList.add("hide");
}
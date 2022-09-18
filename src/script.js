const buttons = document.querySelectorAll('button');
      numKeys = document.querySelectorAll('[data-type="num-key"]')
      operations = document.querySelectorAll('[data-type="arithmetic-operations"]')
let tempAnswer = document.querySelector('[data-input="temp-answer"]');
let inputsAnswer = document.querySelector('[data-input="inputs-answer"]');

operations.forEach(operation => {
    operation.addEventListener('pointerdown', () => {
        inputsAnswer.innerText += operation.innerText
        replaceInvalidChar(false)
    })
})

numKeys.forEach(numKey => {
    numKey.addEventListener('pointerdown', () => {
        inputsAnswer.innerText += numKey.innerText;
        replaceInvalidChar(false)
    })    
});

buttons[12].addEventListener('pointerdown', del)
buttons[16].addEventListener('pointerdown', clear)
buttons[17].addEventListener('pointerdown', () => {
    replaceInvalidChar(true);
})

function del(){
    let removeIndex = inputsAnswer.innerText.length - 1;
    inputsAnswer.innerText = inputsAnswer.innerText.slice(0, removeIndex);
}
function clear(){
    inputsAnswer.innerText = "";
    tempAnswer.innerText = " ";
}

function replaceInvalidChar(isCalculate){
    let filteredInputs = inputsAnswer.innerText.replace("x", "*").replace("÷", "/")
    if(isCalculate == false){
        currentAnswer(filteredInputs)
    }else{
        calculate(filteredInputs)
    }
    
}

function calculate(filteredInputs){
    
    inputsAnswer.innerText = eval(filteredInputs);
    tempAnswer.innerText = ""
}
function currentAnswer(filteredInputs){
    tempAnswer.innerText = eval(filteredInputs);
}


console.log(buttons)

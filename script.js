function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return (a/b).toFixed(2)
}
function operate (operator,a,b){
    if (operator==="+") return add(a,b)
    if (operator==="-") return subtract(a,b)
    if (operator==="*") return multiply(a,b)
    if (operator==="/") return divide(a,b)
}
const display=document.querySelector(".display")
const operations=document.querySelector(".operations")
function writeDisplay(event){
    display.textContent+=event.target.textContent
    if (display.textContent==="00"){display.textContent="0"}
}
const buttonsNumbers=document.querySelectorAll(".numbers")

buttonsNumbers.forEach(element => {
    element.addEventListener("click",writeDisplay)
});

const buttonClear=document.querySelector(".clear")

function clearDisplay(){
    display.textContent=""
    operations.textContent=""
}

buttonClear.addEventListener("click",clearDisplay)

const buttonsOperator=document.querySelectorAll(".operator")

let inputs={
    operator: null,
    firstNum: null,
    secondNum: null,
}

function getInputs(event){    
    if (inputs.operator!=null) {console.log("operator present");showResult()}

    inputs["firstNum"]=Number(display.textContent)
    inputs["operator"]=event.target.textContent
    clearDisplay()
    operations.textContent=`${inputs.firstNum} ${inputs.operator}`
}

buttonsOperator.forEach(element => {
   
    element.addEventListener("click",getInputs)
});

const equalButton=document.querySelector("#equal")

equal.addEventListener("click",showResult)

function showResult(event){
    inputs["secondNum"]=Number(display.textContent)
    clearDisplay()
    operations.textContent+=` ${inputs.secondNum}`
    result=operate(inputs.operator,inputs.firstNum,inputs.secondNum)

    display.textContent=result
    for (i in inputs){
        inputs[i]=null
    }
}
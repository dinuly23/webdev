const defaultValue = {
    "currentRes": 0,
    "operand": "0",
    "operator": "",
    "memory": 0, 
    "flagBinaryOperator": 0
}

let currentRes = defaultValue.currentRes;
let operand = defaultValue.operand;
let operator = defaultValue.operator;
let memory = defaultValue.memory;
let flagBinaryOperator = defaultValue.flagBinaryOperator;

const integerOperators = ["btnSumN", "btnSumN2", "btnSumN3"];
const listBtnsId ={
    "btnPoint": "btnPoint",
    "btnMClear": "btnMClear",
    "btnMPlus": "btnMPlus",
    "btnMMinus": "btnMMinus",
    "btnMRead": "btnMRead",
    "btnDiv": "btnDiv",
    "btnMul": "btnMul",
    "btnNeg": "btnNeg",
    "btnSub": "btnSub",
    "btnSum": "btnSum",
    "btnPercent": "btnPercent"
};


function resetAll(){
    currentRes = defaultValue.currentRes;
    operand = defaultValue.operand;
    operator = defaultValue.operator;
    memory = defaultValue.memory;
    flagBinaryOperator = defaultValue.flagBinaryOperator;
}


function updateResult(){
    document.getElementById("result").innerHTML = Number(parseFloat(operand)).toFixed(2);
}

function updateHistory(){
    document.getElementById("history").innerHTML = Number(currentRes).toFixed(2) + operator;
}

function enableIntegerOperators(){
    document.getElementById(listBtnsId.btnPoint).disabled = false;
    document.getElementById(listBtnsId.btnPoint).style.filter = "none";
    for (const btnId of integerOperators){
        document.getElementById(btnId).disabled = false;
        document.getElementById(btnId).style.filter = "none";
    }
}

function disableIntegerOperators(){
    //you can't press "point" second time
    document.getElementById(listBtnsId.btnPoint).disabled = true;
    document.getElementById(listBtnsId.btnPoint).style.filter = "brightness(50%)";
    //these operations are not avaliable for float numbers
    for(const btnId of integerOperators){
        document.getElementById(btnId).disabled = true;
        document.getElementById(btnId).style.filter = "brightness(50%)";
    }
}

function writeAction(e) {
    var btn = e.target || e.srcElement;
    //first input after binaryOperator showing result
    if (flagBinaryOperator !== defaultValue.flagBinaryOperator){
        flagBinaryOperator = defaultValue.flagBinaryOperator;
        operand = (document.getElementById(btn.id).innerHTML === "0") ? "0" :
                  (document.getElementById(btn.id).innerHTML === ".") ? "0.":
                   document.getElementById(btn.id).innerHTML;
    } else{
        if(operand === defaultValue.operand){
            operand = (document.getElementById(btn.id).innerHTML === "0") ? "0" :
                        (document.getElementById(btn.id).innerHTML === ".") ? "0.":
                        document.getElementById(btn.id).innerHTML;
        }else{ 
            operand += document.getElementById(btn.id).innerHTML;
        }
    }
    updateResult();

    //user input error control
    if(btn.id === listBtnsId.btnPoint){
        disableIntegerOperators();
    }
}

function calculation(){
    switch(operator){
        case "+": 
            currentRes += parseFloat(operand);
            break;
        case "-": 
            currentRes -= parseFloat(operand);
            break;
        case "/":
            //division by 0
            if(operand === '0'){
                currentRes = defaultValue.currentRes;
            }else{ 
                currentRes /= parseFloat(operand);
            }
            break;
        case "*": 
            currentRes *= parseFloat(operand);
            break;
        default:
            currentRes = parseFloat(operand);
            break;
    }
}

function binaryOperator(e){
    var btn = e.target || e.srcElement;
    operand = document.getElementById("result").innerHTML;
    if(flagBinaryOperator === defaultValue.flagBinaryOperator){
        if( operator === defaultValue.operator){
            currentRes = parseFloat(operand);
            operator = document.getElementById(btn.id).innerHTML;
        } else {
            calculation();
        }
    }
    operator = document.getElementById(btn.id).innerHTML;
    operand = currentRes;
    flagBinaryOperator = !defaultValue.flagBinaryOperator;
    updateHistory(); 
    updateResult();
    enableIntegerOperators();
}

document.getElementById('btn0').addEventListener('click', writeAction);
document.getElementById('btn1').addEventListener('click', writeAction);
document.getElementById('btn2').addEventListener('click', writeAction);
document.getElementById('btn3').addEventListener('click', writeAction);
document.getElementById('btn4').addEventListener('click', writeAction);
document.getElementById('btn5').addEventListener('click', writeAction);
document.getElementById('btn6').addEventListener('click', writeAction);
document.getElementById('btn7').addEventListener('click', writeAction);
document.getElementById('btn8').addEventListener('click', writeAction);
document.getElementById('btn9').addEventListener('click', writeAction);
document.getElementById('btnPoint').addEventListener('click', writeAction);

document.getElementById('btnSub').addEventListener('click', binaryOperator);
document.getElementById('btnSum').addEventListener('click', binaryOperator);
document.getElementById('btnDiv').addEventListener('click', binaryOperator);
document.getElementById('btnMul').addEventListener('click', binaryOperator);


document.getElementById('btnClr').addEventListener('click', e =>{
    resetAll();
    updateResult();
    updateHistory();
    enableIntegerOperators();
});

document.getElementById('btnDel').addEventListener('click', e =>{
    if(operand !== defaultValue.operand){
        let lastItem = operand.slice(-1);
        console.log(lastItem);
        if(lastItem === "."){
            enableIntegerOperators();
        }
        operand = operand.slice(0 ,-1);
        if(operand === ""){
            operand = defaultValue.operand;
        }
    }
    updateResult();
});

document.getElementById('btnEql').addEventListener('click', e =>{
    if(operator !== defaultValue.operator){
        calculation();
        operand = currentRes;
    }
    updateResult();
    currentRes = defaultValue.currentRes;
    operator = defaultValue.operator;
    flagBinaryOperator = defaultValue.flagBinaryOperator;
    updateHistory();
    console.log(operand);
    if(parseFloat(operand) % 1 == 0){
        enableIntegerOperators();
    }else {
        disableIntegerOperators();
    }
});

document.getElementById('btnMClear').addEventListener('click', e =>{
    memory = defaultValue.memory;
});

document.getElementById('btnMRead').addEventListener('click', e =>{
    operand = Number(memory).toString();
    updateResult();
});

document.getElementById('btnMPlus').addEventListener('click', e =>{
    memory += parseFloat(operand);
});

document.getElementById('btnMMinus').addEventListener('click', e =>{
    memory -= parseFloat(operand);
});

document.getElementById('btnNeg').addEventListener('click', e =>{
    operand = document.getElementById("result").innerHTML;
    if(operand[0] === "-"){
        operand = operand.substring(1);
        //console.log(operand);
    } else{
        if(operand[0] != '0'){
            operand = "-" + operand;
        }
    }
    updateResult();
});

document.getElementById('btnPercent').addEventListener('click', e =>{
    operand = document.getElementById("result").innerHTML;
    if(operator === defaultValue.operator) {
        document.getElementById("history").innerHTML = operand + "%";    
    } else {
        document.getElementById("history").innerHTML += operand + "%";
    }
    operand = Number( parseFloat(operand) * 0.01 * currentRes).toFixed(2);
    updateResult();
});

document.getElementById('btnSumN').addEventListener('click', e =>{
    operand = document.getElementById("result").innerHTML;
    if(operator === defaultValue.operator) {
        document.getElementById("history").innerHTML = "1+...+"+operand;    
    } else {
        document.getElementById("history").innerHTML += "1+...+"+operand;
    }
    operand = Number(parseFloat(operand) * (parseFloat(operand) + 1) / 2.0).toFixed(2);
    updateResult();
});

document.getElementById('btnSumN2').addEventListener('click', e =>{
    operand = document.getElementById("result").innerHTML;
    if(operator === defaultValue.operator) {
        document.getElementById("history").innerHTML = "1&#178;+...+"+operand+"&#178;";    
    } else {
        document.getElementById("history").innerHTML += "1&#178;+...+"+operand+"&#178;";
    }
    operand = Number(parseFloat(operand) * (parseFloat(operand) + 1) * 
                (2*parseFloat(operand) + 1) / 6.0).toFixed(2);
    updateResult();
});

document.getElementById('btnSumN3').addEventListener('click', e =>{
    operand = document.getElementById("result").innerHTML;
    if(operator === defaultValue.operator) {
        document.getElementById("history").innerHTML = "1&#179;+...+"+operand+"&#179;";    
    } else {
        document.getElementById("history").innerHTML += "1&#179;+...+"+operand+"&#179;";
    }
    operand = Number(parseFloat(operand) * parseFloat(operand) * (parseFloat(operand) + 1)*
                (parseFloat(operand) + 1) / 4.0).toFixed(2);
    updateResult();
});
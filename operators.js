function plusAndMinusFunction (paramOne, paramTwo) {
    const addition = paramOne + paramTwo;
    const subtraction = paramTwo - paramOne;
    console.log(addition);
    console.log(subtraction);
};

// plusAndMinusFunction(7, 12);

function multiplyAndDivideFunction(paramOne,paramTwo){
    const multiplicationResult = paramOne * paramTwo;
    const divisionResult = paramTwo / paramOne;
    console.log(`Multiplication: ${multiplicationResult}, Division: ${divisionResult}`);
};

// multiplyAndDivideFunction(4, 14);

function modulusFunc(){
    const answerOne = 10 % 4;
    const answerTwo = 12 % 3;

    console.log(`AnswerOne is ${answerOne} and answerTwo is ${answerTwo}.`);   
};
// modulusFunc();

function exponentiationFunc(param){
    const exponentiationResult = 2 ** param;
    console.log(exponentiationResult);
};

// exponentiationFunc(5);

// PEMDAS
function pemdasOrder(){
    const total = (10 / (3+2)) * 4 + 5 ** 2 + 6 - 9;
    console.log(`Result is: ${total}`);
}

pemdasOrder();
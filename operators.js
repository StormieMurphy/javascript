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

// pemdasOrder();

// Assignment operator

function additionAssignment(){
    let variableOne = 5;
    let variableTwo = 10;
    variableOne += variableTwo; //= variableOne = variableOne + variableTwo
    console.log(variableOne);
};
// additionAssignment();
function multiplyAssignment(){
    let variableOne = 5;
    const variableTwo = 10;
    variableOne *= variableTwo;
    console.log(variableOne);
}
// multiplyAssignment();

// Comparison Operators
function compare(paramOne,paramTwo){
    const comparisonOne = paramOne == paramTwo; // 10 == "10"; -> true
    const comparisonTwo = paramOne === paramTwo; // 10 === "10"; -> false
    const comparisonThree = paramOne != paramTwo; // 10 != "10"; -> false
    console.log(comparisonOne);
    console.log(comparisonTwo);
    console.log(comparisonThree);
};

// compare(10, "10");
// compare(10, 10);
// compare(10, 5);
// compare("10", "10");

// Logical operators: &&, ||, !
function logicallyCompare(paramOne, paramTwo){
    const comparisonOne = paramOne < 10 && paramTwo > 1; // 6 < 10 && 3 > 1 -> true
    const comparisonTwo = paramOne === 5 || paramTwo == 5; // 6 === 5 || 3 == 5 -> false
    const comparisonThree = !(paramOne != paramTwo); // !(6 != 3) -> false
    console.log(comparisonOne);
    console.log(comparisonTwo);
    console.log(comparisonThree);
};
// logicallyCompare(6, 3);

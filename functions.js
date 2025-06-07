function simpleFunction(){
    console.log("Hello Javascript Function!");
    // this is a simple function which is a building block of JS.
}
// simpleFunction();

// The function below returns a string using the return keyword.
function simpleFunctionTwo(){
    return "I am from simpleFunctionTwo!"
}

// console.log(simpleFunctionTwo());
// this function takes an input and stores it in the valueOne parameter.
function simpleFunctionThree(valueOne){
    console.log(valueOne);
}
// simpleFunctionThree("Dog");

// This is the function expression basically meaning assigning a function to a variable.
const functionVariable = simpleFunctionTwo();
// 

// console.log(functionVariable);


const squareFoot = function (length, width){
    return length * width;
};
// console.log(squareFoot(24, 32));

// Variable Scope
const firstName = "John";

function sampleOne() {
    const lastName = "Smith";
    console.log(lastName);
};

function sampleTwo() {
    console.log(firstName);
    console.log(lastName); //Error due to out of variable scope.
}

// sampleOne();
// sampleTwo();

//Nested Functions - functions inside other functions
function parent() {
    const parentVariable = 15;
    function child() {
        const childVariable = parentVariable + 5;
        console.log(childVariable);
    };
    child();
    // console.log(childVariable); // Error here due to scope of the nested function variable
};
// parent();

// Default parameters - adding a default parameter to a function will allow you to call a function and supply a value for that parameter or not.
function doSubtraction(operandOne, operandTwo = 10){ // always put default parameters at the end of the parameter list.
    return operandOne - operandTwo;
};
// console.log(doSubtraction(50,30));
// console.log(doSubtraction(50));

// Rest Parameters
function restParameterFunction (...restParameter) {
    console.log(restParameter);
    
};
// restParameterFunction("welcome","to", "rest parameter", 4, 9, true, false);

// Arrow function
function normalFunction(value){ // A normal and traditional function
    return value;
};
const arrowFunction = value => value;
// const arrowFunction = (value) => {
//     return value;
// };
// console.log(arrowFunction("I am from the arrow function!"));
const arrowFunctionTwo = (paramOne, paramTwo, paramThree = "John.") => {
    return paramOne + paramTwo + paramThree;
};

console.log(arrowFunctionTwo("My middle name ", "is "));
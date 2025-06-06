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
console.log(squareFoot(24, 32));
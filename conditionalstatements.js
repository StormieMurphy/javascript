function ifExampleFunc(paramOne){
    console.log("Before if statement");
    
    if(paramOne > 10){
        console.log(`The value of ${paramOne} is true.`);
        


    }
    console.log("After if statement");
}
// ifExampleFunc(100);

// if/else statement

const elseStatementExample = (paramOne) => {
    if(paramOne == "JavaScript"){
        console.log("The condition was true.");
    } else {
        console.log("The condition was false.");

    }
}
// elseStatementExample("JavaScript");

const ifelseStatementExample = (paramOne) => {
    if(paramOne == "JavaScript"){
        console.log("The condition was true.");
    } else if (paramOne <= 10) {
        console.log("The value was less than or equal to 10.");
    } else if (paramOne >= 10){
         console.log("The value was greater than or equal to 10.");
    } else {
        console.log("The last else block got executed.");
        
    }
}
// ifelseStatementExample("abc");

const logicalIfStatement = (paramOne, paramTwo) => {
    if(paramOne == 10 && paramTwo > 10){
        console.log("Both conditions were true.");
    } else console.log("Both conditions were false.");

    if (paramOne <= 9 || paramTwo > 20){
        console.log("One of the conditions was true.");
        
    } else console.log("None of the conditions were true.");
    }
// logicalIfStatement(10, 12);

const ternaryOperatorFunc = (paramOne) => {
    const result = paramOne > 10 ? "The value inside paramOne is greater than ten." : "The value inside paramOne is NOT greater than ten."
    console.log(result);
    }
ternaryOperatorFunc(12);
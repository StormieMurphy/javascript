// const printNote = () => console.log("This note is shown after 3 seconds.");

// setTimeout(() => console.log("This note is shown after 3 seconds."), 3000);

// function determineGrade (grade) {
//     switch (grade) {
//         case "A":
//             console.log(`You got an ${grade}, awesome!`);
            
//             break;
//         case "B":
//             console.log(`You got an ${grade}, nice!`);
            
//             break;
//         case "C":
//             console.log(`You got an ${grade}, good!`);
            
//             break;
//         case "D":
//             console.log(`You got an ${grade}, let's do better!`);
            
//             break;
//         case "F":
//             console.log(`You got an ${grade}, you need to study!`);
            
//             break;
//         default:
//             break;
//     }
// }

// function getGrade (value, callback) {
//     let gradeValue;
//     switch (true) {
//         case value >= 90:
//             gradeValue = "A";
//             break;
//         case value >= 80:
//             gradeValue = "B";
//             break;
//         case value >= 70:
//             gradeValue = "C";
//             break;
//         case value >= 60:
//             gradeValue = "D";
//             break;   
//         default:
//             gradeValue = "F";
//             break;
//     }
//     callback(gradeValue)
// }

// getGrade(85, determineGrade);

// Promise

// let promise = new Promise((resolve, reject) => {
//     let number = 20;

//     setTimeout(() => {
//         if (number > 10) {
//             resolve(number)
//         } else {
//             reject("The number value is not greater than ten.")
//         }
//     }, 5000)
// })

// promise.then((value) => {
//     console.log(`The state was a success, and the value is ${value}.`);
// }).catch((error) => {
//     console.log(error);
// })

function returnPromise () {
    return new Promise((resolve, reject) => {
        let number = 20;

        setTimeout(() => {
            if (number < 10) {
                resolve(number)
            } else {
                reject("The number value is not greater than ten.")
            }
        }, 5000)
    })
}

async function asyncAwaitFunc () {
    try {
        const result = await returnPromise();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncAwaitFunc();


// fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then((response) => {
//     if (response.ok){
//         return response.json();
//     }
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// const getData = async () => {
//     try {
//         const response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getData();
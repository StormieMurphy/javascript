// While loop
const whileExample = () => {
    let counter = 0;
    while (counter < 10) {
        console.log(counter);
        counter++;
    };
};
// whileExample();

// Do-while loop
const doWhileExample = () => {
    let counter = 0;
    do {
        console.log(counter);
        counter++;
    }  while (counter < 5);
}
// doWhileExample();

// For loop
const forLoopExample = () => {
    for(counter = 0; counter <= 20; counter++){
        if(counter % 2 == 0) console.log(`Number ${counter} is even.`);

    };
}
// forLoopExample();

// Break and Continue Keywords
const breakAndContinueExample = () => {
    for (index = 0; index < 10; index++) {
        if (index === 2) continue;
        if (index === 7) {
            console.log("Loop stops!");
            break;
        }
        console.log(index);
    };
    console.log("Loop ends!");   
}
// breakAndContinueExample();

// Label statement
const labelExample = () => {
    let value = "";
    loopLabel: for (index = 0; index < 30; index++) {
        if (index % 2 == 0) continue loopLabel
        value += `${index}, `;
    };
    console.log(value);
};
labelExample();
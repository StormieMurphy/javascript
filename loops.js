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
forLoopExample();
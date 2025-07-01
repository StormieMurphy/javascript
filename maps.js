// const programmingLanguages = new Map();
// programmingLanguages.set("JS", "JavaScript");
// programmingLanguages.set("PY", "Python");
// programmingLanguages.set("JA", "Java");
// programmingLanguages.set("RR", "Ruby on Rails");

const programmingLanguages = new Map([
    ["JS", "JavaScript"], 
    ["PY", "Python"], 
    ["JA", "Java"],
    ["RR", "Ruby on Rails"]
]);

// console.log(programmingLanguages.size);
// programmingLanguages.clear();

// const result = programmingLanguages.delete("Rr");
// console.log(result);

// const language = programmingLanguages.get("js");
// console.log(language);


// console.log(programmingLanguages.has("JA"));

// Loop a map collection
// for (let lang of programmingLanguages){
//     console.log(lang);
// }

// for (let key of programmingLanguages.keys()) {
//     console.log(key);
// }

// console.log(programmingLanguages.entries());
// for (let item of programmingLanguages.entries()) {
//     console.log(item);
// }

// function processData (value, key) {
//     console.log(`The key is ${key} and the value is ${value}.`);
// }

// programmingLanguages.forEach(processData);

// programmingLanguages.forEach((value, key) => {
//     console.log(`The key is ${key} and the value is ${value}.`);
// })

programmingLanguages.forEach(function processData(value, key) {
    console.log(`The key is ${key} and the value is ${value}.`);
})

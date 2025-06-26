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
for (let lang of programmingLanguages){
    console.log(lang);
}

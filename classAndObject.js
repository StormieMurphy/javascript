// // const house = new Object();
// // house.foundation = "Concrete";
// // house.numOfWindows = 20;
// // house.doorColor = "White";
// // house.roofType = "Composite";

const house = {
  foundation: "Concrete",
  numOfWindows: 20,
  doorColor: "White",
  roofType: "Composite"
};
house.lawn = "something";

// // // house["numOfWindows"] = 40;

// // const something = {}; 
// // const str = "someString";
// // const randomNum = Math.random(); 
// // const myObj = {};

// // house[randomNum] = "something";

// // // const something = {}; str = "someString", randomNum = Math.random(); myObj = {};


// // // console.log(house["roofType"]);

// // console.log(house);

// const showSomething = (obj, objName) => {
//   let result = "house.foundation = Concrete\nhouse.numOfWindows = 20\n";
//   for (const property in obj) {
//     console.log(property);
//     if (Object.hasOwn(obj, property)) {
//       result += `${objName}.${property} = ${obj[property]}\n`
//     }                                     // obj["doorColor"]
//   }
//   console.log(result);
// }

// // showSomething(house, "house");

// const objWithFuncProperties = {
//   printName: (firstName, lastName) => consolelog(firstName + " " + lastName),
//   move: () => console.log("moving")
// };
// // objWithFuncProperties.printName("John", "Smith");
// // objWithFuncProperties.move();

// // Class

// class Person {
//   #skinColor;
//   #eyeColor;
//   constructor(firstName, lastName, skinColor, eyeColor){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.#skinColor = skinColor;
//     this.#eyeColor = eyeColor
//   }

//   get skinColor() {
//     return this.#skinColor;
//   }

//   get eyeColor() {
//     return this.#eyeColor;
//   }

//   set eyeColor(eyeColor) {
//     this.#eyeColor = eyeColor;
//   }

//   set skinColor(skinColor) {
//     this.#skinColor = skinColor;
//   }


//   speak () {
//     return this.firstName + " " + this.lastName + " is speaking.";
//   }
// }

// const personA = new Person("John", "Smith", "Brown", "Blue");
// const personB = new Person("Cal", "Thomson", "White", "Grey");

// console.log(personA);
// console.log(personB);

// personA.firstName = "Luke";
// console.log(`PersonA's name is ${personA.firstName} ${personA.lastName}.`);
// console.log(`PersonB's name is ${personB.firstName} ${personB.lastName}.`);
// console.log(personA.speak());
// console.log(personB.speak());

// console.log(personA.skinColor);
// personA.skinColor = "Tan";
// console.log(personA.skinColor);

// Parent Class
class Boat {
  constructor (color, engineType) {
    this.color = color;
    this.engineType = engineType;
  }
  move () {
    console.log(`Moving on the water using ${this.engineType}.`)
  }
}

// Child class

class Sailboat extends Boat {
  constructor (color, engineType, fuel) {
    super (color, engineType)
    this.fuel = fuel;
  }
  explore(){
    console.log("Exploring the world!");
  }
}

const myBoat = new Boat("Red", "outboard motor");
myBoat.move();

const mySailboat = new Sailboat("White", "Sail", "Air");
mySailboat.explore();
console.log(mySailboat.fuel);
console.log(mySailboat.color);
mySailboat.move();
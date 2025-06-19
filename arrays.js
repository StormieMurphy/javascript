const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//              0          1           2             3          4         5           6     => index
//              1          2           3             4          5         6           7     => position
// console.log(week);

const values = new Array(1, 2, 3, 4, 5);
// console.log(values);

const mixture = ['string', 10, true, () => {console.log('I am inside an arrow function.');}];
// console.log(mixture);

const getDay = (indexNum) => {
    const day = week[indexNum];
    console.log(day);  
}
// getDay(-3);
 
const updateElement = (indexNum) => {
    values[indexNum] = true
    console.log(values);
}
// updateElement(3);

// console.log(mixture.length);

// Using a for loop with an array
// for (index = 0; index < week.length; index++) {
//     console.log(week[index]);
// };

// for(const item of week){
//     console.log(item);
// }

//forEach instance method
// mixture.forEach((item) => {
//     console.log(item);
// })

// console.log(week.join(' - '));

const returnedArr = week.slice(1, 3);
// console.log(returnedArr);
// console.log(week);

// const result = week.pop();
// console.log(result);
// console.log(week);

// const reversedArr = week.reverse();
// console.log(reversedArr);
// reversedArr[1] = 'aaa'
// console.log(week);

const pushExample = week.push('bob', true);
console.log(pushExample);
console.log(week);

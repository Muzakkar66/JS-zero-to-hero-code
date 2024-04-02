let obj = {
    ali: 12,
    afaq: 34,
    shohib: 21
}
for (let index = 0; index < Object.keys(obj).length; index++) {
    // console.log("The marks of "  +Object.keys(obj)[index]+ "are" + obj[Object.keys(obj)[index]]);
    console.log(`The marks of  ${Object.keys(obj)[index]} are ${obj[Object.keys(obj)[index]]}`); // the marks o ali are 12 ....
} 

//now using for in loop or this problem
for (const key in obj) {
    console.log(`The marks of  ${key} are ${obj[key]}`); 
}



//taking number from user till not correct number
let cn = 4
let i 

while (i != cn) {
    console.log('Try again! You entered wrong number');
   i = purseInt(prompt('Enter a number'))
}
console.log("Entered Correct number");

//write a function to find the mean of 5 number
const mean = (a, b, c, d) => {
    return ( a + b + c + d)/ 4
}

console.log(mean(1,2,3,4));

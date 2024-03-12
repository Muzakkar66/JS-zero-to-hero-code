// // //Chapter 2
// // //Problem 1
// let age = prompt("Enter the age of person.");

// if (age > 10 && age < 20) {
//   console.log("The person fall in 10 to 20 age slat");
// } else {
//   console.log("Person not in 10 to 20 ");
// }

//Problem 2
let age1 = 14;
// num = Number.parseFloat(age1)
switch (age1) {
  case (age1 = 12):
    console.log("Person fall in 10 to 20 age category");
    break;
  case (age1 = 14):
    console.log("Person fall in 10 to 20 age category");
    break;
  default:
    console.log("Your age is not special!");
}
//problem 3
// Q 3
let num = 7;
if (num % 2 === 0 && num % 3 === 0) {
  console.log("Number is divisible 2 and 3");
} else {
  console.log("Number does not divisible 2 and 3");
}
//Problem 4
//find or match if any of array value divisible 2 and 3 
 let arr = [1,2,3,4,5]
let arrLength = arr.length
for (let i = 0; i < arrLength; i++) {
    console.log(i);
    if (arr[i]%2 == 0 || arr[i]%3 ===0 ) {
        console.log(arr);
        console.log("Number of arr divisible 2 and 3");
    }else{
        console.log("Not any value divisible 2 and 3");
    }
    
}

//Problem 5
 //Q: Print "You can drive" or "You cannot drive" base on age with ternary operator
 let input = prompt("Enter age")
   let ageOf = console.log( input > 18? "You can drive": "You can not drive");
   console.log(ageOf);
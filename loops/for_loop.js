//Program to add first n natural number
let sum = 0

let n = prompt("Enter the value of n: ")

for(let i = 0; i< n; i++){
    console.log('Here is the value ');

    sum += (i + 1)

}
console.log("Sum of first" + n + "natural number is" + sum);
//Program to add first n natural number
let sum = 0

let n = prompt("Enter the value of n: ")

for(let i = 0; i< n; i++){
    console.log('Here is the value ');
    sum += (i + 1)
}
console.log("Sum of first" + n + "natural number is" + sum);

// in loop
const obje = {
    jack: 10,
    loop: 20,
    donner: 30,
    BC: 50

}
for (const result in obje) {
   console.log(result);
}

//for in loop
const object1 = {
    jack: 10,
    loop: 20,
    donner: 30,
    BC: 50
}
for (const iterator of 'jack') {
    console.log(iterator);
}
const ar = [12, 89, 76, 79, 87, false, "not present"]

console.log(ar[0]);
console.log(ar[1]);

console.log(ar[2]);
console.log(ar[3]);
console.log(ar[4]);
console.log(ar[5]);
console.log(ar[6]);
console.log("The length of array is ", ar.length);


 ar[6] = 87

 console.log("After replacement the result is: ", ar);


 //learning point 2
 // array are mutable 
 // array can be changed
 // array can hold multiple values in single variable 

 // task
 // print a array value through for loop

 const user_age = [23,45,34,23,25]

 for (let i = 0; i < user_age.length; i++) {
    console.log(user_age[i]);
 }
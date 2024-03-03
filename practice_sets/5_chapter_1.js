 //chapter 1 #Q1
let check_dynamic_var = "with num";
const num = 4;
const after_add_num = check_dynamic_var + num

console.log(after_add_num); //#Q1 result


 //chapter 1 #Q2
console.log(typeof after_add_num) 

//chapter 1 #Q2
const user = { // here user is reference of object
    age: 28,
} 

//chapter 1 #Q3
user["employe_no"] = 123;

console.log(user['employe_no']) // same
console.log(user.employe_no); // same
console.log(user);
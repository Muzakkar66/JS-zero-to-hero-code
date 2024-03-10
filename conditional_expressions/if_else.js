let a = prompt("enter age in number");
a = Number.parseInt(a); // ype casting mean string to number conversion

console.log(typeof a);

if (a >= 28) {
  alert("bhai to shadi kr ly");
} else {
  alert("Saar kr abi");
}

//ternary operator

console.log("you can ", a < 18 ? "not drive" : " sssssd ffff");

//another example of ternary operator

let x = 5;
let y;
console.log(x);
console.log(
  "here is the example of ternary operator with condition",
  x > 4 ? (y = "x") : "y ma pass nhi oi value"
); //here if x ki value less hai 5 sy to true wali condition chaly ge and if value is greater ha to false wali

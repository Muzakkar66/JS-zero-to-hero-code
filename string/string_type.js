const name1 = 'Muzakir'
const name2 = "Muzakkir"
const name3 = `Muzakkir` // with backtics template literals 

const name4 = 'Muzakkir\'s' //Escape sequence character with special character

console.log(name1);

console.log(name2);
console.log(name3);
console.log(name4);

//string method 

console.log(name1.length);

console.log(name1.replace('ak', 'akk'));
console.log(name1.slice(2,4));
console.log(name1.slice(2));
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

console.log(name1.concat(" friend of ", name4))
let string = '      hello           '
console.log(string);
console.log(string.trim()); //removing spaces in string


let stg = "Islamabad"

for (let index = 0; index < stg.length; index++) {
    console.log(stg[index]);
    
}
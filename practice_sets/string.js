console.log("has\"".length);

const sentence = 'The quick brown fox jumps over the lazy dog'
const word = 'fox';

console.log(sentence.includes(word))

console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not '}in sentence`);


//problem 3
console.log(word.toUpperCase());
console.log(word.toLowerCase());

//problem 4 
let st2 = 'please give rs 1000'
let amount = Number.parseInt(st2.slice(15))
console.log(amount);
console.log(typeof amount);

//problem 5

let friend = 'haseeb'

friend[3] = 't'

console.log(friend); ///string canot change because exiting string is amutable 
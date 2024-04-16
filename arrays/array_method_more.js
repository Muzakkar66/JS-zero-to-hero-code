let num = [1,2,3,4,5,6,5]

let num_more = [12,21,3,41,11,61,51]

const new_arry = num.concat(num, num_more)

console.log(new_arry);
console.log(num.length);
delete num[0]

console.log(num);
console.log(num.length);

new_arry.sort() //its just alphabetically sorting

console.log(new_arry);


//descending order sorting

let compare = (a, b) =>{
    return a-b
}

console.log(new_arry.sort(compare)); //descending order sorting


//slice and splice
const modifying_ary = [1,2,3,4,5,6,7,8,9]
const new_one = modifying_ary.splice(2,5, 22,33,44)

console.log(new_one, 'testing');
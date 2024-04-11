const num = [12, 23,33, 22,21]
 num.push(40)

 console.log(num, 'With push method');

 num.join(" and ")

 console.log(num, 'With join method');

 num.pop(num)

 console.log(num,'with pop method');

 num.shift(11) // add element in first of array
 
 console.log(num,'with shift method');

 num.unshift(num[0])

 console.log(num,'with unshift method');



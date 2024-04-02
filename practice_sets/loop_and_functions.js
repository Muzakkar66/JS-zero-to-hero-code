let obj = {
    ali: 12,
    afaq: 34,
    shohib: 21
}
for (let index = 0; index < Object.keys(obj).length; index++) {
    // console.log("The marks of "  +Object.keys(obj)[index]+ "are" + obj[Object.keys(obj)[index]]);
    console.log(`The marks of  ${Object.keys(obj)[index]} are ${obj[Object.keys(obj)[index]]}`); 
} 
const yumaNames = ["Nic", "Berna", "Nabeel", "Josh", "Callum"];

// traditional for loop
console.log("---FOR LOOP---");
for (let i = 0; i < yumaNames.length; i++) {
    console.log(yumaNames[i].toUpperCase());
}

// forEach
console.log("---FOR EACH LOOP---");
yumaNames.forEach((yumaName) => {
    console.log(yumaName.toUpperCase());
})

// forEach (in one line)
console.log("---FOR EACH LOOP (in one line)---");
yumaNames.forEach(yumaName => console.log(yumaName.toUpperCase()));

// map method
console.log("---MAP METHOD---");
const upercaseYumaNames = yumaNames.map((yumaName) => {
    return yumaName.toUpperCase();
}); 

console.log(yumaNames);
console.log(upercaseYumaNames);

// filter method
console.log("---FILTER METHOD ---");
const longNames = yumaNames.filter((yumaName) => {
    // return is similar to if statement, specifies the value that should be returned
    return yumaName.length > 5 ;
});
console.log(longNames);
console.log(yumaNames);

// chaining array iterator methods 
console.log("---CHAINING ARRAY ITERATOR METHODS---");

const lowerShortNames = yumaNames
    // lowercase every name
    .map(yumaName => yumaName.toLowerCase())
    // get rid of long names 
    .filter(yumaName => yumaName.length < 5)

console.log(lowerShortNames);
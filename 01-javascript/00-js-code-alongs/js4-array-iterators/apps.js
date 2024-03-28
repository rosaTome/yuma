const yumaNames = ["Nic", "Berna", "Nabeel", "Josh", "Callum"];

// traditional for loop
console.log("---FOR LOOP---");
for (let i = 0; i < yumaNames.length; i++) {
    console.log(yumaNames[i].toLowerCase());
}

// for each
console.log("---FORM EACH LOOP---");
yumaNames.forEach((yumaName) => {
    console.log(yumaName.toUpperCase());
})

// map
console.log("---MAP LOOP---");
const upercaseYumaNames = yumaNames.map((yumaName) => {
    return yumaName.toUpperCase();
}); 

console.log(yumaNames);
console.log(upercaseYumaNames);

// filter
console.log("---FILTER---");
const longNames = yumaNames.filter((yumaName) => {
    // return is similar to if, specifies the value that should be returned
    return yumaName.length > 5 ;
});
console.log(longNames);
// still left with the original array
console.log(yumaNames);


// chaining
console.log("---CHAINING---");
//  chaining array iterator methods

    // lowercase every name
    // get rid of long names 
const lowerShortNames = yumaNames
    .map(yumaName => yumaName.toLowerCase())
    .filter(yumaName => yumaName.length < 5)

    // const lowerNames = yumaNames.map...
    // const shortNames = lowerNames.filter

console.log(lowerShortNames);
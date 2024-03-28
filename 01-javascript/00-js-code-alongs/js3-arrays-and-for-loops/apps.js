// LOOPS CODE ALONG 
 
// 1. create an array of dog breads 


const dogBreeds = ["Golden retriever", "Maltese", "Shiba inu", "poodle", "Spaniel", "Goldendoodle", "Great dance"]

// 2. log the poodle
console.log(dogbreeds[3]);

// 3. log the great dane
// hard coding
console.log(dogBreeds[6]);

//4. Always get the last element in the array
console.log(dogBreeds[dogBreeds.length - 7]);

// research .at
console.log(dogBreeds.at(-1));

//5. create an array of ages 
const ages = [5, 14, 17, 18, 55, 70, 80]

//6. log the array
console.log(ages);

//7. Add an item to the beginning of the array
ages.unshift(50)
console.log(ages);

//8. Add an item to the end of the array
ages.push(80)
console.log(ages);

//9. Remove an item from the end 
ages.pop(80)
console.log(ages);

//10. remove an item from the beginning of the array 
ages.shift()
console.log(ages);

//11. removes an item from the end of the array 
ages.pop()
console.log(ages);

// LOOPS CODE ALONGS 

const names = ["Ollie", "Nic", "Molly", "Berna"]

//1. loop through the array and print a log messgae that uses the name 

for (let index =0; index < names.length; index++) {
    console.log(`The name is ${names[index]}`);
}

//2. create a function that takes a parameter and uses it to be logged 
const printer = (param) => {
    console.log("this is the param", param);
}

//3.we want to use that function inside a whole loop
let i = 0 
while (i < names.length) {
    printer(names[i])
    i++
}

// ## Big Score Challenge

// - Create a script that will use a loop to iterate through an array of scores (numbers) and log to the console "12 is a big score!" or "50 is a big score!" for each score that is greater than **10**.

// array of scores
const allScores = [5, 10, 15, 20, 25];

// loop
for  (let i = 0; i < allScores.length; i++) {

    // if score greater than 10 - console.log 
    if (allScores[i] > 10) {
        
        console.log(`${allScores[i]} is a big score!`);
    }
}

// ### Extension

// - Use a function that takes in two parameters: an array of scores (numbers) and a big score threshold.
// - We should be able to change the score threshold to change what a big score is

// function 
// two params 
const getBigScore = (scores, threshold) => {

    for  (let i = 0; i < scores.length; i++) {

        // if score greater than threshold - console.log 
        if (scores[i] > threshold) {
            
            console.log(`${scores[i]} is a big score!`);
        }
    }
}

// invoke the function 
getBigScore(allScores, 20)
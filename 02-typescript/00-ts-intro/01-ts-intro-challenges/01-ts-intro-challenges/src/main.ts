import "./style.scss";

// ---Challenge 1---

// Create a random number between 1 - 10 inclusive and assign it to a variable. ✅
  // Can you add an Explicit type declaration to this variable? ✅

console.log("---Challenge 1---");

const randomNumber: number = 10
 
console.log(randomNumber);

// ---Challenge 2---

console.log("---Challenge 2---");

// Create an array of 5 random numbers between 1 - 10 inclusive. ✅
  // Can you add an Explicit type declaration to the variable storing the array? ✅
  // Can you use a loop to populate the array with the random numbers? ✅


const randomNumbers: number[] = [1, 3, 5, 7, 9];

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  randomNumbers.push(randomNumber);
}

console.log(randomNumbers);

// FUNCTIONS & UNIONS 

// create a fucntion that takes a string and logs it to the console 

const greatUser = (firstName: string): void => {
  console.log(`Hello ${firstName}`);
}

greatUser("Toto");

// create a fucntion that takes multuple numbers and multiplies them 

const multiplyNums = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(multiplyNums(5, 10));

// create a union type and use the prompt () to demonstrate 

let union: string | number;

union = 1
union = "Ollie"

const getUserNumberInput = () :number => {

  // user input will be stored inside the input variable
  const input = prompt("Please enter a numnber between 1-10");  // input is either string or numm

  if (input === null) {
    return -1;
  }

  // console.log(input);

  return Number(input);
};

// getUserNumberInput()


// // Validate guess function

// const validateGuess =(
//     toCheck:number, 
//     target:number
//   ):  "equals" | "too high" | "too low" => {
// if (toCheck === target) {
//   return "equals";
//   } else if (toCheck > target) {
//     return "too high";
//   } else {
//     return "too low";
//   }
// };

// // put it all together
// // we need a user input - which will be the number to check
// const userInput = getUserNumberInput()
// console.log(userInput);


// //  we need a result from the validate guess 
// const result = validateGuess(userInput, randomNumber)

// // alert the user with their guess 

// alert(`Guess : ${userInput}, the result was : ${result}`)

// Functions & Unions Challenge 

console.log("Functions & Unions Challenge");

const validateGuess = (
  toCheck: number,
  target: number
): "equals" | "too high" | "too low" | "out of range" => {
  if (toCheck < 1 || toCheck > 10) {
      return "out of range";
  } else if (toCheck === target) {
      return "equals";
  } else if (toCheck > target) {
      return "too high";
  } else {
      return "too low";
  }
};





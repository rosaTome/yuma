//1. create a function that takes a param and logs it to the console

// declaration 
const sayHello = (apples) => {
    console.log("this is the param", apples);
}

// invoking
sayHello("Hello")

//2. create a fucntion that takes two param and logs it to the console

// declaration 
const studentOne = (firstName, favFood) => {
    // console.log("Hi my name is" firstName + "I like to eat" + favFood);
    console.log(`Hi my name is ${firstName}, I like to eat ${favFood}`);
}

// invoking
studentOne("Rosa", "Apples")

//4. Returning from functions

//4a. create a function that returns a simple two numbers adding togeether
const sum = (num1, num2) => {
    return num1 + num2 
}

//4b. log the value of the functions
console.log(sum(5,2));

//4c. store the value of this function in a variable
const num3 = sum(10, 20) // 30
console.log("num3", num3);

console.log(sum(num3, 10))

//4d. implicit returns 
const subtract = (num1, num2) => num1 - num2

console.log(subtract(10, 5));

const num4 = subtract(20, 7)
console.log(num4);
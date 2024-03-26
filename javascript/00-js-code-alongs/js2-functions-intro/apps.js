// create a function that takes a param and logs it to the console

// declation 

const sayHello = (param) => {
    console.log("this is the param", param);
}

// invoking
sayHello("Hello")

// create a fucntion that takes two param and logs it to the console

// declation 

const studentOne = (firstName, favFood) => {
    // console.log("Hi my name is" firstName + "I like to eat" + favFood);

    console.log(`Hi my name is ${firstName}, I like to eat ${favFood}`);
}

// invoking
studentOne("Rosa", "Apples")

// returning from functions

// create a function that retunrs a simple two numbers adding togeether

const sum = (num1, num2) => {
    return num1 + num2 
}

// log the value of the functions
// console.log(sum(5,2));

// store the value of this function in a variable
const num3 = sum(10, 20) // 30
console.log("num3", num3);

console.log(sum(num3, 10))


// implicit returns 
const subtract = (num1, num2) => num1 - num2

console.log(subtract(10, 5));

const num4 = subtract(20, 7)
console.log(num4);











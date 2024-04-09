// ---Challenge---

// Create 3 new query selectors for the new elements 

// selectors 
  // h1 
  const heading = document.querySelectorAll<HTMLHeadingElement>(".heading");

  // button
  const button = document.querySelectorAll<HTMLButtonElement>("#myButton");

  // input
  const input = document.querySelectorAll<HTMLInputElement>("#myInput");

// null check 
if (!heading || !button || !input) {
  throw new Error("Issue with selectors");
}

// create a function that deals with our event and does something 

  // h1 
const mouseOver = (event : MouseEvent) => {
  console.log("The user hovered", event);
  const heading = event.target as HTMLHeadingElement;
  console.log("heading", heading);
  // ptag.innerText = "Changed on click";
}

  // button
// const handleClick = (event : Event) => {
//   console.log("this is the event", event);
//   const ptag = event.target as HTMLParagraphElement;
//   console.log("ptag", ptag);
//   ptag.innerText = "Changed on click";
// }


  // input
// const handleClick = (event : Event) => {
//   console.log("this is the event", event);
//   const ptag = event.target as HTMLParagraphElement;
//   console.log("ptag", ptag);
//   ptag.innerText = "Changed on click";
// }


// add event listeners

  // h1 
heading.addEventListener("mouseover",mouseOver);

  // button
// paragraphTwo.addEventListener("click", handleClick)


  // input
// paragraphTwo.addEventListener("click", handleClick)










// // Button Click Event Handler -> alter "I was clicked"
// function handleButtonClick() {
//   alert("Button was clicked!");
// }

// // Input Focus Event Handler -> log "The input was focused"
// function handleInputFocus() {
//   console.log("Input was focused.");
// }

// // H1 MouseOver Event Handler -> alert "The user hovered"
// function handleH1MouseOver() {
//   alert("The user hovered.");
// }

// // Add event listeners to the respective elements
// const myButton = document.getElementById("myButton");
// const myInput = document.getElementById("myInput");
// const mainHeading = document.getElementById("mainHeading");

// if (myButton) {
//   myButton.addEventListener("click", handleButtonClick);
// }

// if (myInput) {
//   myInput.addEventListener("focus", handleInputFocus);
// }

// if (mainHeading) {
//   mainHeading.addEventListener("mouseover", handleH1MouseOver);
// }

// // ---Challenge Extension

// // On click, change the button's innerText to "Clicked :)"
// function handleButtonClick(event: MouseEvent) {
//   const button = event.target as HTMLButtonElement;
//   button.innerText = "Clicked :)";
// }

// // On focus, change the input value to "The user was here"
// function handleInputFocus(event: FocusEvent) {
//   const input = event.target as HTMLInputElement;
//   input.value = "The user was here";
// }

// // On mouse over, change the h1 to "Javascript did this"
// function handleH1MouseOver(event: MouseEvent) {
//   const h1 = event.target as HTMLHeadingElement;
//   h1.innerText = "Javascript did this";
// }

// // Use the event parameter to get the element and apply the changes within each function
// const myButton = document.getElementById("myButton");
// const myInput = document.getElementById("myInput");
// const mainHeading = document.getElementById("mainHeading");

// if (myButton) {
//   myButton.addEventListener("click", handleButtonClick);
// }

// if (myInput) {
//   myInput.addEventListener("focus", handleInputFocus);
// }

// if (mainHeading) {
//   mainHeading.addEventListener("mouseover", handleH1MouseOver);
// }
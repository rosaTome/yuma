// // CODE ALONG - PART ONE

// // grab the first p tag using query selector
// const paragraph = document.querySelector("p")

// // grab second selector using query selecor but the class
// const paragraphTwo = document.querySelector<HTMLParagraphElement>(".paragraph-one")

// // grab the third p tag using query selector and the ID
// const paragraphThree = document.querySelector<HTMLParagraphElement>("#paragraph-two")

// // grab all the paragraph using query selector all and the text class 
// const paragraphs = document.querySelectorAll<HTMLParagraphElement>(".text");

// console.log("paragraph element", paragraph);
// console.log("paragraph element", paragraphTwo);
// console.log("paragraph element", paragraphThree);
// console.log("all paragraph elements", paragraphs);

// // CODE ALONG - PART TWO

// // not null check 
// if (!paragraph || !paragraphTwo || !paragraphThree || !paragraphThree || !paragraphs) {
//   throw new Error("Issue with selectors");
// }

// // modify text in paragraph 
// paragraph.innerText = "Well done Berna"

// // modify the style in paragraph two
// paragraphThree.style.backgroundColor = "yellow"

// // modify the inner html of paragraph three 
// paragraphThree.innerHTML = "<strong>bold</strong>";

// // modify all the elements in the paragraphs variable 
// // add border 2px solid green
// paragraphs.forEach ((paragraph) => {
//   paragraph.style.border = "2px solid green";
// });

// // CODE ALONG - PART THREE - EVENTS

// // create a function that deals with our event and do something to the p tag
// const handleClick = (event : Event) => {
//   console.log("this is the event", event);
//   const ptag = event.target as HTMLParagraphElement;
//   console.log("ptag", ptag);
//   ptag.innerText = "Changed on click";
// }

// // add event listener to oen our p tags 
// paragraphTwo.addEventListener("click", handleClick)


// // ---Challenge---

// // Create 3 new query selectors for the new elements 

//   // button
//   // input
//   // h1 

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
//   alert("The user hovered over the heading.");
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
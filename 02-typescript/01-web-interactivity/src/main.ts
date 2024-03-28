// grab the first p tag using query selector

const paragraph = document.querySelector("p")

// grab second selector using query selecor but the class
const paragraphTwo = document.querySelector<HTMLParagraphElement>(".paragraph-one")

// grab the third p tag using query selector and the ID

const paragraphThree = document.querySelector<HTMLParagraphElement>("#paragraph-two")

// grab all the paragraph using query selector all and the text class 

const paragraphs = document.querySelectorAll(".text");

// console.log("paragtaph element", paragraph);
// console.log("paragtaph element, two", paragraphTwo);
// console.log("paragtaph element, three", paragraphThree);
// console.log("paragtaph element", paragraphs);

// modify text in paragraph 

// modify the style in paragraph two

// modify the inner html of paragraph three 

if(!paragraph || !paragraphTwo || !paragraphThree || !paragraphThree || !paragraphs) {
  throw new Error("Issue with selectors")
}

// modify all the elements in the paragraphs variable 

paragraph.innerText = "Well done Berna"

// modify the style in paragraph two

paragraphThree.style.backgroundColor = "yellow"

// modify the inner html of paragraph three 

paragraphThree.innerHTML = "<strong>bold</strong>";

// modify all the elements in the paragraphs variable
//  add border 2px solid green

// paragraphs.forEach ((paragraph) => {
//   paragraph.style.border = "2px solid green";
// });

// create a fucntion that deals with our event and do something to the p tag

const handleClick = (event : Event) => {
  console.log("this is the event", event);
  const ptag = event.target as HTMLParagraphElement;
  // console.log("ptag", ptag);
  ptag.innerText = "Changed on click";
}

// add event listener to oen our p tags 
paragraphTwo.addEventListener("click", handleClick)


// ---Challenge---

// Button Click Event Handler
function handleButtonClick() {
  alert("Button was clicked!");
}

// Input Focus Event Handler
function handleInputFocus() {
  console.log("Input was focused.");
}

// H1 MouseOver Event Handler
function handleH1MouseOver() {
  alert("The user hovered over the heading.");
}

// Add event listeners to the respective elements
const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");
const mainHeading = document.getElementById("mainHeading");

if (myButton) {
  myButton.addEventListener("click", handleButtonClick);
}

if (myInput) {
  myInput.addEventListener("focus", handleInputFocus);
}

if (mainHeading) {
  mainHeading.addEventListener("mouseover", handleH1MouseOver);
}

// ---Challenge Extension

// Button Click Event Handler
function handleButtonClick(event: MouseEvent) {
  const button = event.target as HTMLButtonElement;
  button.innerText = "Clicked :)";
}

// Input Focus Event Handler
function handleInputFocus(event: FocusEvent) {
  const input = event.target as HTMLInputElement;
  input.value = "The user was here";
}

// H1 MouseOver Event Handler
function handleH1MouseOver(event: MouseEvent) {
  const h1 = event.target as HTMLHeadingElement;
  h1.innerText = "Javascript did this";
}

// Add event listeners to the respective elements
const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");
const mainHeading = document.getElementById("mainHeading");

if (myButton) {
  myButton.addEventListener("click", handleButtonClick);
}

if (myInput) {
  myInput.addEventListener("focus", handleInputFocus);
}

if (mainHeading) {
  mainHeading.addEventListener("mouseover", handleH1MouseOver);
}
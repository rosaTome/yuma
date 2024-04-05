// CODE ALONG - PART ONE

// grab the first p tag using query selector
const paragraph = document.querySelector("p")

// grab second selector using query selecor but the class
const paragraphTwo = document.querySelector<HTMLParagraphElement>(".paragraph-one")

// grab the third p tag using query selector and the ID
const paragraphThree = document.querySelector<HTMLParagraphElement>("#paragraph-two")

// grab all the paragraph using query selector all and the text class 
const paragraphs = document.querySelectorAll<HTMLParagraphElement>(".text");

console.log("paragraph element", paragraph);
console.log("paragraph element", paragraphTwo);
console.log("paragraph element", paragraphThree);
console.log("all paragraph elements", paragraphs);

// CODE ALONG - PART TWO

// not null check 
if (!paragraph || !paragraphTwo || !paragraphThree || !paragraphThree || !paragraphs) {
  throw new Error("Issue with selectors");
}

// modify text in paragraph 
paragraph.innerText = "Well done Berna"

// modify the style in paragraph two
paragraphThree.style.backgroundColor = "yellow"

// modify the inner html of paragraph three 
paragraphThree.innerHTML = "<strong>bold</strong>";

// modify all the elements in the paragraphs variable 
// add border 2px solid green
paragraphs.forEach ((paragraph) => {
  paragraph.style.border = "2px solid green";
});

// CODE ALONG - PART THREE - EVENTS

// create a function that deals with our event and do something to the p tag
const handleClick = (event : Event) => {
  console.log("this is the event", event);
  const ptag = event.target as HTMLParagraphElement;
  console.log("ptag", ptag);
  ptag.innerText = "Changed on click";
}

// add event listener to oen our p tags 
paragraphTwo.addEventListener("click", handleClick)
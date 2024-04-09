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
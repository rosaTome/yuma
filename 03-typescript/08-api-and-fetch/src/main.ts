// import the quote response type

import { QuoteResponse } from "../types/quote";

// query select the button and the container
const quoteButton = document.querySelector(".quote-button");
const quoteContainer = document.querySelector(".quote-container");

// do nour null checks 
if(!quoteButton || !quoteContainer){
  throw new Error ("Issue with selectors");
};

// write a function that calls the api
const getQuote = async () => {

  // make the response
  const response = await fetch("https://api.quotable.io/random");

  // access the data 
  const data: QuoteResponse = await response.json();

  // add the quote to the html
  quoteContainer.innerHTML = data.content;
}

// add an eventlistener to the button to call the api when clicked 
quoteButton.addEventListener("click", getQuote);


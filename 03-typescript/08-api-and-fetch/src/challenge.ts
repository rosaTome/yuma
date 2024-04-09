// import the quote response type
import { DogResponse } from "../types/dogs";

// query select the button and the container
const dogButton = document.querySelector(".dog-button");
const dogContainer = document.querySelector(".dog-container");

// null checks 
if(!dogButton || !dogContainer){
  throw new Error ("Issue with selectors");
};

// write a function that calls the api
const getDog = async () => {

  // make the response
  // const response = await fetch("https://dog.ceo/api/breeds/image/random");

  // access the data 
  // const data: DogResponse = await response.json();

  // add img to the html
  // dogContainer.innerHTML = data.message;
}

// add an eventlistener to the button to call the api when clicked 
dogButton.addEventListener("click", getDog);


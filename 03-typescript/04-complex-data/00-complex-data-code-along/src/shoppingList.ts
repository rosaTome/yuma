// CODE ALONG PART ONE - SHOPPING LIST COMPLEX DATA

// FOR IN

const shoppingContainer = document.querySelector(".shopping-cart__container");

if (!shoppingContainer){
  throw new Error("Issue with selector");
}

// Looping through objects using For In 
// types can start with capital
type SuperMarketItems = {
  [key : string] : number
};

// objects must be camel case 
const supermarketItems : SuperMarketItems = {
  shampoo: 3.99,
  toothbrush: 2.99,
  "toiler roll": 6.99,
  cereal: 3.99,
  soap: 1.99,
  bread: 4.00,
  "beer crate": 9.99,
};  

// we want to create a function to see how much we can buy with a given amount 

  // function that takes a param of  balance
  // loops through object and see how many items we can buy from the list  
  // add the bought items to a list
  // return the bought items 


const buyStuff = (balance: number) => {
  const itemsPurchased : string[] = [];

  for (const key in supermarketItems) {
    if (supermarketItems[key] < balance) {
      itemsPurchased.push(key);
      balance -= supermarketItems[key];
    }
  }
  return itemsPurchased;
};

console.log(buyStuff(40));

// setting the buyStuff function from above as a variable 
const itemsbought = buyStuff(15);

// add the items to the html 
shoppingContainer.innerHTML = `our bought items: ${itemsbought.join(", ")}`;
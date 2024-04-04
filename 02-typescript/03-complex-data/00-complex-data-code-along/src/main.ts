// SHOPPING LIST COMPLEX DATA

const shoppingContainer = document.querySelector(".shopping-cart_container");

if (!shoppingContainer){
  throw new Error ("Issue with selector");
}

// Looping through objects using for in 

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

const buyStuff = (balance : number) => {
  const itemsPurchased: string[] = [];
  for (const key in supermarketItems) {
    if (supermarketItems[key] < balance) {
      itemsPurchased.push(key);
      balance -= supermarketItems[key];
    }
  }
  return itemsPurchased;
};

console.log(buyStuff(9));

// use buyStuff function to populate our shopping container 
// add the list to the html 

const itemsBought = buyStuff(15);

shoppingContainer.innerHTML = `our bought items: ${itemsBought.join(", ")}`;

// use objects.entries to take a look at a 2d array
const supermarketEntries = Object.entries
(supermarketItems); // Arrays of arrays
console.log(supermarketEntries);


//  use the information to add to our HTML
// loop through the entries and create a ptag that holds both the key and the value
const supermarketHTML = supermarketEntries.map((entry) => {
  //  entry = array of key value pair 
  const key = entry[0]
  const value = entry[1]
  const ptag = `<p>${key} : ${value}</[>]`
  return ptag
});

shoppingContainer.innerHTML = supermarketHTML.join("");

// going to use the objects.keys to create a new array containing just the keys

const supermMarketKeys = Object.keys(supermarketItems)

// loop through this array to find a specific key word, if it's found only return those items 

// console.log(supermMarketKeys);

const searchTerm = "oo"

const matchedItems = supermMarketKeys.filter((item) => {

  // if item matches then return true, it item does not reutrn false 

  if (item.includes(searchTerm)) {
    return true
  } else {
    return false
  }
})

// console.log(matchedItems);

// HOUSES COMPLEX DATA 

type House = {
  rooms: Room[];
  address: Address;
};

type Room = {
  name: string;
  hasFirePlace: boolean;
};

type Address = {
  houseName: string;
  street: string;
  town: string;
  region: string;
};

const myHouse : House = {
  rooms: [
    {name: "front room", hasFirePlace: false},
    {name: "bathroom", hasFirePlace: false},
    {name: "kitchen", hasFirePlace: false},
  ],
  address: {
    houseName : "beg end",
    street: "bagshot row",
    town: "hobbiton",
    region: "the shire",
  },
};

// HOUSE COMPLEX DATA - CHALLENGES:

// 1. HOW DO YOU GET ACCESS TO THE HOUSE NAME?
// for in?
const houseName = myHouse.address.houseName;
console.log("houseName");

// 2. HOW DO YOU GET ACCESS TO THE REGION IN THE ADDRESS?
const region = myHouse.address.region;
console.log(region);

// 3. HOW DO YOU GET ACCESS TO THE FIRST ROOM NAME OBJECT IN THE ROOMS ARRAY?
const firstRoomName = myHouse.rooms[0].name;
console.log(firstRoomName);

// 4. HOW DO YOU GET ACCESS TO THE NAME OF THE LAST ROOM IN THE ROOMS ARRAY?
const lastRoomIndex = myHouse.rooms.length - 1;
console.log(myHouse.rooms[lastRoomIndex].name);

// 5. CAN YOU CREATE A NEW ARRAY WITH ONLY ROOMS WITH FIREPLACES?
//    - CREATE AN ARRAY OF [<li>Room name</li>, <li>Room name</li>]
const roomsWithFireplaces = myHouse.rooms.filter(room => room.hasFirePlace);
const roomNamesWithFireplaces = roomsWithFireplaces.map(room => `<li>${room.name}</li>`);
console.log(roomNamesWithFireplaces);
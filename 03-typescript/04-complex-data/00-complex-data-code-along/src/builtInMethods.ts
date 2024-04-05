import "./shoppingList.ts";

// CODE ALONG PART TWO - BUILT-IN METHODS

// use objects.entries to take a look at a 2d array
//  and store in a variable 
const supermarketEntries = Object.entries(supermarketItems); // Arrays of arrays 
console.log(supermarketEntries);

// use the information to add to our HTML
// loop through the entries and create a ptag that holds both the key and the value
const supermarketHTML = supermarketEntries.map((entry) => {

    // entry = array of key value pair
    const key = entry[0];
    const value = entry[1];
    const ptag = `<p>${key} : ${value}</p>`
    return ptag
});

if (!shoppingContainer){
    throw new Error("Issue with innerHTML ptag element");
}

shoppingContainer.innerHTML = supermarketHTML.join("");

// going to use the objects.keys to create a new array containing just the keys
const supermarketKeys = Object.keys(supermarketItems);

// loop through this array to find a specific key word, if it's found only return those items
const searchTerm = "oo";

const matchedItems = supermarketKeys.filter((item) => {

    if(item.includes(searchTerm)){
        return true
        } else {
        return false 
    }
    
});

console.log(matchedItems);
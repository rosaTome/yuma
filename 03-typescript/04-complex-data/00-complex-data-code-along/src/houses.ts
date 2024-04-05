// CODE ALONG PART THREE - HOUSES COMPLEX DATA 

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
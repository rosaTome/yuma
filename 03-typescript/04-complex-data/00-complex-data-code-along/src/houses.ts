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
  console.log(myHouse.address.houseName);
  
  // 2. HOW DO YOU GET ACCESS TO THE REGION IN THE ADDRESS?
  console.log(myHouse.address.region);
  
  // 3. HOW DO YOU GET ACCESS TO THE FIRST ROOM NAME OBJECT IN THE ROOMS ARRAY?
  console.log(myHouse.rooms[0].name);
  
  // 4. HOW DO YOU GET ACCESS TO THE NAME OF THE LAST ROOM IN THE ROOMS ARRAY?
  // console.log(myHouse.rooms[2].name);
  const lastRoomIndex = myHouse.rooms.length - 1;
  console.log(myHouse.rooms[lastRoomIndex].name);
  
  // 5. CAN YOU CREATE A NEW ARRAY WITH ONLY ROOMS WITH FIREPLACES?
    // CREATE AN ARRAY OF [<li>Room name</li>, <li>Room name</li>]
  const roomsWithFireplaces = myHouse.rooms.filter((room) => room.hasFirePlace);

  const roomLi = roomsWithFireplaces.map((room) => {
    return `<li>${room.name}</li>`;
  });

  console.log(roomLi);
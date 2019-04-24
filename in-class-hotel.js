// START HERE
// 1. Create a hotel object assigned to a variable for Hotel Paradise.  This hotel needs the following attributes:
// -has 50 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - NO
// -has a pool - YES
// -allows pets - NO

let hotel1 = {
	name: "Hotel Paradise",
	totalRms: "50",
	bookedRms: "0",
	gym: "no",
	pool:"yes",
	pets:"no",
}




// 2. Create a second variable for Quay Hotel
// -has 75 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES


let hotel2 = {
	name: "Quay Hotel",
	totalRms: "75",
	bookedRms: "0",
	gym: "yes",
	pool:"yes",
	pets:"yes",
}
// 3. Create a third variable for Parker Place
// -has 140 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES

let hotel3 = {
	name: "Parker Place",
	totalRms: "140",
	bookedRms: "0",
	gym: "yes",
	pool:"yes",
	pets:"yes",
}
// 4. Print the name of each hotel on a separate line
console.log(hotel1);
console.log(hotel2);
console.log(hotel3);
console.log(name);
console.log("\n");
for(let i=0; i < hotels.length; i++){
	console.log("name" + hotels[i].name);
}
console.log("\n");


// 5. Use square bracket syntax to print the total number of rooms each hotel has
console.log("-------------\n");
console.log(name[totalRms]);


// 6. Since the hotel has yet to accept bookings, confirm none of the rooms are booked by printing the
// number of rooms booked
console.log("-------------\n");
console.log(name[bookedRms]);


// 7. Print the names of hotels that have gyms
console.log("-------------\n");
console.log(name[gym]);


// 8. Calculate and print the number of rooms available per hotel
console.log("-------------\n");
console.log(name["totalRms/name"]);


// 9. The Marketing Team believes the new site has 500 rooms, but the Construction Team says less than 300.
// To resolve this squabble, print the total number of rooms by adding this across all 3 hotels.
console.log("-------------\n");
console.log(name["totalRms/hotel1 + hotel2 + hotel3"]);

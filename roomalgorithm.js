//objective, to get the function that will make a multidimensional array
//with all of the rooms in it

//mostly a sandbox for when i put this in the actual program

function rentARoom(numFloors, numRooms) {
    let allRooms = [];
    for (let i = 1; i <= numFloors; i++) {
        for (let j = 1; j <= numRooms; j++) {
            allRooms.push({room: (i)*100+j,
                           price: 50*i + (10*j-10) + 45,
                           renter: null
            
            })
        }
    }
    console.log(allRooms)
    return allRooms;
}

rentARoom(4, 4);
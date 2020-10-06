//objective, to get the function that will make a multidimensional array
//with all of the rooms in it

function rentARoom(numFloors, numRooms) {
    let allRooms = [];
    for (let i = 0; i < numFloors; i++) {
        for (let j = 1; j <= numRooms; j++) {
            allRooms.push({room: (i+1)*100+j})
        }
    }
    console.log(allRooms, allRooms.length)
}

rentARoom(4, 4);
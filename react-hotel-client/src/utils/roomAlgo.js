module.exports = {
    rentARoom: (numFloors, numRooms) => {
        let allRooms = [];
        for (let i = 1; i <= numFloors; i++) {
            for (let j = 1; j <= numRooms; j++) {
                allRooms.push({room: (i)*100+j,
                               price: 50*i + (10*j-10) + 45,
                               renter: null
                
                })
            }
        }
        return allRooms;

    }
}
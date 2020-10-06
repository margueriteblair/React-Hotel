import React from 'react'
import roomAlgorithm from '../utils/roomAlgo'

export default function RoomDropdown() {
    const {rentARoom} = roomAlgorithm;
    let roomList = rentARoom(4, 4);
    return (
        <select style={{height: 30, width: 200}}>
            {
                roomList.map((room) => {
                    return (
                        <option
                        value={room.room}
                        style={{borderRadius: 3, height: 30, width: 170}}
                    >Room: {room.room} - ${room.price}</option>
                    )
                })
            }
            
        </select>
    )
}
// for (let i = 0; i < roomList.length; i++) {
//     return (
//         <option value={roomList[i].room}>{roomList[i].room}</option>
//     )
//     }

import React from 'react'
import {roomAlgorithm} from '../utils/roomAlgo'

export default function RoomDropdown() {
    return (
        <select>
            {
                roomList.map((room) => {
                    return (
                        <option
                        value={room.room}
                    >{room.room}-{room.price}</option>
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

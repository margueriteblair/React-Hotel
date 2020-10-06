import React, {useContext} from 'react'
import roomAlgorithm from '../utils/roomAlgo'
import {RoomContext} from '../Contexts/RoomContext'

export default function RoomDropdown() {
    // const {setRooms} = useContext(RoomContext);
    const {rentARoom} = roomAlgorithm;
    let roomList = rentARoom(4, 4);
    // setRooms(roomList);
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

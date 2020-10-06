import React, {useContext} from 'react'
import roomAlgorithm from '../utils/roomAlgo'
import {RoomContext} from '../Contexts/RoomContext'
import Button from './Button'

export default function RoomDropdown() {
    // const {setRooms} = useContext(RoomContext);
    const {rentARoom} = roomAlgorithm;
    let roomList = rentARoom(4, 4);
    // setRooms(roomList);
    const checkIn = () => {
        console.log("checking in")
        console.log(document.querySelector("select").value)

    }

    const checkOut = () => {
        console.log("checking out")
        console.log(document.querySelector("select").value)
    }
    return (
    <div>
        <select style={{height: 30, width: 200}}>
            {
                roomList.map((room) => {
                    return (
                        <option
                        value={room.room}
                        style={{borderRadius: 3, height: 30, width: 170}}
                        onClick={() => {
                            console.log(this.value)
                        }}
                    >Room: {room.room} - ${room.price}</option>
                    )
                })
            }
            
        </select>
    <div id="button-container" style={{justifyContent: "space-around"}}>
        <Button
        text="Book A Room!"
        onClick={checkIn}
        />
        <Button
        text="Check Out"
        onClick={checkOut}
        />
    </div>
    </div>
    )
}

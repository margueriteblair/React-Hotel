import React, {useContext} from 'react'
import roomAlgorithm from '../utils/roomAlgo'
import {RoomContext} from '../Contexts/RoomContext'
import Button from './Button'

export default function RoomDropdown() {
    const {setRooms} = useContext(RoomContext);
    const {rentARoom} = roomAlgorithm;
    let roomList = JSON.parse(localStorage.getItem("allAvailableRooms"));
    let bookedRooms = [];

    const checkIn = () => {
        for (let i = 0; i < roomList.length; i++) {
            if (roomList[i].room == document.querySelector("select").value) {
                roomList.splice(i, 1);
            }
        }
        setRooms(roomList)
        console.log(roomList)
    }

    const checkOut = () => {
        console.log("checking out")
        console.log(document.querySelector("select").value)
    }
    return (
    <div>
        {
           () => {
               if (roomList === null) {
                   return (
                       <div>
                       <h3>Apologies! No rooms available today.</h3>
                       <h4>Check again later.</h4>
                       </div>
                   )
               } else {
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
           }

        }
    </div>
    )
}

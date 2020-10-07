import React, {useContext} from 'react'
import roomAlgorithm from '../utils/roomAlgo'
import {RoomContext} from '../Contexts/RoomContext'
import Button from './Button'
import NavBar from './NavBar'
import Form from './Form';

export default function RoomDropdown() {
    const {setRooms} = useContext(RoomContext);
    let roomList = JSON.parse(localStorage.getItem("allAvailableRooms"));
    let bookedRooms = [];

    const checkIn = () => {
        for (let i = 0; i < roomList.length; i++) {
            for (let j = 0; j < roomList[i].length; j++) {
                if (roomList[i][j].room == document.querySelector("select").value) {
                    roomList[i].splice(j, 1);
                }
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
            <NavBar/>
        {/* {
           () => {
               if (roomList === null || roomList.length === 0) {
                   return (
                       <div>
                       <h3>Apologies! No rooms available today.</h3>
                       <h4>Check again later.</h4>
                       </div>
                   )
               } else {
                   return (
                <div> */}
                    <select style={{height: 30, width: 200}}>
                    {   
                        [...roomList.flat()].map((room) => {
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
                <Form/>
                {/* </div> */}
                   
               {/* } */}
           {/* } */}

        {/* } */}
    </div>
    )
}

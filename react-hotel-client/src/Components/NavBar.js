import React, {useContext} from 'react'
import Button from './Button';
import {RoomContext} from '../Contexts/RoomContext'

export default function NavBar() {
    const {rooms, setRooms, bookedRooms, setBookedRooms} = useContext(RoomContext);
    let roomList = JSON.parse(localStorage.getItem("allAvailableRooms"));
    // const checkIn = () => {
    //     for (let i = 0; i < roomList.length; i++) {
    //         for (let j = 0; j < roomList[i].length; j++) {
    //             if (roomList[i][j].room == document.querySelector("select").value) {
    //                 roomList[i].splice(j, 1);
    //             }
    //         }
    //     }
    //     setRooms(roomList) //why does this need to be clicked twice to reset local storage
    //     console.log(roomList)
    // }

    // const checkOut = () => {
    //     console.log("checking out")
    //     console.log(document.querySelector("select").value)
    // }
    return (
    <div style={{backgroundColor: "#4285f4"}}>
        <h1>Welcome to the CareerDevs Hotel, Coders!</h1>
    <h3>There are currently {bookedRooms.flat().length} rooms booked, and {rooms.flat().length} available :)</h3>

            <div id="button-container" style={{justifyContent: "space-around"}}>
            <Button
            text="Book A Room!"
            // onClick={checkIn}
            onClick={() => {window.location.href = '/checkin'}}
            />
            <Button
            text="Check Out"
            // onClick={checkOut}
            onClick={() => {window.location = '/checkout'}}
            />
            </div>
        </div>
    )
}

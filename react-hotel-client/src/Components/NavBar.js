import React, {useContext} from 'react'
import Button from './Button';
import {RoomContext} from '../Contexts/RoomContext'

export default function NavBar() {
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
        setRooms(roomList) //why does this need to be clicked twice to reset local storage
        console.log(roomList)
    }

    const checkOut = () => {
        console.log("checking out")
        console.log(document.querySelector("select").value)
    }
    return (
        <div>
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

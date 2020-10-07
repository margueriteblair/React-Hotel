import React, {useContext} from 'react'
import Dropdown from './RoomDropdown';
import {RoomContext} from '../Contexts/RoomContext'

export default function Rent() {
    const {rooms, setRooms} = useContext(RoomContext)
    let bookRoom = () => {
        let rentForm = Array.from(document.getElementById("rentForm").children)
        for (const input of rentForm) {
            if (input.value === null || input.value === "") {
                return alert(`Unable to submit your booking request due to missing fields.`)
            }
            
        }
        const fullName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
        for (let i = 0; i < rooms.length; i++) {
            for (let j = 0; j < rooms[i].length; j++) {
                if (rooms[i][j].room == document.querySelector("select").value) {
                    rooms[i][j].renter = fullName;
                    console.log(rooms[i][j])
                    
                    break;
                }
            }
            break;
        }
        setRooms(rooms);
        console.log(rooms);
    }
    return (
        <div>
            <h1>This is the rental page</h1>
            <Dropdown />
            <button type="submit" style={{marginTop: 7}}
            onClick={bookRoom}
            >Book Room Now</button>
        </div>
    )
}

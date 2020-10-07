import React, {useContext} from 'react'
import Dropdown from './RoomDropdown';
import {RoomContext} from '../Contexts/RoomContext'
import Form from './Form';

export default function Rent() {
    const {rooms, setRooms, bookedRooms, setBookedRooms} = useContext(RoomContext)
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
                    bookedRooms[i].push(rooms[i].splice(j, 1).pop());

                    break;
                }
            }
            // break;
        }
        setBookedRooms(bookedRooms)
        setRooms(rooms);
        localStorage.setItem("bookedRooms", JSON.stringify(bookedRooms));
        localStorage.setItem("allAvailableRooms", JSON.stringify(rooms));
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    }
    return (
        <div style={{margin: 10}}>
            <h1>This is the rental page</h1>
            <select style={{height: 30, width: 200, margin: 20}}>
                    {   
                        [...rooms.flat()].map((room) => {
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

            <button type="submit" style={{marginTop: 7}}
            onClick={bookRoom}
            >Book Room Now</button>
        </div>
    )
}

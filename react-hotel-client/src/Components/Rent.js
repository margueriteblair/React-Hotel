import React, {useContext} from 'react'
import {RoomContext} from '../Contexts/RoomContext'
import Form from './Form';
import {MoneyContext} from '../Contexts/MoneyContext'

export default function Rent() {
    const {rooms, setRooms, bookedRooms, setBookedRooms} = useContext(RoomContext)
    const {balance, setBalance} = useContext(MoneyContext);
    const bookRoom = () => {
        const newRooms = [...rooms];
        const newBookedRooms = [...bookedRooms];
        let newBalance = balance;
        const rentForm = Array.from(document.getElementById("rentForm").children)
        
        for (const input of rentForm) {
            if (input.value === null || input.value === "") {
                return alert(`Unable to submit your booking request due to missing fields.`)
            } 
        }

        const fullName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;

        for (let i = 0; i < newRooms.length; i++) {
            for (let j = 0; j < newRooms[i].length; j++) {
                if (newRooms[i][j].room == document.querySelector("select").value) {
                    newRooms[i][j].renter = fullName;
                    newBalance = newBalance - newRooms[i][j].price - 25;
                    newBookedRooms[i].push(newRooms[i].splice(j, 1).pop());
                    break;
                }
            }
        }
        setBookedRooms(newBookedRooms)
        setRooms(newRooms);
        setBalance(newBalance);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    }
    return (
        <div style={{margin: 10}}>
            <h1>Looking for a room to rent? You've come to the right place!</h1>
            <select style={{height: 30, width: 200, margin: 20}}>
                    {   
                        [...rooms.flat()].map((room) => {
                            return (
                                <option
                                key={room.room}
                                value={room.room}
                                style={{borderRadius: 3, height: 30, width: 170}}
                            >Room: {room.room} - ${room.price}</option>
                            )
                        })
                    }
                </select>
                <Form/>
            <button type="submit" style={{marginTop: 7}} onClick={bookRoom}>Book Room Now</button>
        </div>
    )
}

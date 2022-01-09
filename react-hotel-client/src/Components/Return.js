import React, {useContext} from 'react'
import {RoomContext} from '../Contexts/RoomContext';
import { MoneyContext } from '../Contexts/MoneyContext';

export default function Return() {
    let {rooms, setRooms, bookedRooms, setBookedRooms} = useContext(RoomContext);
    let {balance, setBalance} = useContext(MoneyContext)
    const checkOut = () => {
        const newRooms = [...rooms];
        const newBookedRooms = [...bookedRooms];
        let newBalance = balance;
        const returnForm = Array.from(document.getElementById("returnForm").children);
        for (const input of returnForm) {
            if (input.value === null || input.value === "") {
                return alert(`Unable to successfully check you out of your room due to missing fields.`)
            }
        }
        
        const fullName = document.getElementById("returnFirstName").value + " " + document.getElementById("returnLastName").value;

        for (let i = 0; i < newBookedRooms.length; i++)  {
            for (let j = 0; j < newBookedRooms[i].length; j++) {
                if (newBookedRooms[i][j].room === parseInt(document.getElementById("returnDropdown").value) && newBookedRooms[i][j].renter === fullName) {
                        newBalance = newBalance + 25;
                        newRooms[i].push(newBookedRooms[i].splice(j, 1).pop());
                }
            }
            newBookedRooms[i].sort((a, b) => {
                return a.price - b.price;
            });
            newRooms[i].sort((a, b) => {
                return a.price - b.price;
            })
        }
        setBookedRooms(newBookedRooms);
        setRooms(newRooms);
        setBalance(newBalance);
        document.getElementById("returnFirstName").value = "";
        document.getElementById("returnLastName").value = "";
        document.getElementById("comments-section").value = "";
    }
    return (
        <div>
            <h1>This is the return page.</h1>
            <select id="returnDropdown" style={{height: 30, width: 200, margin: 20}}>
                {
                    [...bookedRooms.flat()].map((room) => {
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
            <h3 style={{margin: 10}}>Please enter the name you used to book the room to check out:</h3>
            <div id="returnForm" style={{margin: 5}}>
                <input type="text" id="returnFirstName" placeholder="First Name"></input>
                <input type="text" id="returnLastName" placeholder="Last Name"></input>

            </div>
            <button type="submit" onClick={checkOut}>Check Out</button>
            <br>
            </br>

            <textarea
            id="comments=section"
            placeholder="Leave a comment about your stay..."
            style={{height: 200, width: 400, marginTop: 20}}
            ></textarea>
        </div>
    )
}

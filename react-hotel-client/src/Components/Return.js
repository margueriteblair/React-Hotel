import React, {useContext} from 'react'
import {RoomContext} from '../Contexts/RoomContext';
import {get, set} from '../utils/localStorage';

export default function Return() {
    let {rooms, setRooms, bookedRooms, setBookedRooms} = useContext(RoomContext);
    bookedRooms = JSON.parse(localStorage.getItem("bookedRooms"));

    const checkOut = () => {
        let returnForm = Array.from(document.getElementById("returnForm").children);
        for (const input of returnForm) {
            if (input.value === null || input.value === "") {
                return alert(`Unable to successfully check you out of your room due to missing fields.`)
            }
        }
        const fullName = document.getElementById("returnFirstName").value + " " + document.getElementById("returnLastName").value;
        for (let i = 0; i < bookedRooms.length; i++)  {
            for (let j = 0; j < bookedRooms[i].length; j++) {
                if (bookedRooms[i][j] === document.getElementById("returnDropdown").value) {
                    if (bookedRooms[i][j].renter === fullName) {
                        rooms[i].push(bookedRooms[i].splice(j, 1).pop());

                        break;
                    }
                }
            }
            setBookedRooms(bookedRooms);
            setRooms(rooms);
            set("bookedRooms", JSON.stringify(bookedRooms));
            set("allAvailableRooms", JSON.stringify(rooms));
            document.getElementById("returnFirstName").value = "";
            document.getElementById("returnLastName").value = "";

        }
    }
    return (
        <div>
            <h1>This is the return page.</h1>
            <select id="returnDropdown">
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
            placeholder="Leave a comment about your stay..."
            style={{height: 300, width: 400, marginTop: 20}}
            ></textarea>
        </div>
    )
}

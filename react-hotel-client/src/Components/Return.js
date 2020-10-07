import React, {useContext} from 'react'
import {RoomContext} from '../Contexts/RoomContext';

export default function Return() {
    let {rooms, setRooms, bookedRooms, setBookedRooms} = useContext(RoomContext);
    bookedRooms = JSON.parse(localStorage.getItem("bookedRooms"));
    return (
        <div>
            <h1>This is the return page.</h1>
            <select>
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
            <div id="checkOutForm" style={{margin: 5}}>
                <h3>Please enter the name you used to book the room to check out:</h3>
                <input type="text" id="firstName" placeholder="First Name"></input>
                <input type="text" id="lastName" placeholder="Last Name"></input>

            </div>
            <button type="submit">Check Out</button>
            <br>
            </br>

            <textarea
            placeholder="Leave a comment about your stay..."
            style={{height: 300, width: 400, marginTop: 20}}
            ></textarea>
        </div>
    )
}

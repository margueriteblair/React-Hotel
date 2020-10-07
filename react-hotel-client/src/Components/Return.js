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

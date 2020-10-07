import React, {useContext} from 'react'
import roomAlgorithm from '../utils/roomAlgo'
import {RoomContext} from '../Contexts/RoomContext'
import Form from './Form';

export default function RoomDropdown() {
    const {rooms, setRooms} = useContext(RoomContext);

    return (
        <div>
                    <select style={{height: 30, width: 200}}>
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

    </div>
    )
}

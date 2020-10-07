import React, {useState, useEffect} from 'react'
import {set} from '../utils/localStorage'
import roomAlgorithm from '../utils/roomAlgo'

export const RoomContext = React.createContext();

export default function RoomContextProvider(props) {
    const {rentARoom} = roomAlgorithm;
    const [rooms, setRooms] = useState(rentARoom(4, 4))
    const [bookedRooms, setBookedRooms] = useState([[], [], [], []])

    useEffect(() => {
        set("allAvailableRooms", JSON.stringify(rooms))
    }, [rooms])

    useEffect(() => {
        set("bookedRooms", JSON.stringify(bookedRooms))
    }, [bookedRooms])

    return (
        <RoomContext.Provider value={{rooms: rooms, setRooms: setRooms, bookedRooms: bookedRooms, setBookedRooms: setBookedRooms}}>
            {props.children}
        </RoomContext.Provider>
    )
}

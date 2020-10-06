import React, {useState, useEffect} from 'react'
import {get, set} from '../utils/localStorage'
import roomAlgorithm from '../utils/roomAlgo'

export const RoomContext = React.createContext();

export default function RoomContextProvider(props) {
    const {rentARoom} = roomAlgorithm;
    const [rooms, setRooms] = useState(rentARoom(4, 4))
    useEffect(() => {
        set("allAvailableRooms", JSON.stringify(rooms))
    }, [rooms])

    return (
        <RoomContext.Provider value={{rooms: rooms, setRooms: setRooms}}>
            {props.children}
        </RoomContext.Provider>
    )
}

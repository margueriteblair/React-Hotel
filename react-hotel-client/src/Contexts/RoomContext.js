import React, {useState, useEffect} from 'react'
import {get, set} from '../utils/localStorage'

export const RoomContext = React.createContext();

export default function RoomContextProvider(props) {
    const [rooms, setRooms] = useState(() => {

    })
    return (
        <RoomContext.Provider>
            {props.children}
        </RoomContext.Provider>
    )
}

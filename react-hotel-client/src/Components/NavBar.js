import React, {useContext} from 'react'
import Button from './Button';
import {RoomContext} from '../Contexts/RoomContext'
import {MoneyContext} from '../Contexts/MoneyContext'

export default function NavBar() {
    const {rooms, setRooms, bookedRooms, setBookedRooms} = useContext(RoomContext);
    const {balance, setBalance} = useContext(MoneyContext);
    return (
    <div style={{backgroundColor: "#4285f4"}}>
        <h1>Welcome to the CareerDevs Hotel, Coders!</h1>
    <h3>There are currently {bookedRooms.flat().length} rooms booked, and {rooms.flat().length} available :)</h3>
    <h3>All rooms cost the price listed as well as a $25 deposit you will get upon checking out.</h3>
    <h3>Your current balance is: ${balance}</h3>

            <div id="button-container" style={{justifyContent: "space-around"}}>
            <Button
            text="Book A Room!"
            onClick={() => {window.location.href = '/checkin'}}
            />
            <Button
            text="Check Out"
            onClick={() => {window.location = '/checkout'}}
            />
            </div>
        </div>
    )
}

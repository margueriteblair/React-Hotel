import React from 'react'
import Dropdown from './RoomDropdown';

export default function Rent() {
    let bookRoom = () => {
        let rentForm = Array.from(document.getElementById("rentForm").children)
        console.log(rentForm)
        for (const input of rentForm) {
            if (input.innerText === null || input.innerText === "") {
                return alert(`Unable to submit your booking request due to missing fields.`)
            } else {
                console.log("This is the other option")
            }
        }
    }
    return (
        <div>
            <h1>This is the rental page</h1>
            <Dropdown />
            <button type="submit" style={{marginTop: 7}}
            onClick={bookRoom}
            >Book Room Now</button>
        </div>
    )
}

import React from 'react'

export default function Form() {
    return (
        <div style={{marginTop: 20}} id="rentForm">
            <input
            name="firstName"
            placeholder="First Name"
            id="firstName"
            ></input>
            <input
            name="lastName"
            placeholder="Last Name"
            id="lastName"
            ></input>
        </div>
    )
}

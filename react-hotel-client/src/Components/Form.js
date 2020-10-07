import React from 'react'
import Button from './Button';

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

import React from 'react'
import Button from './Button';

export default function Form() {
    return (
        <div style={{marginTop: 20}}>
            <input
            name="firstName"
            placeholder="First Name"
            ></input>
            <input
            name="lastName"
            placeholder="Last Name"
            ></input>
            <input
            placeholder="SSC, Mother's Maiden Name, yada, yada.."
            ></input>
            {/* put choices in here */}
        </div>
    )
}

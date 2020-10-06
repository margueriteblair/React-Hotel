import React from 'react'

export default function Button(props) {
    return (
        <button
        onClick={props.onClick}
        style={{height: 40, width: 80, alignContent: "center", margin: 10}}
        >{props.text}</button>
    )
}

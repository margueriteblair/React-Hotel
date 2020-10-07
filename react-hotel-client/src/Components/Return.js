import React from 'react'

export default function Return() {
    return (
        <div>
            <h1>This is the return page.</h1>
            <input
            placeholder="Which room are you checking out of?"
            type="number"
            >
            </input>
            <button type="submit">Check Out</button>
            <br>
            </br>

            <textarea
            placeholder="Leave a comment about your stay..."
            style={{height: 300, width: 400, marginTop: 20}}
            ></textarea>
        </div>
    )
}

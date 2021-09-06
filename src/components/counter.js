import React, { useState } from 'react'

export default function Counter() {
    let [counter, setCounter] = useState(1)

    return (
        <h1>{counter}</h1>
    )
}
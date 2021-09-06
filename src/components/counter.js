import React, { useState } from 'react'

export default function Counter() {
    // const [counter, setCounter] = useState(100)
    const [userName, setName] = useState('Abdullah')
    const [genName, setGenName] = useState(['Maaz', 'Abdullah', 'Asim', 'Hammad', 'Aqeel'])

    // function addCounter() {
    //     setCounter(counter + 1)
    // }

    // function minusCounter() {
    //     setCounter(counter - 1)
    // }

    let randomName = () => {
        let i = Math.floor(Math.random() * 5)
        let newName = genName[i]
        setName(newName)
    }
    return (
        <div>
            <h1>{userName}</h1>
            <button onClick={randomName}>Generate Random Name</button>
        </div>
    )
}
'use client'

import { useState, useEffect } from "react"

export default function TaskList({button}) {
    const [array, setArray] = useState(['Olga', 'Ivan', 'Angelina'])

    useEffect(() => {
        setArray([...array, button])
    }, [button])

    return (
        <div>{array.map((elem) => <p>{elem}</p>)}</div>
    )
}
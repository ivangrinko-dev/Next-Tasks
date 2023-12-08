'use client'

import Link from "next/link";
import { useState } from 'react';

export default function Task13() {

    const array = ['Olga', 'Ivan', 'Angelina'];
    const [value, setValue] = useState('');

    function random() {
        let item = array[Math.floor(Math.random() * array.length)]
        setValue(item)
    }

    return (
        <>
            <p>
                13. Напишите скрипт, который при нажатии на кнопку будет выводить случайное
                сообщение из заранее заданного списка.
            </p>

            <button onClick={random}>Click13</button>
            <p>{value}</p>
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}
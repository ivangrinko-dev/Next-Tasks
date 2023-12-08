'use client'

import Link from "next/link";
import { useState } from 'react';

export default function Task14() {
const [value, setValue] = useState('')

function show(){
    setValue('Показать')
}

function rep(){
    setValue('')
}


    return (
        <>
            <p>
                14. Напишите код для отображения всплывающего окна с сообщением при
                наведении на определенный элемент на странице. (onMouseEnter onMouseLeave)
            </p>

            <h1>{value}</h1>
            <button onMouseEnter={show} onMouseLeave={rep}>Click14</button>
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}
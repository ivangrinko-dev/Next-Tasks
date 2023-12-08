'use client'

import Link from "next/link";
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import { useState } from "react"

export default function Task15() {
  
    const [button, setButton] = useState('')

    return (
        <>
            <p>
                15. Реализуйте компонент TaskList.js для отображения списка задач и AddTask.js для
                добавления новых задач. Страница page.js должна содержать оба компонента.
            </p>

            <TaskList button={button} />
            <AddTask setButton={setButton} />
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}
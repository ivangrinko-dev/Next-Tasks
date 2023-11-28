'use client'

import Link from "next/link"
import { useState } from "react";
export default function Task7() {
  const [flag, setFlag] = useState('')
  return (
    <>
      <p>Создайте кнопки "Показать текст", "Скрыть текст", параграф. Используйте useState
        для отслеживания текущего выбора пользователя. В зависимости от выбора,
        отображайте соответствующий контент</p>

<button onClick={()=> setFlag(true)}></button>
<button onClick={()=> setFlag(false)}></button>

<p>{flag ? 'hi' : ''}</p>
<p>
  <Link href='/'>back</Link>
</p>

    </>
  );
}
'use client'
import style from './style.module.css'
import { useState } from "react";

export default function Task6() {
  const [bool, setBool] = useState(true)

  return (

    <div className={bool ? style.light : style.dark}>
      <p className={bool ? style.lightP : style.darkP}>
        Создайте кнопку, которая позволяет пользователю переключаться между
        светлой и темной темой интерфейса. Используйте useState, чтобы
        отслеживать текущую тему. Применяйте соответствующие стили в зависимости
        от выбранной темы
      </p>
      <div><button onClick={() => setBool(!bool)}>{bool ? 'dark' : 'ligth'}</button></div>
    </div>

  );
}

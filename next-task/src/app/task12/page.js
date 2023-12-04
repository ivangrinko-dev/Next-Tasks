'use client'
import Client from './cient'

import input from './input/Input'
export default function Task11() {
function isShow(){
    alert('hi')
}


    return(
        <>
        <p>Реализуйте два компонента (серверный, клиентский). Первый – input.js, второй –
page.js. input.js содержит статичный input. Страница page.js содержит форму из
двух компонентов Input.js и кнопки, по нажатию на которую появляется alert с
сообщением ‘click</p>
    <input type="text" />
    <input type="text" />
    <button onClick={isShow}>click</button>
        </>
    )
    }
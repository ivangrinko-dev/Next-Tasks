import Link from "next/link";
import Input from "./input";

export default function Task11() {

    return (
        <>
            <p>
                11.Реализуйте два серверных компонента. Первый – Input.js, второй – page.js. Input.js
                содержит статичный input. Страница page.js содержит форму из двух компонентов
                Input.js и кнопки.
            </p>

            <Input></Input>
            <Input></Input>

            <button>Click11</button>
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}
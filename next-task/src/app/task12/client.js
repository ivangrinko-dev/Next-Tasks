'use client';

export default function Client({Input}) {
    function isShow() {
        alert("Hi")
    }
    return (
        <>
            <Input></Input>
            <Input></Input>

            <button onClick={isShow}>Click11</button>            
        </>
    )
}
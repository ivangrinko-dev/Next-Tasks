"use client";

import { useState } from "react";

export default function AddTask({ setButton }) {
  const [value, setValue] = useState("");

  function fillInp(event) {
    setValue(event.target.value);
  }

  function showInp() {
    console.log(value);
    setButton(value);
  }

  return (
    <>
      <input onChange={fillInp}></input>
      <button onClick={showInp}>КНОПКА</button>
      <button onClick={doCling}>очистить поле ввода</button>
    </>
  );
}

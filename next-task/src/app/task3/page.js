"use client";

import { useState } from "react";

export default function Task3() {
  const [value, setValue] = useState("");
  function doValue(event) {
    setValue(event.target.value);
  }

  function doShow() {
    console.log(value);
  }

  return (
    <>
      <input type="text" onChange={doValue} />
      <button onClick={doShow}>Click</button>
    </>
  );
}

"use client";
import style from "./style.module.css";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
      className={style.btn}
      onClick={(e) => {
        setInput(input + e.target.value);
      }}
      value={item}
      key={item}
      >
        {" "}
        {item}
      </button>
    );
  });
  
  return (
    
    <div className={style.wrapper}>
        <div className={style.show_input}>{input}</div>
        {" "}
        <div className={style.digits}>{calcBtns}</div>
        <div className={style.modifiers}>
          {/* clear button */}

          <button onClick={() => setInput(input.substr(0, input.length - 1))}>
            Clear
          </button>

          
          <button  onClick={() => setInput("")} value="">
            AC
          </button>
        </div>



        <div className={style.operations}>
         

          <button onClick={(e) => setInput(input + e.target.value)} value="+">
            +
          </button>

         
          <button onClick={(e) => setInput(input + e.target.value)} value="-">
            {" "}
            -{" "}
          </button>

          <button onClick={(e) => setInput(input + e.target.value)} value="*">
            {" "}
            *
          </button>

          <button onClick={(e) => setInput(input + e.target.value)} value="/">
            {" "}
            /
          </button>
         
          <button
            onClick={(e) => {
              try {
                setInput(
                  String(eval(input)).length > 3 &&
                    String(eval(input)).includes(".")
                    ? String(eval(input).toFixed(4))
                    : String(eval(input))
                );
              } catch (e) {
                console.log(e);
              }
            }}
            value="="
          >
            =
          </button>
        </div>
      </div>
    
  );
}

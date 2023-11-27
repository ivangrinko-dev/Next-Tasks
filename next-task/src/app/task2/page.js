"use client";
import { useState } from "react";
import style from "./style.module.css";
export default function Task2() {
  const [obj, setObj] = useState({});
  function fillInput(event) {
    setObj({ ...obj, [event.target.name]: event.target.value });
  }

  function doCheck() {
    if (
      !/^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(obj.email) ||
      !isNaN(obj.name) ||
      !isNaN(obj.surname) ||
      !obj.pwd.length
    ) {
      alert(false);
    }
    alert(true);
  }

  return (
    <>
      <p>
        Создайте форму для ввода имени, фамилии, адреса электронной почты и
        пароля. По клику на кнопку проверить вводимые данные на регулярные
        выражения. В случае успешной валидации – alert(true)
      </p>
      <div className={style.form}>
        <div>
          <input
            type="text"
            placeholder="Введите имя"
            name="name"
            onChange={fillInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Введите фамилию"
            surname="surname"
            onChange={fillInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Введите почту"
            enail="email"
            onChange={fillInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Введите пароль"
            pwd="pwd"
            onChange={fillInput}
          />
        </div>
        <button>ввод</button>
      </div>
    </>
  );
}

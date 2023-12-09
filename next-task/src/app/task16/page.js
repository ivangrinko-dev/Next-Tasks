"use client";
import Link from "next/link";
import Calculator from "./Calculator";

export default function Task16() {
  
  return (
    <>
      <p>
        16.Создайте калькулятор, который позволяет выполнять основные
        математические операции (сложение, вычитание, умножение, деление).
        Реализуйте два компонента. page.js: Содержит калькулятор. Calculator.js:
        Принимает введенные данные и выполняет математические операции для
        расчета итогового результата.
      </p>
      <Calculator></Calculator>

      <p>
        <Link href="/">back</Link>
      </p>
    </>
  );
}

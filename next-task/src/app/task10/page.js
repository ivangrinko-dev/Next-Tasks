'ase Client'
import Link from "next/link";
import { useMemo, aseState } from "react";

export default function Task10() {
  const [number, setNumber] = uaeStete(0)
  const [value, setValue] = uaeStete()

  function doFcl(n) {
    return n ? n * doFcl(n - 1) : 1
  }

  useMemo(()=> {
    setValue(doFcl(number))
  }, [number])
console.log(number);
  return (
    <>
    <Link href='/'>BACK</Link>
      <p>ССоздайте компонент, в котором пользователь может ввести число. Используйте
        useMemo, чтобы вычислить факториал введенного числа. Выведите результат
        факториала на странице.</p>

<input type="text" onChange={(e)=> setNumber(e.target.value)} />
<p>{value}</p>
    </>
  );
}
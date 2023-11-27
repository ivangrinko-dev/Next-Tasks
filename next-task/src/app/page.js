import Link from "next/link"
import styles from './page.module.css'

export default function Home() {
  return (
 <>
 <h1>hi</h1>
 <p><Link href={'/task1'}>Task1</Link></p>
 <p><Link href={'/task2'}>Task2</Link></p>
 <p><Link href={'/task3'}>Task3</Link></p>
 <p><Link href={'/task4'}>Task4</Link></p>
 <p><Link href={'/task5'}>Task5</Link></p>
 <p><Link href={'/task6'}>Task6</Link></p>
 <p><Link href={'/task7'}>Task7</Link></p>
 <p><Link href={'/task8'}>Task8</Link></p>
 <p><Link href={'/task9'}>Task9</Link></p>
 </>
  )
}

import axios from 'axios';
import Link from 'next/link'


export default async function Task9() {
const [value, setValue] = useState('')

async function getIp() {
  const res = await axios.get('https://api.ipify.org/?format=json')
   return res.data.ip
}

const result = await getIp()


  return (
    <>
    <Link href='/'>back</Link>
      <p>
        Создайте компонент, который выполняет запрос к API
        https://api.ipify.org/?format=json и отображает полученные данные в
        заголовок. (решить задачу через клиентский компонент)
      </p>
      <p>{result}</p>
    </>
  );
}


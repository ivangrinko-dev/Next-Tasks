export default function Task4() {
  const array = ["New York", "London", "Tokyo", "Paris", "Berlin"]
  return (
    <>
    <p>Создайте массив данных, представляющий элементы, которые вы хотите
отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"]</p>
<ul>{array.map( (elem) => (<li>{elem}</li>))}</ul>
    </>
  );
}
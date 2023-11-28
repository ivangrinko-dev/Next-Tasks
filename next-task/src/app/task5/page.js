'use client'
export default function Task5() {

  const array = ["New York", "London", "Tokyo", "Paris", "Berlin"]
  function doShow(event) {
    console.log(event.target.textContent);
  }

  return (
    <>
      <p>Создайте массив данных, представляющий элементы, которые вы хотите
        отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"]</p>
      <ul>{array.map((elem, index) => (<li key={index} onClick ={doShow}>{elem}</li>))}</ul>
    </>
  );


}
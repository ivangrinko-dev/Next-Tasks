import style from "./style.module.css";
export default function Task1() {
  return (
    <>
      <p>
        1. Создайте форму для ввода имени, фамилии, адреса электронной почты и
        пароля
      </p>
      <div className={style.form}>
        <div>
          <input type="text" placeholder="Введите имя" />
        </div>
        <div>
          <input type="text" placeholder="Введите фамилию" />
        </div>
        <div>
          <input type="text" placeholder="Введите почту" />
        </div>
        <div>
          <input type="text" placeholder="Введите пароль" />
        </div>
        <button>ввод</button>
      </div>
    </>
  );
}

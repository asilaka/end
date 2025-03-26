import React, { useState } from 'react'
import s from './End.module.scss'

const End = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // URL для отправки сообщения
    const token = '7683373660:AAHmp2XIMIe9dq5ol4sxCcZFtgJwTmrA1KQ'
    const chatId = '-4708168733'

    const message = `Новое сообщени: ${email}`

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })
      alert('Вы успешно прошли регистрацию')
    } catch (error) {
      console.error('Ошибка при отправке сообщения в Telegram:', error)
      alert('Произошла ошибка, попробуйте еще раз')
    }
  }

  return (
    <section>
      <div className="container">
        <div className={s.email}>
          <img src="/magic.png" alt="" />
          <div className={s.sign}>
            <h2>Sign up and never miss a deal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form onSubmit={handleSubmit} className={s.form}>
              <input
                placeholder="Enter your email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Sign up</button>
            </form>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default End

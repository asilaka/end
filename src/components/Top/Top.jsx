import React from 'react'
import s from './Top.module.scss'
const Top = () => {
  return (
    <>
    <div className={s.product}>
        <div className="container">
            <h1>Top Trending Product</h1>
            <div className={s.popular}>
                <div className={s.card}>
                <img src="/Rectangle 24589 (1).png" alt="" />
                <h2>Popular Product</h2>
                </div>
                <div className={s.card}>
                <img src="/Rectangle 24593 (1).png" alt="" />
                <h2>Popular Product</h2>
                </div>
                <div className={s.card}>
                <img src="/Rectangle 24594 (1).png" alt="" />
                <h2>Popular Product</h2>
                </div>
                <div className={s.card}>
                <img src="/Rectangle 24596 2.png" alt="" />
                <h2>Popular Product</h2>
                </div>
                <div className={s.card}>
                <img src="/Rectangle 24597.png" alt="" />
                <h2>Popular Product</h2>
                </div>
                <div className={s.card}>
                <img src="/Rectangle 24595 2.png" alt="" />
                <h2>Popular Product</h2>
                </div>
                <div className={s.card}>
                <img src="/Rectangle 24595 (1).png" alt="" />
                <h2>Popular Product</h2>
                </div>
                <div className={s.card}>
                <img src="/Rectangle 24596 (1).png" alt="" />
                <h2>Popular Product</h2>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Top
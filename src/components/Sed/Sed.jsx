import React from 'react';
import s from './Sed.module.scss';
const Sed = () => {
  return (
    <section>
      <div className={s.cards}>
        <div className={s.all}>
          <div className={s.card1}>
            <div className={s.image}>
              <img src="/HG.png" alt="" />
            </div>

            <div className={s.title}>
              <h2>high quality artwork</h2>
              <p>Sed ut perspiciatis unde omnis stenatus</p>
            </div>
          </div>
          <div className={s.card2}>
            <div className={s.image}>
              <img src="/Vector (1).png" alt="" />
            </div>
            <div className={s.title2}>
              <h2>Customer Services</h2>
              <p>Sed ut perspiciatis unde omnis stenatus</p>
            </div>
          </div>
        </div>

        <div className={s.fast}>
          <div className="card3">
            <img src="/car.png" alt="" />
            <h2>Fast delivery</h2>
            <p>Sed ut perspiciatis unde omnis stenatus</p>
          </div>
          <div className="card4">
            <img className={s.key} src="/keys.svg" alt="" />
            <h2>Secure Payments</h2>
            <p>Sed ut perspiciatis unde omnis stenatus</p>
          </div>
          <div className="card5">
            <img src="/Vector (2).png" alt="" />
            <h2>100 days return</h2>
            <p>Sed ut perspiciatis unde omnis stenatus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sed;

import React from "react";
import s from "./Total.module.scss";
const Total = () => {
  return (
    <>
      <div className={s.total}>
        <div className={s.cards}>
          <div className={s.card}>
            <img src="/Vector.png" alt="" />
            <h2>8,344+</h2>
            <p>Total Metal Poster</p>
          </div>
          <div className={s.card}>
            <img src="/person.png" alt="" />
            <h2>300+</h2>
            <p>Total Characters</p>
          </div>
          <div className={s.card}>
            <img src="/person.png" alt="" />
            <h2>300+</h2>
            <p>Total Characters</p>
          </div>
          <div className={s.card}>
            <img src="/Vector.png" alt="" />
            <h2>8,344+</h2>
            <p>Total Metal Poster</p>
          </div>
          <div className={s.card}>
            <img src="/person.png" alt="" />
            <h2>300+</h2>
            <p>Total Characters</p>
          </div>{" "}
          <div className={s.card}>
            <img src="/person.png" alt="" />
            <h2>300+</h2>
            <p>Total Characters</p>
          </div>
        </div>

        <div className={s.demon}>
          <img className={s.titan}  src="/titan.png" alt="" />
        </div>
        <div className={s.amet}>
          <img className={s.name} src="/name.png" alt="" />

<div className={s.dolor}>
  <h1>50%</h1>
  <h2>Demon <br />
  Discount</h2>
  <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> ut aliquam,</p>
</div>
        </div>
      </div>
    </>
  );
};

export default Total;

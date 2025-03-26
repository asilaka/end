import React from 'react';
import { Link } from 'react-router-dom';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.fon}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.step}>
            <h1>Dive into the Anime Universe with Geekozi!</h1>
            <p>
              Explore epic stories, thrilling battles, and your favorite
              characters. Step into vibrant worlds filled with magic, adventure,
              and unforgettable emotions!
            </p>
            <Link to={'/discover'}>
              <button>Play game</button>
            </Link>
          </div>
          <div className={s.fire}>
            <img src="/knight.png" alt="knight" />
            <img src="/naruto.png" alt="naruto" />
            <img src="/academy.png" alt="academy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

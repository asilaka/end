import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Ensure Autoplay styles are imported
import 'swiper/css/effect-coverflow';

import s from './World.module.scss';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const images = [
  '/man9.jpg',
  '/man2.jpg',
  '/man5.jpg',
  '/man4.jpg',
  '/man3.jpg',
  '/man1.1.jpg',
  '/man8.jpg',
  '/man7.jpg',
  '/man4.jpg',
  '/man6.jpg',
];

const World = () => {
  return (
    <div className={s.sliderContainer}>
      <h1 className={s.solo}>Solo leveling</h1>
        <Swiper
          effect={'coverflow'}
          // centeredSlides={true}
          slidesPerView={5}
          modules={[EffectCoverflow, Autoplay]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className={s.swiper}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Anime Slide ${index + 1}`}
                className={s.slideImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default World;

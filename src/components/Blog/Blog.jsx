import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import s from "./Blog.module.scss";


const AnimeNewsSliderAndBlog = () => {
  const cards = [
    {
      img: "/luffi.png",
      title:
        "Lorem ipsum dolor sit amet elitcon sectetur adipiscing elit sedo dolor",
      
      author: "Geekozi",
      
    },
    {
      img: "/ulibka.png",
      title:
        "Lorem ipsum dolor sit amet elitcon sectetur adipiscing elit sedo dolor",
     
      author: "Geekozi",
     
    },
    {
      img: "/chel.png",
      title:
        "Lorem ipsum dolor sit amet elitcon sectetur adipiscing elit sedo dolor",
   
      author: "Geekozi",
     
    },
    {
      img: "/luffii.png",
      title:
        "Lorem ipsum dolor sit amet elitcon sectetur adipiscing elit sedo dolor",
    
      author: "Geekozi",
     
    },
    {
      img: "/mech.png",
      title:
        "Lorem ipsum dolor sit amet elitcon sectetur adipiscing elit sedo dolor",
     
      author: "Geekozi",
      
    },
  ];

  return (
    <>

    
      {/* Anime News Slider Section */}
      <section className="anime-news-slider">
        <div className="container">
          <h2 className={s.sectiontitle}>Latest News</h2>
          <Swiper
            modules={[Autoplay]} // Removed Pagination and Navigation modules
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={s.cart}>
                  <div
                    // style={{ backgroundImage: `url(${card.img})`,minHeight:'250px' }}
                    className={s.cardImgContainer}
                  >
                    <img src={card.img} alt={card.title} className="card-img" />
                    <div className={s.categoryOverlay}>{card.category}</div>
                  </div>
                  <div className={s.cardContent}>
                    <h3 className={s.cardTitle}>{card.title}</h3>
                    <div className={s.cardFooter}>
                      <div className={s.info}>
                        <img
                          src="/Ellipse 187.png"
                          alt="Author"
                          className={s.authorAvatar}
                        />
                        <div>
                          <span className={s.author-name}>{card.author}</span>
                          <span className={s.date}>{card.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AnimeNewsSliderAndBlog;

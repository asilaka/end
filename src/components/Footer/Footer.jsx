import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Heart } from 'lucide-react';
import s from './Footer.module.scss';
import { useAppContext } from '../../context';

const Footer = () => {
  const { heart, setHeart } = useAppContext();
  const [likedItems, setLikedItems] = useState(() => {
    const saved = localStorage.getItem("likedItems");
    return saved ? JSON.parse(saved) : {}; // Загружаем из localStorage
  });
  
  // Обновляем localStorage при изменении likedItems
  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);
  
  const toggleLike = (title, id, img, url) => {
    setLikedItems((prev) => {
      const updatedLikedItems = {
        ...prev,
        [title]: !prev[title], 
      };
  
      setHeart((prev) => {
        const isExist = prev.some((item) => item.id === id);
        if (isExist) {
          return prev.filter((item) => item.id !== id);
        } else {
          return [...prev, { title, id, img, url }];
        }
      });
  
      return updatedLikedItems;
    });
  
    localStorage.setItem("likedItems", JSON.stringify(likedItems)); // Сохраняем в localStorage
  };
  
    

  const animeData = [
    {
      title: 'One Piece',
      id: 1,
      img: 'https://m.media-amazon.com/images/I/81rEhhwbubL.jpg',
      url: 'https://www.youtube.com/watch?v=MCb13lbVGE0',
    },
    {
      title: 'Jujutsu Kaisen',
      id: 2,
      img: 'https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg',
      url: 'https://www.youtube.com/watch?v=pkKu9hLT-t8',
    },
    {
      title: 'My Hero Academia',
      id: 3,
      img: 'https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
      url: 'https://www.youtube.com/watch?v=-77UEct0cZM',
    },
    {
      title: 'Naruto',
      id: 4,
      img: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      url: 'https://www.youtube.com/watch?v=QczGoCmX-pI&t=8s',
    },
    {
      title: 'Leveling Up Alone',
      id: 5,
      img: 'https://animemania7.wordpress.com/wp-content/uploads/2020/09/wp4275387.jpg?w=921',
      url: 'https://www.youtube.com/watch?v=lOg4bCztm4g',
    },
    {
      title: 'Demon Slayer',
      id: 6,
      img: 'https://assets-prd.ignimgs.com/2021/10/14/demon-slayer-the-hinokami-chronicles-button-fin-1634173484356.jpg',
      url: 'https://www.youtube.com/watch?v=pmanD_s7G3U',
    },
    {
      title: 'Black Clover',
      id: 7,
      img: 'https://anilibria.top/storage/releases/posters/5255/8uLSlG62NcQIpYF32mvJ4nPJgqiSrrHX.webp',
      url: 'https://www.youtube.com/watch?v=PrgxJ1_sUcs',
    },
    {
      title: 'Death Note',
      id: 8,
      img: 'https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg',
      url: 'https://www.youtube.com/watch?v=NlJZ-YgAt-c',
    },
  ];

  return (
    <section>
      <div className="container">
        <div className={s.start}>
          <h1>Shop by Anime</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
            nonummy nibh euismod tincidunt ut <br /> laoreet dolore magn. Lorem
            ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
            nonummy
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={s.cards}
        >
          {animeData.map(({ title, id, img, url }) => (
            <SwiperSlide key={id}>
              <div className="card" style={{ position: 'relative' }}>
                <img
                  src={img}
                  alt={title}
                  onClick={() => window.open(url, '_blank')}
                  style={{ cursor: 'pointer' }}
                />
                <h2>{title}</h2>
                <button
                  onClick={() => {
                    toggleLike(title, id, img, url);
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '-2px', // Сдвиг кнопки ближе к низу
                    right: '5px', // Сдвиг кнопки вправо
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Heart
                    style={{
                      width: '30px',
                      height: '30px',
                      fill: likedItems[title] ? 'red' : 'transparent',
                      stroke: likedItems[title] ? 'red' : 'black',
                    }}
                  />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={s.pagination}></div>
      </div>
    </section>
  );
};

export default Footer;

import React, { useState } from 'react';
import s from './Wrap.module.scss';

const images = {
  'One Piece': {
    src: 'https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTYmlge88J4-0ouuHWDsP8VZBuoM_3FPfGZo-YMOixHeB1qduoBni9iahxi3zkEXNvwZ4Xez_JoRDiPq3hyLRyef43_fNRUJziyD.jpg?r=d90',
    link: 'https://youtu.be/1CyD0cr6k6w',
  },
  'Jujutsu Kaisen': {
    src: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/jujutsu-kaisen-s-main-cast.jpg',
    link: 'https://youtu.be/k18gSPjWDM0?t=5',
  },
  'Naruto': {
    src: 'narutos.jpg',
    link: 'https://youtu.be/GOBZIdBKaHw',
  },
};

const Wrap = () => {
  const [selectedImage, setSelectedImage] = useState(images['One Piece']);
  const [activeButton, setActiveButton] = useState('One Piece');

  return (
    <div className={s.nep}>
      <div className="container">
        <div className={s.title}>
          <h1>Shop by Anime</h1>
          <p>
            Explore epic stories, thrilling battles, and your favorite
            characters. <br /> Step into vibrant worlds filled with magic, adventure,
            and unforgettable emotions!
          </p>
        </div>
        <div className={s.wrap}>
          <div className={s.btns}>
            {Object.keys(images).map((anime) => (
              <button
                key={anime}
                onClick={() => {
                  setSelectedImage(images[anime]);
                  setActiveButton(anime);
                }}
                className={activeButton === anime ? s.activeButton : ''}
              >
                {anime}
              </button>
            ))}
          </div>
          <a href={selectedImage.link} target="_blank" rel="noopener noreferrer">
            <img src={selectedImage.src} alt="Anime" className={s.image} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wrap;

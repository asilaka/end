import { useAppContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import s from './Wishlist.module.scss';
import { useState, useEffect } from 'react';

const Wishlist = () => {
  const { heart, setHeart } = useAppContext();
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  // Загружаем из localStorage при монтировании компонента
  const loadHeartFromLocalStorage = () => {
    const savedHeart = localStorage.getItem('heart');
    return savedHeart ? JSON.parse(savedHeart) : [];
  };

  const loadLikedItemsFromLocalStorage = () => {
    const savedLikedItems = localStorage.getItem('likedItems');
    return savedLikedItems ? JSON.parse(savedLikedItems) : {};
  };

  const [likedItems, setLikedItems] = useState(loadLikedItemsFromLocalStorage);

  useEffect(() => {
    // Синхронизируем heart с localStorage при загрузке страницы
    const savedHeart = loadHeartFromLocalStorage();
    if (savedHeart.length > 0) {
      setHeart(savedHeart);  // обновляем состояние heart с данными из localStorage
    }
  }, [setHeart]);

  useEffect(() => {
    // Обновляем localStorage, когда heart изменяется
    if (heart.length > 0) {
      localStorage.setItem('heart', JSON.stringify(heart));
    }
  }, [heart]);

  // Функция для удаления товара из избранного
  const removeFromWishlist = (id, title) => {
    // Удаляем товар из heart (из контекста)
    const updatedHeart = heart.filter((item) => item.id !== id);
    setHeart(updatedHeart);  // обновляем состояние heart в контексте
    localStorage.setItem('heart', JSON.stringify(updatedHeart));  // обновляем localStorage

    // Удаляем товар из likedItems
    setLikedItems((prev) => {
      const updatedLikedItems = { ...prev };
      delete updatedLikedItems[title];
      localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));  // обновляем localStorage
      return updatedLikedItems;
    });
  };

  return (
    <section className={s.like}>
      <button onClick={goBack} className={s.backButton}>
        Назад
      </button>
      <h1>Избранное</h1>

      {heart.length === 0 ? (
        <p>Ваш список избранных пуст.</p>
      ) : (
        <div className={s.cards}>
          {heart.map(({ title, id, img, url }) => (
            <div key={id} className={s.card}>
              {/* Кнопка для удаления с крестиком */}
              <button
                onClick={() => removeFromWishlist(id, title)}
                className={s.closeButton}
              >
                ✖
              </button>

              {/* Картинка товара */}
              <img
                src={img}
                alt={title}
                onClick={() => window.open(url, '_blank')}
                className={s.cardImage}
              />
              <h2 className={s.cardTitle}>{title}</h2>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.scss';
import { Menu, X } from 'lucide-react';
import { useAppContext } from '../../context';

const Header = () => {
  const { countHeart } = useAppContext();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={s.kot}>
      <div className={s.start}>
        <div className={s.container}>
          <div className={s.main}>
            <img
              className={s.tyanka}
              src="/anime-girl.gif"
              alt="Tyanka"
              onClick={scrollToTop}
            />
            <div className={s.burger} onClick={toggleMenu}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </div>
            <nav className={`${s.menu} ${isMenuOpen ? s.active : ''}`}>
           
              <Link to="/Akk" onClick={() => setIsMenuOpen(false)}>
                Join
                <img className="man" src="/man.svg" alt="Join" />
              </Link>
              <Link
                to="/Wishlist"
                onClick={() => setIsMenuOpen(false)}
                className={s.link}
              >
                Wishlist
                <img src="/heart.svg" alt="Wishlist" />
              </Link>
          
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

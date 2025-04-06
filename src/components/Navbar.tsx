import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import '../styles/Navbar.css';
import Logo from '/assets/icons/tirano-logo-principal.png';
import BookNowButton from './BookNowButton';
import branches from '../data/branches.json';

export default function Navbar() {
  const [isInvisible, setInvisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null); // Referencia al contenedor del Navbar

  useEffect(() => {
    const handleScroll = () => {
      setInvisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        menuOpen
      ) {
        setMenuOpen(false); // Cierra el menú si se hace clic fuera
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [menuOpen]);

  const navbarClass = `navbar ${isInvisible ? 'invisible' : ''}`;
  const navLinksClass = `nav-links ${menuOpen ? 'open' : ''}`;
  const menuButtonClass = `menu-button ${menuOpen ? 'open' : ''}`;

  return (
    <nav className={navbarClass} ref={navbarRef}>
      <div className="contain">
        <div className="main-nav">
          <div className="logo">
            <img src={Logo} alt="Logo" className="icono" />
            <div className="logo-title">Tiranos</div>
          </div>
          <div className={navLinksClass}>
            {/* <a className="nav-link" href="#Inicio">
              Inicio
            </a> */}
            <a className="nav-link" href="#Servicios">
              Servicios
            </a>
            <a className="nav-link" href="https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?pId=805178#modal-gallery">
              Galería
            </a>
            <a className="nav-link" href="#Sucursales">
              Sucursales
            </a>
            <a className="nav-link" href="https://wa.me/+56972111501" target="_blank" rel="noopener noreferrer">
              Contáctanos
            </a>
            {/* <div className='book-now-show'>
              {menuOpen && (<BookNowButton data={branches}/>)}
            </div> */}
          </div>
          <button className={menuButtonClass} onClick={handleMenuToggle}>
            {menuOpen ? (
              <span className="menu-icon" style={{color:'var(--primary)'}}>✕</span>
            ) : (
              <Menu size={24} style={{color:'var(--primary)'}} />
            )}
          </button>
          <div className='book-now-show-desktop'>
            <BookNowButton data={branches}/>
          </div>
          {/* <button className="book-now-button">
          <a
                  href='https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?pId=805178'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="offer-link"
                >
                  Agenda ahora
                  </a>
                  </button> */}
        </div>
      </div>
    </nav>
  );
}

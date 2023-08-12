import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './navbar.module.scss'
import classNames from 'classnames';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.currentTarget.classList.toggle(styles.navbar__dropdown_open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbar__logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div ref={menuRef} className={classNames(styles.navbar__list, isMenuOpen ? styles.navbar__list_active : styles.navbar__list)}>
        <Link to="/about" className={styles.navbar__link}>Home</Link>
        <div className={styles.navbar__dropdown} onClick={toggleDropdown}>
          <span className={styles.navbar__dropdown_trigger}>About</span>
          <div className={styles.navbar__dropdown_list}>
            <Link to="/clients" className={styles.navbar__dropdown_link}>Clients</Link>
            <Link to="/team" className={styles.navbar__dropdown_link}>Our team</Link>
            <Link to="/testimonials" className={styles.navbar__dropdown_link}>Testimonials</Link>
          </div>
        </div>
        <Link to="/about" className={styles.navbar__link}>Service</Link>
        <Link to="/about" className={styles.navbar__link}>Portfolio</Link>
        <Link to="/about" className={styles.navbar__link}>Achievements</Link>
      </div>
      <div>
        <select className={styles.navbar__select}>
          <option value="en" className={styles.navbar__option}>EN</option>
          <option value="uz" className={styles.navbar__option}>Uz</option>
          <option value="ru" className={styles.navbar__option}>RU</option>
        </select>
        <Link to="tel:+998997479727" className={styles.navbar__phone}>+(000) 000 00 00</Link>
      </div>
    </nav>
  )
}

export default Navbar
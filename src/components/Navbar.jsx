import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import styles from '../css/navbar.module.css';
import links from '../constants/links';
import social from '../constants/social-links';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Logo" />
          <button
            type="button"
            className={styles.logoBtn}
            onClick={toggleNavbar}
          >
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {social.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'gatsby';

import styles from '../css/footer.module.css';
import links from '../constants/links';
import social from '../constants/social-links';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
        {social.map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Piyush {new Date().getFullYear}
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'gatsby';

import styles from '../css/footer.module.css';
import links from '../constants/links';
import social from '../constants/social-links';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}></div>
    </footer>
  );
};

export default Footer;

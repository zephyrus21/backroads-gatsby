import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import styles from '../css/error.module.css';

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops! Page not found">
          <Link to="/" className="btn-white">
            back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  );
};

export default error;

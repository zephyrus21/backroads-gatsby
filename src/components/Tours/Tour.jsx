import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import { FaMap } from 'react-icons/fa';
import styles from '../../css/tour.module.css';

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour;
  let mainImage = images[0].fluid;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="tour" />
        <Link className={styles.link} to={`/tours/${slug}`} />
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Tour;

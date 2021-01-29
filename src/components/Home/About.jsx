import React from 'react';

import Title from '../Title.styled';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about-img" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint
            ipsum culpa ipsam iure delectus doloribus quam obcaecati ullam
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint
            ipsum culpa ipsam iure delectus doloribus quam obcaecati ullam
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;

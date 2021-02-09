import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import styles from '../css/template.module.css';

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    images,
  } = data.tour;

  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => (
              <Img key={index} fluid={item.fluid} className={styles.image} />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>Starts on : {start}</h4>
          <h4>duration : {days}</h4>
          <p className={styles.desc}>{description}</p>
        </div>
      </section>
    </Layout>
  );
};

export default TourTemplate;

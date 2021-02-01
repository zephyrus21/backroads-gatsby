import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Tour from '../Tours/Tour';
import Title from '../Title.styled';
import styles from '../../css/items.module.css';

const getTours = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const {
    featuredTours: { edges },
  } = useStaticQuery(getTours);

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {edges.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>
      <Link to="/tours" className="btn-primary">
        all tours
      </Link>
    </section>
  );
};

export default FeaturedTours;

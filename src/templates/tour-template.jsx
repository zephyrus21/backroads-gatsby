import React from 'react';
import { graphql } from 'gatsby';

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

  return <div>{name}</div>;
};

export default TourTemplate;

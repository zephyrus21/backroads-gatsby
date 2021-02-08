import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import ToursComponent from '../components/Tours/Tours';

const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4060, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Tours = () => {
  const { defaultBcg } = useStaticQuery(query);

  return (
    <Layout>
      <StyledHero img={defaultBcg.childImageSharp.fluid} />
      <ToursComponent />
    </Layout>
  );
};

export default Tours;

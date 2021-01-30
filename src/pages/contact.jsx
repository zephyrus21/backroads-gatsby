import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4060, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Contact = () => {
  const { connectBcg } = useStaticQuery(query);

  return (
    <Layout>
      <StyledHero img={connectBcg.childImageSharp.fluid} />
    </Layout>
  );
};

export default Contact;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4060, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Blog = () => {
  const { blogBcg } = useStaticQuery(query);

  return (
    <Layout>
      <StyledHero img={blogBcg.childImageSharp.fluid} />
    </Layout>
  );
};

export default Blog;

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

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

const Home = () => {
  const { defaultBcg } = useStaticQuery(query);
  return (
    <Layout>
      <StyledHero home="true" img={defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptate ratione"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  );
};

export default Home;

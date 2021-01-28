import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      Hello Piyush Pandey!
      <Link to="/blog">Blog</Link>
    </Layout>
  );
}

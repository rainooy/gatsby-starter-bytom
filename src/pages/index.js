import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';

const Home = () => (
  <Layout>
    <SEO 
      title="Home page" 
      keywords={[`keyword`]}
    />
    <div style={{lineHeight: '100vh', textAlign: 'center'}}>Hey!</div>
  </Layout>
);

export default Home;

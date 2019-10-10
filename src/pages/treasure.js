import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/Seo';

const SecondPage = () => (
  <Layout>
    <SEO title="treasure" />
    <h1>百宝箱页面</h1>
    <p>哦哦哦哦哦也</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

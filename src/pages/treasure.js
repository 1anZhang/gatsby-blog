import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/Seo';

const TreasurePage = () => (
  <Layout>
    <SEO title="treasure" />
    <h1>百宝箱页面</h1>
    <Link to="/color">Color</Link>
  </Layout>
);

export default TreasurePage;

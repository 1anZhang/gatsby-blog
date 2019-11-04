import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const TreasurePage = () => (
  <Layout>
    <SEO title="treasure" />
    <h1>百宝箱页面</h1>
    <Link to="/color">Color</Link>
    <Link to="/bezier">Bezier Curve</Link>
  </Layout>
);

export default TreasurePage;

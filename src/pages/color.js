import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/Seo';
import ColorSelect from '../components/ColorSelect';

const TreasurePage = () => (
  <Layout>
    <SEO title="color" />
    <h1>color Palatte</h1>
    <ColorSelect />
  </Layout>
);

export default TreasurePage;

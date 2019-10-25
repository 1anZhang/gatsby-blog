import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ColorSelect from '../components/ColorSelect';

const TreasurePage = () => (
  <Layout>
    <SEO title="color" />

    <ColorSelect />
  </Layout>
);

export default TreasurePage;

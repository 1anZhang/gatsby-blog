import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/Seo';
import ColorSelect from '../components/ColorSelect';

const TreasurePage = () => (
  <Layout>
    <SEO title="color" />
    
    <ColorSelect />
  </Layout>
);

export default TreasurePage;

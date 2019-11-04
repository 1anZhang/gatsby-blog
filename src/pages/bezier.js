import React from 'react';

import { Bezier, Seo, Layout } from '../components';

const TreasurePage = () => (
  <Layout>
    <Seo title="bezier-curve" />

    <Bezier x1={0.3} y1={0.1} x2={0.1} y2={0.8}/>
    <Bezier x1={0.3} y1={0.4} x2={0.1} y2={0.8}/>
  </Layout>
);

export default TreasurePage;

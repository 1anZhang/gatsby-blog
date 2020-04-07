import React, { useState } from 'react';

import { Bezier, Seo, Layout } from '../components';

const TreasurePage = () => {
  const [o1, setO1] = useState([0.3, 0.2, 0.9, 0, 2]);
  const [o2, setO2] = useState([0.2, 0.9, 0.9, 0.1]);
  const handleChange1 = (x1, y1, x2, y2) => {
    setO1([x1, y1, x2, y2]);
  };
  const handleChange2 = (x1, y1, x2, y2) => {
    setO2([x1, y1, x2, y2]);
  };

  return (
    <Layout>
      <Seo title="bezier-curve" />
      <h1>贝塞尔曲线</h1>
      <Bezier value={o1} onAnchorChange={handleChange1} />
      <Bezier value={o2} onAnchorChange={handleChange2} />
    </Layout>
  );
};

export default TreasurePage;

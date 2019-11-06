import React, {useState} from 'react';

import { Bezier, Seo, Layout } from '../components';

const TreasurePage = () => {
  const [o1, setO1] = useState([{ x: 0.3, y: 0.1},{ x: 0.1, y: 0.8 }]);
  const [o2, setO2] = useState([{ x: 0.3, y: 0.4},{ x: 0.1, y: 0.8 }]);
  const handleChange1 = (x, y, i) => {
    let t = [...o1];
    t[i-1] = {x, y};
    setO1(t);
  };
  const handleChange2 = (x, y, i) => {
    let t = [...o2];
    t[i-1] = {x, y};
    setO2(t);
  };

  return (
    <Layout>
      <Seo title="bezier-curve" />

      <Bezier
        x1={o1[0].x}
        y1={o1[0].y}
        x2={o1[1].x}
        y2={o1[1].y}
        onAnchorChange={handleChange1}
      />
      <Bezier
        x1={o2[0].x}
        y1={o2[0].y}
        x2={o2[1].x}
        y2={o2[1].y}
        onAnchorChange={handleChange2}
      />
    </Layout>
  );
};

export default TreasurePage;

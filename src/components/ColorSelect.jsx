/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import Color from '../utils/color';
import { copyToClipboard } from '../utils/lo';

const Wrapper = styled.div`
  padding: 24px;
  max-width: 400px;
  border: 1px solid #adf;
  border-radius: 6px;
`;

const ColorInput = styled.input``;

const ColorList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 210px;
`;

const ColorItem = styled.div`
  position: relative;
  margin-bottom: 3px;
  width: 64px;
  height: 64px;
  border-radius: 6px;
  background: ${prop => prop.color};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transform-origin: center;
    z-index: 1;
    &::after {
      content: '${prop => prop.color}';
      position: absolute;
      bottom: 2px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 51px;
      font-size: 12px;
      color: ${prop => prop.index > 4 ? '#fff' : '#000'};
      z-index: 2;
    }
  }
`;

const ColorSelect = () => {
  const [color, setColor] = useState('#e28f04');
  const handleColorChange = e => {
    setColor(e.target.value);
  };

  const handleCopy = (color) => {
    copyToClipboard(color);
  }

  const cc = new Color(color);
  const cl = cc.getColorGradeList();

  return (
    <Wrapper>
      <ColorInput type="color" onChange={handleColorChange} value={color} />
      <ColorList>
        {cl.map((c, i) => (
          <ColorItem color={c} index={i} key={c} onClick={() => handleCopy(c)}/>
        ))}
      </ColorList>
    </Wrapper>
  );
};

export default ColorSelect;

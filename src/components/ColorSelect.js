/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import Color from '../utils/color';

const Wrapper = styled.div`
  padding: 24px;
  max-width: 400px;
  border: 1px solid #adf;
  border-radius: 6px;
`

const ColorInput = styled.input`

`

const ColorList = styled.div`
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
  width: 120px;
`

const ColorItem = styled.div`
  margin-bottom: 3px;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: ${prop => prop.color};
`


const ColorSelect = () => {
  const [color, setColor] = useState('#FCF040');
  const handleColorChange = (e) => {
    setColor(e.target.value)
  };

  const cc = new Color(color);
  const cl = cc.getColorGradeList();

  return (
    <Wrapper>
      <ColorInput type='color' onChange={handleColorChange} value={color} />
      <ColorList>
        {
          cl.map((c) => (
            <ColorItem color={c} key={c} />
          ))
        }
      </ColorList>
    </Wrapper>
  );
};

export default ColorSelect;

import React, { useState } from 'react';
import styled from 'styled-components';
import { fancyColor } from 'fancy-color';
import { SketchPicker } from 'react-color';
import { copyToClipboard } from '../utils/lo';

const Wrapper = styled.div`
  padding: 24px;
  max-width: 400px;
`;

const ColorList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 256px;
  border: 1px solid #adf;
  border-radius: 6px;
  padding: 24px;
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
      color: ${prop => (prop.index > 4 ? '#fff' : '#000')};
      z-index: 2;
    }
  }
`;

const ColorPickWrapper = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
`;

const ColorContent = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${prop => prop.color};
  cursor: pointer;
`;
const PickerWrapper = styled.div`
  position: absolute;
  z-index: 2;
`;

const CloseWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ColorSelect = () => {
  const [color, setColor] = useState('#e28f04');
  const [pickerVisible, setVisible] = useState(false);
  const handleChangeComplete = color => {
    setColor(color.hex);
  };

  const handleCopy = color => {
    copyToClipboard(color);
  };
  const cc = fancyColor(color);
  const colorGradeList = cc.getColorGradeList();

  return (
    <Wrapper>
      <ColorPickWrapper>
        <ColorContent
          onClick={() => setVisible(true)}
          color={color}
        ></ColorContent>
        {pickerVisible && (
          <PickerWrapper>
            <CloseWrapper onClick={() => setVisible(false)}></CloseWrapper>
            <SketchPicker
              type="color"
              onChangeComplete={handleChangeComplete}
              color={color}
            />
          </PickerWrapper>
        )}
      </ColorPickWrapper>
      <ColorList>
        {colorGradeList.map((c, i) => (
          <ColorItem
            color={c.toHexString()}
            index={i}
            key={i}
            onClick={() => handleCopy(c.toHexString())}
          />
        ))}
      </ColorList>
    </Wrapper>
  );
};

export default ColorSelect;

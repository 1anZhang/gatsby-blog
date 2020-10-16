import React, { useState } from 'react';
import styled from 'styled-components';

import FullScreenLayout from '../components/FullScreenLayout';
import SEO from '../components/Seo';
import NipponItem from '../components/NipponItem';

import BackgroundImage from '../images/treasure/nippon/texture.png';
import GlossImage from '../images/treasure/nippon/gloss.png';

import { NIPPON_COLOR } from '../utils/nippon';

const Background = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.c || '#fad',
  },
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url(${BackgroundImage});
  transition: background-color 2s ease-in;
`;

const BackgroundGlose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 478px;
  background: url(${GlossImage}) repeat-x;
`;

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  position: relative;
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

const Left = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  width: 506px;
`;

const ColorBar = styled.div`
  position: absolute;
  left: 580px;
  top: 40px;
  width: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const Label = styled.div`
  margin-top: 10px;
  margin-bottom: 6px;
  font-size: 12px;
  line-height: 1;
  color: #fff;
  font-family: 'Roboto';
`;

const CmykComponent = ({ label, value, color }) => {
  let perimeter = Math.PI * 2 * 23;
  perimeter = (perimeter * value) / 100;
  const Wrapper = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    height: 90px;
    circle {
      transition: stroke-dasharray 0.25s;
    }
  `;

  return (
    <Wrapper>
      <Label>{label}</Label>
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="23"
          strokeWidth="2"
          stroke="#FFF"
          strokeOpacity="0.3"
          fill="none"
        ></circle>
        <circle
          cx="25"
          cy="25"
          r="23"
          strokeWidth="2"
          stroke={color}
          fill="none"
          transform-origin="center"
          transform="rotate(270)"
          strokeDasharray={`${perimeter} 1000`}
        ></circle>
        <text
          x="25"
          y="26"
          fontSize="22"
          fill={color}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Roboto"
        >
          {value}
        </text>
      </svg>
    </Wrapper>
  );
};

const RgbComponent = ({ label, value, color }) => {
  const Wrapper = styled.div`
    height: 60px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  `;
  const Value = styled.div`
    font-size: 20px;
    color: #fff;
    text-align: right;
    font-family: 'Roboto';
  `;
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Wrapper>
  );
};

const ColorName = styled.div`
  position: absolute;
  left: 720px;
  top: 40px;
  /* width: 50px; */
`;

const Honji = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  font-size: 56px;
  color: #fff;
  writing-mode: vertical-rl;
`;

const Romaji = styled.div`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

const NipponPage = () => {
  const [currentColor, setCurrentColor] = useState(
    NIPPON_COLOR[Math.round(Math.random() * NIPPON_COLOR.length)]
  );

  const onChangeItem = item => {
    setCurrentColor(item);
  };

  return (
    <FullScreenLayout>
      <SEO title="nippon color" />
      <Background c={currentColor.hex}>
        <BackgroundGlose></BackgroundGlose>
        <InnerContainer>
          <ColorBar>
            <CmykComponent label="C" value={currentColor.c} color="#0093D3" />
            <CmykComponent label="M" value={currentColor.m} color="#CC006B" />
            <CmykComponent label="Y" value={currentColor.y} color="#FFF10C" />
            <CmykComponent label="K" value={currentColor.k} color="#333" />
            <RgbComponent label="R" value={currentColor.r} />
            <RgbComponent label="G" value={currentColor.g} />
            <RgbComponent label="B" value={currentColor.b} />
          </ColorBar>
          <ColorName>
            <Honji>{currentColor.honji}</Honji>
            <Romaji>{currentColor.romaji}</Romaji>
          </ColorName>
        </InnerContainer>
      </Background>
      <Wrapper>
        <InnerContainer>
          <Left>
            {NIPPON_COLOR.map(item => (
              <NipponItem
                key={item.index}
                item={item}
                onChangeItem={onChangeItem}
              />
            ))}
          </Left>
        </InnerContainer>
      </Wrapper>
    </FullScreenLayout>
  );
};

export default NipponPage;

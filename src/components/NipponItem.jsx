import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50px;
  height: 278px;
  margin-left: 26px;
  /* background-color: rgba(0, 0, 0, 0.05); */
  &:nth-child(7n + 1) {
    margin-left: 0;
  }
  &:nth-child(n + 8) {
    margin-top: 24px;
  }
  cursor: pointer;
`;

const Header = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.c,
  },
}))`
  width: 100%;
  height: 8px;
`;

const Top = styled.div`
  margin-top: 12px;
  height: 123px;
  display: flex;
`;

const TopLeft = styled.div`
  flex: 0 0 26px;
  margin-right: 8px;
`;

const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
`;

const Number = styled.div.attrs((props) => ({
  style: {
    color: props.c,
  },
}))`
  writing-mode: vertical-rl;
`;

const Name = styled.div`
  color: #fff;
  font-family: 'Toppan Bunkyu Mincho';
`;

const Bottom = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  height: 123px;
`;

const HexString = styled.div`
  width: 12px;
  font-size: 12px;
  color: #fff;
  writing-mode: vertical-rl;
`;

const Romaji = styled.div`
  width: 14px;
  font-size: 14px;
  color: #fff;
  writing-mode: vertical-rl;
  font-family: 'Toppan Bunkyu Mincho';
`;

const Circle = ({ value }) => {
  let perimeter = Math.PI * 2 * 8;
  perimeter = (perimeter * value) / 100;
  return (
    <svg width='25' height='25' viewBox='0 0 25 25'>
      <circle cx='13' cy='13' r='8' strokeWidth='5' stroke='#FFF' strokeOpacity='0.3' fill='none'></circle>
      <circle
        cx='13'
        cy='13'
        r='8'
        strokeWidth='5'
        stroke='#FFF'
        fill='none'
        transform-origin='center'
        transform='rotate(270)'
        strokeDasharray={`${perimeter} 1000`}></circle>
    </svg>
  );
};

const LineWrapper = styled.div`
  display: flex;
`;

const SingleLineWrapper = styled.div`
  height: 100%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  & + & {
    margin-left: 2px;
  }
`;

const SingleLine = styled.div.attrs((props) => ({
  style: {
    height: `${props.percent}%`,
  },
}))`
  width: 1px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Line = ({ r, g, b }) => {
  const percentR = (r / 255) * 100;
  const percentG = (g / 255) * 100;
  const percentB = (b / 255) * 100;

  return (
    <LineWrapper>
      <SingleLineWrapper>
        <SingleLine percent={percentR} />
      </SingleLineWrapper>
      <SingleLineWrapper>
        <SingleLine percent={percentG} />
      </SingleLineWrapper>
      <SingleLineWrapper>
        <SingleLine percent={percentB} />
      </SingleLineWrapper>
    </LineWrapper>
  );
};

const NipponItem = ({ item, onChangeItem }) => {
  const handleChangeItem = () => {
    onChangeItem(item);
  };
  return (
    <Wrapper onClick={handleChangeItem}>
      <Header c={item.hex}></Header>
      <Top>
        <TopLeft>
          <Circle value={item.c} />
          <Circle value={item.m} />
          <Circle value={item.y} />
          <Circle value={item.k} />
        </TopLeft>
        <TopRight>
          <Number c={item.hex}>{item.index}</Number>
          <Name>{item.honji}</Name>
        </TopRight>
      </Top>
      <Bottom>
        <HexString>{item.hex}</HexString>
        <Line r={item.r} g={item.g} b={item.b} />
        <Romaji>{item.romaji}</Romaji>
      </Bottom>
    </Wrapper>
  );
};

export default NipponItem;

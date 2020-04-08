import React from 'react';
import styled from 'styled-components';

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degX: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    let { degX } = this.state;
    this.timer = setInterval(() => {
      degX = (degX + 0.4) % 360;
      this.setState({
        degX: degX,
      });
    }, 16);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    const { degX } = this.state;
    return (
      <Scene>
        <CubeWrapper style={{ transform: `rotate3d(0, 1, 1, ${degX}deg)` }}>
          <Front>1</Front>
          <Back>2</Back>
          <Right>3</Right>
          <Left>4</Left>
          <Bottom>5</Bottom>
          <Top>6</Top>
        </CubeWrapper>
      </Scene>
    );
  }
}

const Scene = styled.div`
  width: 180px;
  height: 180px;
  perspective: 400px;
  transition: transform 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.5);
  }
`;

const CubeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  /* transform: translateZ(-90px) rotate3d(0, 1, 1, ${props => props.degX}deg); */
  transform: translateZ(-90px);
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 255, 0.5);
  box-shadow: 0px 0px 50px 10px rgba(0, 255, 255, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  line-height: 180px;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
`;

const Front = styled(Face)`
  transform: rotateY(0deg) translateZ(90px);
`;

const Back = styled(Face)`
  transform: rotateY(180deg) translateZ(90px);
`;

const Right = styled(Face)`
  transform: rotateY(90deg) translateZ(90px);
`;

const Left = styled(Face)`
  transform: rotateY(-90deg) translateZ(90px);
`;

const Bottom = styled(Face)`
  transform: rotateX(-90deg) translateZ(90px);
`;

const Top = styled(Face)`
  transform: rotateX(90deg) translateZ(90px);
`;

export default Cube;

import React, { useRef, useEffect } from 'react';
import BezierEasing from 'bezier-easing';
import styled from 'styled-components';

const BezierWrapper = styled.div`
  display: inline-block;
  padding: 20px;
`;

const Bezier = ({
  value = [0.25, 0.25, 0.75, 0.75],
  width = 200,
  height = 200,
  handleColor = '#ff3614',
  handlePointColor = '#ff3614',
  curveColor = '#321',
  onAnchorChange,
}) => {
  const cWidth = width * 2;
  const cHeight = height * 2;
  let [x1, y1, x2, y2] = value;

  let hover = false;
  let drag = false;
  let handleIndex = null;

  const canvas = useRef(null);
  let handleWidth1 = 4,
    handleWidth2 = 4;
  let handleRadius1 = 6,
    handleRadius2 = 6;
  let ctx;

  const draw = () => {
    ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, cWidth, cHeight);
    const arr = [];
    const easing = BezierEasing(x1, y1, x2, y2);
    for (let i = 0; i <= 1; i += 0.01) {
      arr.push({ x: i, y: easing(i) });
    }
    arr.push({ x: 1, y: 1 });

    // draw grid
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i < cHeight; i += cHeight / 10) {
      ctx.moveTo(0, i);
      ctx.lineTo(cWidth, i);
    }
    ctx.stroke();
    for (let i = cWidth / 10; i <= cWidth; i += cWidth / 10) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, cWidth);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.moveTo(0, cHeight / 2);
    ctx.lineTo(cWidth, cHeight / 2);
    ctx.moveTo(cWidth / 2, 0);
    ctx.lineTo(cWidth / 2, cHeight);
    ctx.moveTo(0, cHeight);
    ctx.lineTo(cWidth, 0);
    ctx.stroke();

    // draw border
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, cHeight);
    ctx.lineTo(0, 0);
    ctx.moveTo(0, cHeight);
    ctx.lineTo(cWidth, cHeight);
    ctx.stroke();

    // draw Handle
    ctx.strokeStyle = handleColor;
    ctx.lineWidth = handleWidth1;
    ctx.beginPath();
    ctx.moveTo(0, cHeight);
    ctx.lineTo(x1 * cWidth, cHeight - y1 * cHeight);
    ctx.stroke();
    ctx.lineWidth = handleWidth2;
    ctx.beginPath();
    ctx.moveTo(cWidth, 0);
    ctx.lineTo(x2 * cWidth, cHeight - y2 * cHeight);
    ctx.stroke();
    ctx.fillStyle = handlePointColor;
    ctx.beginPath();
    ctx.arc(x1 * cWidth, cHeight - y1 * cHeight, handleRadius1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x2 * cWidth, cHeight - y2 * cHeight, handleRadius2, 0, 2 * Math.PI);
    ctx.fill();

    // draw curve
    ctx.strokeStyle = curveColor;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, cHeight);
    arr.forEach(point =>
      ctx.lineTo(point.x * cWidth, cHeight - point.y * cHeight)
    );
    ctx.stroke();
    ctx.beginPath();
  };

  const getMousePos = e => {
    return {
      x: (e.clientX - canvas.current.offsetLeft) * 2,
      y: (e.clientY - canvas.current.offsetTop) * 2,
    };
  };

  const handleFlag = pos => {
    let flag;
    let dis1 =
      (pos.x - x1 * cWidth) * (pos.x - x1 * cWidth) +
      (pos.y - cHeight + y1 * cHeight) * (pos.y - cHeight + y1 * cHeight);
    let dis2 =
      (pos.x - x2 * cWidth) * (pos.x - x2 * cWidth) +
      (pos.y - cHeight + y2 * cHeight) * (pos.y - cHeight + y2 * cHeight);
    if (dis1 < 40) {
      flag = 1;
    }
    if (dis2 < 40) {
      flag = 2;
    }
    return flag;
  };

  const handleMouseDown = e => {
    const mousePos = getMousePos(e);
    handleIndex = handleFlag(mousePos);
    if (!handleIndex) return;
    drag = true;
  };

  const handleMouseUp = e => {
    drag = false;
    handleIndex = null;
    onAnchorChange(x1, y1, x2, y2);
  };

  const handleMouseMove = e => {
    const mousePos = getMousePos(e);
    if (drag) {
      let mx = mousePos.x / cWidth;
      let my = mousePos.y / cHeight;
      if (handleIndex === 1) {
        x1 = mx;
        y1 = 1 - my;
      } else if (handleIndex === 2) {
        x2 = mx;
        y2 = 1 - my;
      }
      draw();
    } else {
      const i = handleFlag(mousePos);
      if (i) {
        hover = true;
        if (i === 1) {
          handleWidth1 = 8;
          handleRadius1 = 10;
        } else {
          handleWidth2 = 8;
          handleRadius2 = 10;
        }
        draw();
      } else {
        if (hover) {
          hover = false;
          handleWidth1 = handleWidth2 = 4;
          handleRadius1 = handleRadius2 = 6;
          draw();
        }
      }
    }
  };

  const formatValue = v => {
    return v.toFixed(2);
  };

  useEffect(() => {
    draw();
  }, []);
  return (
    <BezierWrapper>
      <canvas
        ref={canvas}
        width={cWidth}
        height={cHeight}
        style={{ width: width, height: height }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
      <p>参数：</p>
      <p>
        x:{formatValue(x1)}, y:{formatValue(y1)}
      </p>
      <p>
        x:{formatValue(x2)}, y:{formatValue(y2)}
      </p>
    </BezierWrapper>
  );
};

export default Bezier;

import React, { useRef, useEffect } from 'react';
import BezierEasing from 'bezier-easing';
import styled from 'styled-components';

import Color from '../../utils/color';

const BezierWrapper = styled.div`
  display: inline-block;
  padding: 20px;
`;

const Bottom = styled.p`
  font-size: 14px;
  font-family: sans-serif;
`;

const Bezier = ({
  x1 = 0.2,
  y1 = 0.3,
  x2 = 0.8,
  y2 = 0.9,
  width = 200,
  height = 200,
  handleColor = '#ff3614',
  handlePointColor = '#12fc14',
  curveColor = '#049'
}) => {
  const cWidth = width * 2;
  const cHeight = height * 2;

  let hover = false;
  let drag = false;

  const arr = [];
  const easing = BezierEasing(x1, y1, x2, y2);
  for (let i = 0; i <= 1; i += 0.01) {
    arr.push({ x: i, y: easing(i) });
  }
  const canvas = useRef(null);
  let handleWidth = 4;
  let handleRadius = 6;
  let ctx;

  const draw = () => {
    ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, cWidth, cHeight);

    // draw border
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, cHeight);
    ctx.lineTo(0, 0);
    ctx.moveTo(0, cHeight);
    ctx.lineTo(cWidth, cHeight);
    ctx.stroke();

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

    // draw Handle
    ctx.strokeStyle = handleColor;
    ctx.lineWidth = handleWidth;
    ctx.beginPath();
    ctx.moveTo(0, cHeight);
    ctx.lineTo(x1 * cWidth, cHeight - y1 * cHeight);
    ctx.moveTo(cWidth, 0);
    ctx.lineTo(x2 * cWidth, cHeight - y2 * cHeight);
    ctx.stroke();
    ctx.fillStyle = handlePointColor;
    ctx.beginPath();
    ctx.arc(x1 * cWidth, cHeight - y1 * cHeight, handleRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x2 * cWidth, cHeight - y2 * cHeight, handleRadius, 0, 2 * Math.PI);
    ctx.fill();


    // draw curve
    ctx.strokeStyle = curveColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, cHeight);
    arr.forEach(point =>
      ctx.lineTo(point.x * cWidth, cHeight - point.y * cHeight)
    );
    ctx.stroke();
    ctx.beginPath();
  }

  const getMousePos = e => {
    return {
      x: (e.clientX - canvas.current.offsetLeft) * 2,
      y: (e.clientY - canvas.current.offsetTop) * 2,
    };
  };

  const isOnHandle = (pos) => {
    const pixel = ctx.getImageData(pos.x, pos.y, 1, 1).data;
    const color = new Color({ r: pixel[0], g: pixel[1], b: pixel[2] });
    return color.toHexString() === handlePointColor
  }

  const handleMouseDown = e => {
    const mousePos = getMousePos(e);
    const isHandle = isOnHandle(mousePos);
    if (!isHandle) return;
    drag = true;
  }

  const handleMouseUp = e => {
    drag = false;
  }

  const handleMouseMove = e => {
    const mousePos = getMousePos(e);
    const isHandle = isOnHandle(mousePos);
    if (drag) {
      console.log(mousePos);
    }
    if (isHandle) {
      hover = true;
      handleWidth = 10;
      handleRadius = 12;
      draw();
    } else {
      if (hover) {
        hover = false;
        handleWidth = 4;
        handleRadius = 6;
        draw();
      }
    }
  };

  useEffect(() => {
    draw();
  }, [x1, y1, x2, y2]);
  return (
    <BezierWrapper>
      <canvas
        ref={canvas}
        width={cWidth}
        height={cHeight}
        style={{ width: width, height: height }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      ></canvas>
      <Bottom>{`Params: [${x1}, ${y1}, ${x2}, ${y2}]`}</Bottom>
    </BezierWrapper>
  );
};

export default Bezier;

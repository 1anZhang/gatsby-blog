import React from 'react';
import styled from 'styled-components';
// import Highlight, { defaultProps } from 'prism-react-renderer';
import Highlight from './Highlight';
// import theme from 'prism-react-renderer/themes/vsDark';
// import theme from '../utils/theme';

const CodeWrapper = styled.pre`
  position: relative;
  margin: 0 auto;
  padding: 20px;
  width: 80%;
  font-family: Monaco;
`

const LineNumber = styled.span`
  color: #666;
  margin-right: 1em;
`

const CopyContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-family: Consola;
  color: #777;
  cursor: pointer;

  &:hover {
    color: #ccc;
    background: rgba(255, 255, 255, .2);
  }
`

export default ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight code={children} language={language}></Highlight>
  );
};

import React from 'react';
// import styled from 'styled-components';
import Highlight from './Highlight';

export default ({ children, className }) => {
  console.log('claac', className);
  const language = className.replace(/language-/, '');
  return (
    <Highlight code={children} language={language}></Highlight>
  );
};

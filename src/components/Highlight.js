import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CopyIcon from '../images/icons/Copy';
import { copyToClipboard } from '../utils/lo';
// import hljs from 'highlight.js';
/**
 * highlight config
 */
import 'highlight.js/styles/tomorrow.css';
import hljs from 'highlight.js/lib/highlight';
import plaintext from 'highlight.js/lib/languages/plaintext';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('plaintext', plaintext);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);


const Pre = styled.pre`
  position: relative;

  &:hover {
    .copy {
      opacity: 1;
    }
  }
`;

const FakeButtonGroup = styled.div`
  position: absolute;
  top: 10px;
  left: 12px;
  width: 54px;
  height: 14px;
`;

const FakeButton = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  width: 12px;
  height: 12px;
  background-color: ${props => props.color};
  border-radius: 50%;
  border: 1px solid ${props => props.stroke};
`;

const CopyContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  opacity: 0;
  transition: transform .5s;

  &:hover {
    transform: scale(1.3) rotate(180deg);
  }
`

const Code = styled.code`
  padding: 36px 18px 18px 12px !important;
  background-color: rgba(249, 232, 204, 0.21) !important;
`;

const Highlight = ({ code, language }) => {
  const thisEl = useRef(null);
  useEffect(() => {
    highlightCode(thisEl);
  }, []);

  const highlightCode = thisEl => {
    const nodes = thisEl.current.querySelectorAll('pre code');
    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  };

  const CopyCode = () => {
    copyToClipboard(code);
  }

  return (
    <Pre ref={thisEl}>
      <FakeButtonGroup>
        <FakeButton color="#FF5F56" stroke="#E0443E" left="0"></FakeButton>
        <FakeButton color="#FFBD2E" stroke="#DEA123" left="20"></FakeButton>
        <FakeButton color="#27C93F" stroke="#1AAB29" left="40"></FakeButton>
      </FakeButtonGroup>
      <CopyContainer className="copy" onClick={CopyCode}><CopyIcon color="#FFBD2E" size={16} /></CopyContainer>
      <Code className={language}>{code}</Code>
    </Pre>
  );
};

export default Highlight;

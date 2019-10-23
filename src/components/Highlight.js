import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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
`;

const FakeButton = styled.div`
  position: absolute;
  top: 10px;
  left: 12px;
`;

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

  return (
    <Pre ref={thisEl}>
      <FakeButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="14"
          viewBox="0 0 54 14"
        >
          <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
            <circle
              cx="6"
              cy="6"
              r="6"
              fill="#FF5F56"
              stroke="#E0443E"
              stroke-width=".5"
            ></circle>
            <circle
              cx="26"
              cy="6"
              r="6"
              fill="#FFBD2E"
              stroke="#DEA123"
              stroke-width=".5"
            ></circle>
            <circle
              cx="46"
              cy="6"
              r="6"
              fill="#27C93F"
              stroke="#1AAB29"
              stroke-width=".5"
            ></circle>
          </g>
        </svg>
      </FakeButton>
      <Code className={language}>{code}</Code>
    </Pre>
  );
};

export default Highlight;

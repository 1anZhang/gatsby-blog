import React, { useEffect, useRef } from 'react';
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

const Highlight = ({ code, language }) => {
  const thisEl = useRef(null);
  useEffect(() => {
    highlightCode(thisEl);
  }, []);

  const highlightCode = (thisEl) => {
    const nodes = thisEl.current.querySelectorAll('pre code');
    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  };
  
  return (
    <pre ref={thisEl}>
      <code className={language}>{code}</code>
    </pre>
  );
};

export default Highlight;

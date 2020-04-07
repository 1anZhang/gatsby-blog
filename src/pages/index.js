import React, { useState ,useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import IndexLayout from '../components/IndexLayout';
import SEO from '../components/Seo';

// const ImageWrapper = styled.div`
//   max-width: 300px;
//   margin-bottom: 24px;
// `;

const Time = styled.div`
  margin-top: 120px;
  font-size: 120px;
  color: white;
  font-family: monospace;
  text-align: center;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexRootQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [ time, setTime ] = useState({h: '', m: '', s: ''});

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      setTime({
        h: formatTime(d.getHours()),
        m: formatTime(d.getMinutes()),
        s: formatTime(d.getSeconds()),
      })
    }, 1000)
  }, []);

  const formatTime = (t) => {
    return t > 10 ? t : `0${t}`
  }

  return (
    <IndexLayout>
      <SEO title={data.site.siteMetadata.title} />
      <Time>{time.h + ':' + time.m + ':' + time.s}</Time>
      <Time>施工中...</Time>
    </IndexLayout>
  );
};

export default IndexPage;

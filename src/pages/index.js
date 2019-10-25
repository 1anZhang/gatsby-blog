import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import IndexLayout from '../components/IndexLayout';
import Image from '../components/Image';
import SEO from '../components/Seo';

const ImageWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 24px;
`;

const Time = styled.div`
  margin-top: 120px;
  font-size:120px;
  color: white;
  font-family: monospace;
  text-align: center;
`;

const IndexPage = () => (
  <IndexLayout>
    <SEO title="张岩の个人网站" />
    <Time>{new Date().getHours()+ ':' + new Date().getMinutes()}</Time>
    {/* <ImageWrapper>
      <Image uri="dduck.jpg" />
    </ImageWrapper> */}
  </IndexLayout>
);

export default IndexPage;

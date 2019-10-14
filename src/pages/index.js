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

const IndexPage = () => (
  <IndexLayout>
    <SEO title="张岩の个人网站" />
    <h1>一个正经的页面</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageWrapper>
      <Image uri="dduck.jpg" />
    </ImageWrapper>
    <Link to="/about/">Go to page 2</Link>
  </IndexLayout>
);

export default IndexPage;

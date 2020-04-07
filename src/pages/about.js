import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import aboutMe from '../images/about-me.png';

const Image = styled.img`
  width: 256px;
  height: 256px;
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About Me</h1>
    <p>菜鸭程序员，进化中。</p>
    <Image src={aboutMe} alt="psyduck" />
  </Layout>
);

export default SecondPage;

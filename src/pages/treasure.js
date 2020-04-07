import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const LinkNode = styled(Link)`
  display: block;
  margin: 16px 0;
`

const TreasurePage = () => (
  <Layout>
    <SEO title="treasure" />
    <h1>🦆の黑盒</h1>
    <LinkNode to="/color">Color Select</LinkNode>
    <LinkNode to="/bezier">Bezier Curve</LinkNode>
  </Layout>
);

export default TreasurePage;

import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import FlipCard from '../components/transform/FlipCard';
import SlideCard from '../components/transform/SlideCard';
import Cube from '../components/transform/Cube';
import Box from '../components/transform/Box';

class Transform extends Component {
  render() {
    return (
      <Layout>
        <SEO title="css transform"/>
        <AppWrapper>
          <ContentWrapper>
            <FlipCard />
            <SlideCard />
            <Cube />
            <Box />
          </ContentWrapper>
        </AppWrapper>
      </Layout>
    );
  }
}

const AppWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: #222;
`;

export default Transform;

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Image from './Image';

import './reset.css';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;
const Wrapper = styled.div`
  position: relative;
`;

const HeadImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const HeadImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const IndexLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query IndexSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GlobalStyle />
      <HeadImgWrapper>
        <HeadImage uri="home-bg.jpg" cover></HeadImage>
      </HeadImgWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContent>
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()}, Built by Gatsby with ❤️</Footer>
      </MainContent>
    </Wrapper>
  );
};

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;

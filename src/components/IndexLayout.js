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
import HomeBg from '../images/home-bg.jpg';

import './reset.css';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;
const Wrapper = styled.div`
  position: relative;
`;

const BgImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MainContent = styled.div`
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
      <BgImgWrapper>
        <BgImage src={HomeBg}></BgImage>
      </BgImgWrapper>
      <Header siteTitle={data.site.siteMetadata.title} type="transparent"/>
      <MainContent>{children}</MainContent>
    </Wrapper>
  );
};

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;

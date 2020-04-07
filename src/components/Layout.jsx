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

import './reset.css';

const GlobalStyle = createGlobalStyle`
  a {
    color: ${props => props.color};
    text-decoration: none;

    &:hover {
      color: #edbb68;
      text-decoration: underline;
    }

    &:active {
      color: #d68703;
    }
  }
  ::selection {
    color: #fff;
    text-shadow: none;
    background: ${p => p.color};
  }
`;

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0);
`;

const MainContent = styled.main`
  padding: 24px;
  min-height: calc(100vh - 356px);
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          theme_color
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GlobalStyle color={data.site.siteMetadata.theme_color} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContent>{children}</MainContent>
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

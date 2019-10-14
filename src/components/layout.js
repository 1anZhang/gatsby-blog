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
    text-decoration: none;
  }
`;
const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.);
`;

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContent>
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()}, Built by Gatsby with ❤️</Footer>
      </MainContent>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

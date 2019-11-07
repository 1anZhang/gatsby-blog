import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: 18px;
  padding: 36px 15% 12px 15%;
  background-color: ${p => p.color};
  color: white;
  font-family: sans-serif;
  font-size: 18px;
`;

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            theme_color
          }
        }
      }
    `
  );
  return (
    <FooterWrapper color={site.siteMetadata.theme_color}>
      <p>
        Your time is limited, so don’t waste it living someone else’s life.
        Don’t be trapped by dogma — which is living with the results of other
        people’s thinking. Don’t let the noise of others’ opinions drown out
        your own inner voice. And most important, have the courage to follow
        your heart and intuition. They somehow already know what you truly want
        to become. Everything else is secondary.
      </p>
      <p style={{ fontWeight: 'bold', textAlign: 'right' }}>
        – Steve Jobs, June 12, 2005.
      </p>
      <p style={{ fontWeight: 'bold', textAlign: 'right' }}>
        build by GatsBy with ❤
      </p>
    </FooterWrapper>
  );
};

export default Footer;

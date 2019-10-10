import { Link, graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import logoImg from '../images/duck.svg';

const HeaderContainer = styled.header`
  background: ${prop => prop.backgroundColor};
  margin-bottom: 24px;
`;

const MainContianer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding: 24px 36px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin: 0;
  line-height: 32px;
`;

const Title = styled.h1`
  margin-left: 32px;
  display: inline;
  font-size: 32px;
  font-family: 'PingFang-SC';
`;

const NavigatorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1;
`

const NaviGatorItem = styled(Link)`
  
`

const Header = ({ siteTitle }) => {
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
    <HeaderContainer backgroundColor={site.siteMetadata.theme_color}>
      <MainContianer>
        <Link
          to="/"
          style={{
            color: `#FFF`,
            textDecoration: `none`,
            flex: `0 0 320px`
          }}
        >
          <Logo src={logoImg} />
          <Title>{siteTitle}</Title>
        </Link>
        <NavigatorContainer>
          <NaviGatorItem to="/">主页</NaviGatorItem>
          <NaviGatorItem to="/blog">博客</NaviGatorItem>
          <NaviGatorItem to="/treasure">百宝箱</NaviGatorItem>
          <NaviGatorItem to="/about">关于</NaviGatorItem>
        </NavigatorContainer>
      </MainContianer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

import { Link, graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Color from '../utils/color';

import logoIcon from '../images/icons/duck.svg';
import homeIcon from '../images/icons/home.svg';
import blogIcon from '../images/icons/blog.svg';
import giftIcon from '../images/icons/gift.svg';
import aboutIcon from '../images/icons/about.svg';

const HeaderContainer = styled.header`
  background-color: ${props => props.bgColor};
  margin-bottom: 24px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 12px 36px;
`;

const LinkHome = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  flex: 0 0 320px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin: 0;
  line-height: 32px;
`;

const Title = styled.h1`
  margin: 0 0 0 32px;
  display: inline;
  font-size: 24px;
  font-family: 'PingFang-SC';
`;

const NavigatorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1;
`;

const NaviGatorItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.9);
  &:hover {
    color: rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.15);
  }
  &:active {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const NaviGatorItemLogo = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 6px 0 0;
  line-height: 32px;
`;

const Header = ({ siteTitle, type }) => {
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
  const isTransParent = type === 'transparent';
  const bgColor = isTransParent ? 'transparent' : site.siteMetadata.theme_color;

  return (
    <HeaderContainer bgColor={bgColor}>
      <Content>
        <LinkHome to="/">
          <Logo src={logoIcon} />
          {/* <Title>{siteTitle}</Title> */}
        </LinkHome>
        <NavigatorContainer>
          <NaviGatorItem to="/">
            <NaviGatorItemLogo src={homeIcon} />
            首页
          </NaviGatorItem>
          <NaviGatorItem to="/blog">
            <NaviGatorItemLogo src={blogIcon} />
            博客
          </NaviGatorItem>
          <NaviGatorItem to="/treasure">
            <NaviGatorItemLogo src={giftIcon} />
            黑盒
          </NaviGatorItem>
          <NaviGatorItem to="/about">
            <NaviGatorItemLogo src={aboutIcon} />
            关于
          </NaviGatorItem>
        </NavigatorContainer>
      </Content>
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

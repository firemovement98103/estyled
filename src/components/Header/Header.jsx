import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Anchor from '../Anchor/Anchor';
import Bars from '../../icons/bars.svg';

const StyledBars = styled.div`
  ${({ theme, open }) => css`
    display: none;
    ${theme.media.tablet`
      display: block;
      cursor: pointer;
      line-height: 0;
      &:hover svg {
        fill: ${theme.colors.primary};
      }
      ${open ? `& svg { fill: ${theme.colors.primary}; }` : ''}
    `}
  `}
`;
const Link = styled(Anchor)`
  :hover {
    text-decoration: none;
  }
  ${({ theme, active }) => `
    padding: ${theme.spacing.sm()};
    ${active ? `
      &&& {
        color: ${theme.colors.primary};
        font-weight: ${theme.fontWeight.heavy};
      }
    ` : ''}
  `}
`;
const NavSection = styled.div`
  ${({ theme }) => css`
    ${theme.media.tablet`
      display: none;
    `}
    &:last-child {
      text-align: right;
    }
`}`;
const Logo = styled.img`
  border: none;
`;
Logo.defaultProps = {
  src: '',
};
Logo.propTypes = {
  src: PropTypes.string,
};
const StyledLogoContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoContainer = ({
  src, children, ...props
}) => (
  <StyledLogoContainer {...props}>
    {src ? <Logo src={src} /> : children}
  </StyledLogoContainer>
);
LogoContainer.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
};
LogoContainer.defaultProps = {
  children: null,
  src: null,
};

const StyledHeaderContainer = styled.div`
  ${({ theme }) => `
    height: ${theme.sizing.headerHeight};
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.xs()};
    border-bottom: 1px solid ${theme.colors.borderLight};
  `};
`;
const StyledHeaderContent = styled.div`
  ${NavSection}, ${StyledLogoContainer} {
    flex-basis: 33%;
  }
  ${({ theme }) => css`
    max-width: ${theme.sizing.wideContent};
    ${theme.media.tablet`
      ${StyledLogoContainer} {
        flex-basis: 100%;
      }
    `}
  `}
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;
const Header = ({ children, onHamburgerClick, isOpen }) => (
  <StyledHeaderContainer>
    <StyledHeaderContent>
      <StyledBars onClick={onHamburgerClick} open={isOpen}>
        <Bars />
      </StyledBars>
      {children}
    </StyledHeaderContent>
  </StyledHeaderContainer>
);
Header.propTypes = {
  children: PropTypes.node,
  onHamburgerClick: PropTypes.func,
  isOpen: PropTypes.bool,
};
Header.defaultProps = {
  children: null,
  onHamburgerClick: () => {},
  isOpen: false,
};
Header.NavSection = NavSection;
Header.Link = Link;
Header.Logo = Logo;
Header.LogoContainer = LogoContainer;
export default Header;

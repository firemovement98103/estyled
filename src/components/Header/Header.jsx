import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Anchor from '../Anchor/Anchor';

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
    &:last-child {
      text-align: right;
    }
`;
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
  height: 45px;
  ${({ theme }) => `
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.xs()};
    border-bottom: 1px solid ${theme.colors.borderLight};
  `};
`;
const StyledHeaderContent = styled.div`
  ${({ theme }) => `
    max-width: ${theme.sizing.wideContent};
  `}
  display: flex;
  align-items: center;
  height: 100%;
  ${NavSection}, ${StyledLogoContainer} {
    flex-basis: 33%;
  }
  margin: 0 auto;
`;
const Header = ({ children }) => (
  <StyledHeaderContainer>
    <StyledHeaderContent>
      {children}
    </StyledHeaderContent>
  </StyledHeaderContainer>
);
Header.propTypes = {
  children: PropTypes.node,
};
Header.defaultProps = {
  children: null,
};
Header.NavSection = NavSection;
Header.Link = Link;
Header.Logo = Logo;
Header.LogoContainer = LogoContainer;
export default Header;

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Anchor from '../Anchor/Anchor';
import Text from '../Text/Text';
import CaretDown from '../../icons/caret-down.svg';
import CaretUp from '../../icons/caret-up.svg';

const mobileNavItemCss = css`
  height: 40px;
  line-height: 40px;
  width: 100%;
  ${({ theme }) => `
    &:hover {
      background-color: ${theme.colors.backgroundLight};
    }  
  `}
`;
const StyledItemLink = styled(Anchor)`
  ${mobileNavItemCss}
  display: block;
  &:hover {
    text-decoration: none;
  }
`;
const StyledSubItemLink = styled(StyledItemLink)``;
const StyledLinkGroup = styled.div`
  ${mobileNavItemCss}
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => `
    &:hover ${Text} {
      color: ${theme.colors.primary};
    }  
  `}
`;
const StyledMobileNav = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  ${({ theme, open }) => `
    z-index: ${theme.zIndexing.mobileNav};
    ${open ? 'display: block;' : ''}
    background-color: ${theme.colors.white};
  `}
`;
const StyledSubNavList = styled.div`
  ${({ theme }) => `
    background-color: ${theme.colors.backgroundLight};
    padding-left: ${theme.spacing.md()};
  `}
`;
const MobileNavGroup = ({
  items, isOpen, label, onLabelClick,
}) => (
  <>
    <StyledLinkGroup onClick={onLabelClick}>
      <Text>{label}</Text>
      {isOpen ? <CaretUp /> : <CaretDown />}
    </StyledLinkGroup>
    {isOpen && (
    <StyledSubNavList>
      {items.map(({ href, label: subLabel }) => (
        <StyledSubItemLink key={href} href={href}>{subLabel}</StyledSubItemLink>))}
    </StyledSubNavList>
    )}
  </>
);
MobileNavGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
  })),
  isOpen: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onLabelClick: PropTypes.func.isRequired,
};
MobileNavGroup.defaultProps = {
  items: [],
  isOpen: false,
};
export default class MobileNav extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        label: PropTypes.string.isRequired,
      })),
    })),
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    items: [],
    isOpen: false,
  };

  state = { openSub: null };

  setOpenSubNav = (label) => {
    const { openSub } = this.state;
    this.setState({
      openSub: openSub === label ? null : label,
    });
  }

  render() {
    const { items, isOpen, className } = this.props;
    const { openSub } = this.state;
    return (
      <StyledMobileNav className={className} open={isOpen}>
        {items.map(({ subItems, href, label }) => (subItems
          ? (
            <MobileNavGroup
              key={label}
              items={subItems}
              isOpen={openSub === label}
              label={label}
              onLabelClick={() => this.setOpenSubNav(label)}
            />
          )
          : <StyledItemLink key={href} href={href}>{label}</StyledItemLink>))}
      </StyledMobileNav>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import resetCSS from './resetCSS';

const sizes = {
  desktop: 1280,
  tablet: 992,
  phone: 520,
};

export const theme = {
  colors: {
    primary: '#6C7E66',
    primaryInverse: '#D4F3D9',
    accent: '#C6DEC6',
    text: '#020402',
    textLight: '#758173',
    white: '#FFF',
    backgroundLight: '#E8E8E8',
    backgroundDark: '#D1D1D1',
    borderLight: '#D1D1D1',
    borderDark: '#A4A4A4',
    error: '#bb0000',
    warn: '#ee9922',
    success: '#339900',
    info: '#006070',
  },
  spacing: {
    size(size, uom = 'px') {
      return `${size * 8}${uom}`;
    },
    xs() { return theme.spacing.size(1); },
    sm() { return theme.spacing.size(2); },
    md() { return theme.spacing.size(3); },
    lg() { return theme.spacing.size(4); },
    xl() { return theme.spacing.size(5); },
    xxl() { return theme.spacing.size(6); },
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '24px',
    1: '55px',
    2: '46px',
    3: '42px',
    4: '28px',
    5: '18px',
    6: '14px',
  },
  fontWeight: {
    light: '200',
    medium: '400',
    heavy: '700',
  },
  sizing: {
    content: '1280px',
    wideContent: '1440px',
  },
  media: Object.keys(sizes).reduce((acc, label) => ({
    ...acc,
    [label]: (...args) => css`
      @media (max-width: ${sizes[label]}px){${css(...args)}}
    `,
  }), {}),
  zIndexing: {
    mobileNav: 1,
  },
};
const ResetCSS = createGlobalStyle`
  ${resetCSS}
`;
const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <ResetCSS />
      {children}
    </>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import resetCSS from './resetCSS';

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
    sm: '14px',
    md: '16px',
    lg: '24px',
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

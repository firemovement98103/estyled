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
    headerHeight: '45px',
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
  /* cyrillic-ext */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
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

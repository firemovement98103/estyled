import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

const StyledHeading = styled(Text)`
  ${({ theme, h }) => `
    font-size: ${theme.fontSize[h]};
    font-weight: ${theme.fontWeight.heavy};
    line-height: 1.4em;
  `}
`;

const Heading = ({ h, ...props }) => (
  <StyledHeading
    as={`h${h}`}
    h={h}
    {...props}
  />
);

const supportedLevels = [1, 2, 3, 4, 5, 6];
Heading.propTypes = {
  h: PropTypes.oneOf(supportedLevels.concat(supportedLevels.map(val => val.toString()))),
};
Heading.defaultProps = {
  h: 1,
};

export default Heading;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';
import Heading from '../Heading/Heading';

const StyledNotification = styled.div`
  border-radius: 4px;
  ${({ theme, level }) => `
    border: 1px solid ${theme.colors[level]};
    padding: ${theme.spacing.sm()};
    background-color: ${theme.colors[level]}2F;
    ${Heading}, ${Text} {
      color: ${theme.colors[level]}
    }
  `}
`;
const LEVELS = {
  SUCCESS: 'success',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

const Notification = ({
  className, title, body, level,
}) => (
  <StyledNotification className={className} level={level}>
    {typeof title === 'string' ? <Heading h="5">{title}</Heading> : title}
    {typeof body === 'string' ? <Text>{body}</Text> : body}
  </StyledNotification>
);
Notification.LEVELS = LEVELS;
Notification.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  body: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  level: PropTypes.oneOf(Object.values(LEVELS)),
};
Notification.defaultProps = {
  className: null,
  level: LEVELS.SUCCESS,
};

export default Notification;

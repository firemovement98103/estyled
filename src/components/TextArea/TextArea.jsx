import styled from 'styled-components';
import PropTypes from 'prop-types';
import { sharedInputCSS } from '../Input/Input';

const TextArea = styled.textarea`
  ${sharedInputCSS}
  ${({
    resize, height, width,
  }) => `
    resize: ${resize};
    height: ${height};
    width: ${width};
  `};
`;
TextArea.props = {
  resize: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  error: PropTypes.bool,
};
TextArea.defaultProps = {
  resize: 'none',
  height: '120px',
  width: '400px',
  error: false,
};

export default TextArea;

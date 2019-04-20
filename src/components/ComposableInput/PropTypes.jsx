import PropTypes from 'prop-types';

export default {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  parser: PropTypes.func,
  onChange: PropTypes.func,
  validateOnChange: PropTypes.bool,
  validator: PropTypes.func,
  onError: PropTypes.func,
  validateOnBlur: PropTypes.bool,
  onBlur: PropTypes.func,
};

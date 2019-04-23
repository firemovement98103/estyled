import React from 'react';
import PropTypes from './PropTypes';
import Input from '../Input/Input';

export default class BaseInput extends React.Component {
  static propTypes = {
    ...PropTypes,
  };

  static defaultProps = {
    value: '',
    parser: val => val,
    onChange: () => {},
    validateOnChange: false,
    validator: () => true,
    onError: () => {},
    validateOnBlur: true,
    onBlur: () => {},
    formatter: val => val,
    formatOnChange: false,
    formatOnBlur: true,
  };

  // eslint-disable-next-line react/destructuring-assignment
  state = { displayValue: this.props.formatter(this.props.value) };

  componentDidUpdate({ value: prevValue }) {
    const { value, formatter } = this.props;
    if (prevValue !== value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ displayValue: formatter(value) });
    }
  }

  parseAndPersistToState = (inputValue, validate, format, additional) => {
    const {
      parser, formatter, validator, onError,
    } = this.props;
    const parsed = parser(inputValue);
    if (validate) {
      const errorReason = validator(parsed, inputValue);
      if (errorReason) {
        onError(errorReason, parsed, inputValue);
      }
    }
    if (format && validate && !validator(parsed, inputValue)) {
      const formatted = formatter(parsed);
      this.setState({
        displayValue: formatted,
      });
    } else {
      this.setState({
        displayValue: inputValue,
      });
    }
    additional(parsed, inputValue);
  };

  onChange = ({ target: { value } }) => {
    const { validateOnChange, formatOnChange, onChange } = this.props;
    this.parseAndPersistToState(value, validateOnChange, formatOnChange, onChange);
  };

  onBlur = ({ target: { value } }) => {
    const { validateOnBlur, formatOnBlur, onBlur } = this.props;
    this.parseAndPersistToState(value, validateOnBlur, formatOnBlur, onBlur);
  }

  render() {
    const {
      value,
      parser,
      onChange,
      validator,
      validateOnChange,
      validateOnBlur,
      onError,
      onBlur,
      formatter,
      formatOnChange,
      formatOnBlur,
      ...props
    } = this.props;
    const { displayValue } = this.state;
    return (
      <Input
        {...props}
        value={displayValue}
        onChange={this.onChange}
        onBlur={this.onBlur}
      />
    );
  }
}

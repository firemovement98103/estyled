import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Base from './Base';
import NumberInput from './Number';
import Dollar from './Dollar';

const COMMON_PROPS = {
  onChange: action('On change'),
  onBlur: action('On blur'),
  onError: action('On error'),
  id: 'Test',
};
storiesOf('Composable Inputs', module)
  .add('Base Input', () => (
    <Base
      {...COMMON_PROPS}
      parser={val => val.toUpperCase()}
      validator={value => (value.length % 2 === 0 && 'Even length is not ok')}
    />
  ))
  .add('Number Input', () => (
    <NumberInput
      {...COMMON_PROPS}
    />
  ))
  .add('Dollar Input', () => (
    <Dollar
      {...COMMON_PROPS}
    />
  ));

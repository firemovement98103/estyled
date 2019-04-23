import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Base from './Base';
import NumberInput from './Number';
import Dollar from './Dollar';
import WholeNumberInput from './WholeNumber';
import WholeDollar from './WholeDollar';

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
  .add('Formatter/Parser example', () => (
    <Base
      {...COMMON_PROPS}
      parser={val => val.toLowerCase()}
      formatter={val => val.toUpperCase()}
      formatOnChange
      validateOnChange
      validator={value => value.includes('t') && 'Cannot include the letter t.'}
    />
  ), {
    info: {
      text: `
        #### Warning!
        This example has many actions and callbacks. There will be a very clear performance
        problem in the storybook implementation, but deleting the actions seems to
        alleviate these performance issues.
      `,
    },
  })
  .add('Number Input', () => (
    <NumberInput
      {...COMMON_PROPS}
    />
  ))
  .add('Whole number input', () => (
    <WholeNumberInput
      {...COMMON_PROPS}
    />
  ))
  .add('Whole dollar input', () => (
    <WholeDollar
      {...COMMON_PROPS}
    />
  ))
  .add('Dollar Input', () => (
    <Dollar
      {...COMMON_PROPS}
    />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioList from './Radio';

storiesOf('Radio', module)
  .add('Base Case', () => (
    <RadioList
      id="test"
      value="muahaha"
      options={[{
        value: 'Test',
        label: 'Test',
      }, {
        value: 'muahaha',
        label: 'Evil',
      }, {
        value: 'abcd',
        label: 'Alphabet',
      }]}
      onChange={action('On change')}
    />
  ))
  .add('Horizontal', () => (
    <RadioList
      horizontal
      id="test"
      value={false}
      options={[{
        value: true,
        label: 'Yes',
      }, {
        value: false,
        label: 'No',
      }]}
      onChange={action('On change')}
    />
  ));

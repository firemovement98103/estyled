import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Base Case', () => (
    <Input defaultValue="Test" />
  ))
  .add('Error case', () => (
    <Input defaultValue="Test" error />
  ));

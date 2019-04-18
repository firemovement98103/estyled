import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Base Case', () => (
    <Input defaultValue="Test" placeholder="Test 2" id="base" />
  ))
  .add('Error case', () => (
    <Input defaultValue="Test" error id="error" />
  ))
  .add('Left Symbol', () => (
    <Input defaultValue="1,000" left="$" error id="left" />
  ))
  .add('Right Symbol', () => (
    <Input defaultValue="1,000" right=".00" id="right" />
  ))
  .add('Left & Right Symbol', () => (
    <Input defaultValue="1,000" right=".00" left="$" id="leftRight" />
  ));

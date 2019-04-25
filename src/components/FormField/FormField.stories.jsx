import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from './FormField';
import Label from '../Label/Label';
import Input from '../Input/Input';

storiesOf('Form Field', module)
  .add('Base Case', () => (
    <FormField>
      <Label htmlFor="test">Test Label</Label>
      <Input id="test" placeholder="Basic usage" />
    </FormField>
  ))
  .add('Error case', () => (
    <FormField error="An error occurred">
      <Label>Test Label</Label>
      <Input id="test2" placeholder="Error field" error />
    </FormField>
  ))
  .add('Required', () => (
    <FormField required>
      <Label>Test Label</Label>
      <Input id="test3" placeholder="Required field" />
    </FormField>
  ));

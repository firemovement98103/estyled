import React from 'react';
import { storiesOf } from '@storybook/react';
import Emphasis from './Emphasis';

storiesOf('Emphasis', module)
  .add('Base Case', () => <Emphasis>Test Emphasis</Emphasis>);

import React from 'react';
import { storiesOf } from '@storybook/react';
import Anchor from './Anchor';

storiesOf('Anchor', module)
  .add('Base Case', () => (<Anchor>Test</Anchor>))
  .add('Body Anchor', () => (<Anchor body>Test</Anchor>));

import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './TextArea';

storiesOf('TextArea', module)
  .add('Base Case', () => (<TextArea placeholder="This is a test placeholder" />));

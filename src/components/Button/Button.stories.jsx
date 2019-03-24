import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Base Case', () => (<Button primary>Test</Button>))
  .add('Fluid Button', () => (<Button primary fluid>Test</Button>))
  .add('Secondary Button', () => (<Button>Test</Button>));

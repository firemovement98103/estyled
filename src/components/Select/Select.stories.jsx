import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import Select from './Select';

const SelectWrapper = styled.div`
  max-width: 300px;
`;
storiesOf('Select', module)
  .add('Base Case', () => (
    <SelectWrapper>
      <Select value={2} onChange={action('Change')} options={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]} />
    </SelectWrapper>
  ));

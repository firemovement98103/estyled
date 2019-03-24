import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Text from './Text';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
storiesOf('Text', module)
  .add('Base Case', () => (<Text>Test</Text>))
  .add('Font Weights', () => (
    <FlexColumn>
      <Text fontWeight="light">light</Text>
      <Text fontWeight="medium">medium (default)</Text>
      <Text fontWeight="heavy">heavy</Text>
    </FlexColumn>
  ))
  .add('Font Sizes', () => (
    <FlexColumn>
      <Text fontSize="sm">sm</Text>
      <Text fontSize="md">md (default)</Text>
      <Text fontSize="lg">lg</Text>
    </FlexColumn>
  ));

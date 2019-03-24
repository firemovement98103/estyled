import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
storiesOf('Paragraph', module)
  .add('Base Case', () => (<Paragraph>Test</Paragraph>))
  .add('Font Weights', () => (
    <FlexColumn>
      <Paragraph fontWeight="light">light</Paragraph>
      <Paragraph fontWeight="medium">medium (default)</Paragraph>
      <Paragraph fontWeight="heavy">heavy</Paragraph>
    </FlexColumn>
  ))
  .add('Font Sizes', () => (
    <FlexColumn>
      <Paragraph fontSize="sm">sm</Paragraph>
      <Paragraph fontSize="md">md (default)</Paragraph>
      <Paragraph fontSize="lg">lg</Paragraph>
    </FlexColumn>
  ));

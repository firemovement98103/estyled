import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Heading from './Heading';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
storiesOf('Heading', module)
  .add('Base Case', () => (
    <StyledColumn>
      <Heading h="1">Heading 1</Heading>
      <Heading h="2">Heading 2</Heading>
      <Heading h="3">Heading 3</Heading>
      <Heading h="4">Heading 4</Heading>
      <Heading h="5">Heading 5</Heading>
      <Heading h="6">Heading 6</Heading>
    </StyledColumn>
  ));

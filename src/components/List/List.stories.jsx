import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';

storiesOf('List', module)
  .add('Base Case', () => (
    <List>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
    </List>
  ))
  .add('Ordered', () => (
    <List ordered>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
    </List>
  ))
  .add('Nested Ordered', () => (
    <List ordered>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>
        Sub list
        <List ordered>
          <List.Item>Item</List.Item>
          <List.Item>Item</List.Item>
          <List.Item>Item</List.Item>
        </List>
      </List.Item>
    </List>
  ))
  .add('Nested Unordered', () => (
    <List>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>
        Sub list
        <List>
          <List.Item>Item</List.Item>
          <List.Item>Item</List.Item>
          <List.Item>Item</List.Item>
        </List>
      </List.Item>
    </List>
  ));

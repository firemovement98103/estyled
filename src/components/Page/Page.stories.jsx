import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';

storiesOf('Page', module)
  .add('Base Case', () => (<Page>Test</Page>))
  .add('Page Content', () => (
    <Page>
      <Page.Content>Test</Page.Content>
    </Page>
  ))
  .add('Page Section', () => (
    <Page>
      <Page.Section>
        <Page.Content>Test</Page.Content>
      </Page.Section>
      <Page.Section>
        <Page.Content>Test</Page.Content>
      </Page.Section>
      <Page.Section>
        <Page.Content>Test</Page.Content>
      </Page.Section>
    </Page>
  ));

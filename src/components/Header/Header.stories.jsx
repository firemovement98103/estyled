import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Header', module)
  .add('Base Case', () => (
    <Header>
      <Header.NavSection>
        <Header.Link active>With active</Header.Link>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
      </Header.NavSection>
      <Header.LogoContainer />
      <Header.NavSection>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
      </Header.NavSection>
    </Header>
  ))
  .add('Custom Logo Container', () => (
    <Header>
      <Header.NavSection>
        <Header.Link active>With active</Header.Link>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
      </Header.NavSection>
      <Header.LogoContainer>
        Logo container can have any child
      </Header.LogoContainer>
      <Header.NavSection>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
      </Header.NavSection>
    </Header>
  ))
  .add('Logo image', () => (
    <Header>
      <Header.NavSection>
        <Header.Link active>With active</Header.Link>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
      </Header.NavSection>
      <Header.LogoContainer src="https://gdurl.com/Zvn1/" />
      <Header.NavSection>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
        <Header.Link>Test</Header.Link>
      </Header.NavSection>
    </Header>
  ));

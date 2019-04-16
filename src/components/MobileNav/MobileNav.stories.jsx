import React from 'react';
import { storiesOf } from '@storybook/react';
import MobileNav from './MobileNav';

storiesOf('MobileNav', module)
  .add('Base Case', () => (
    <MobileNav
      isOpen
      items={[
        { href: 'www.google.com', label: 'Google' },
        {
          label: 'Other links',
          subItems: [{
            href: 'www.bing.com',
            label: 'Bing',
          }, {
            href: 'www.yahoo.com',
            label: 'Yahoo',
          }],
        },
        {
          label: 'Other links 2',
          subItems: [{
            href: 'www.bing.com',
            label: 'Bing',
          }, {
            href: 'www.yahoo.com',
            label: 'Yahoo',
          }],
        },
      ]}
    />
  ));

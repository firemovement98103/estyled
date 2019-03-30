import React from 'react';
import { storiesOf } from '@storybook/react';
import Notification from './Notification';

storiesOf('Notification', module)
  .add('Success', () => <Notification title="Success notification" body="This was a successful implementation." level={Notification.LEVELS.SUCCESS} />)
  .add('Error', () => <Notification title="Error notification" body="This was definitely not a successful implementation." level={Notification.LEVELS.ERROR} />)
  .add('Warn', () => <Notification title="Warn notification" body="This was maybe not a good implementation." level={Notification.LEVELS.WARN} />)
  .add('Info', () => <Notification title="Info notification" body="This is some information about a thing." level={Notification.LEVELS.INFO} />);

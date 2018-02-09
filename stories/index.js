import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('text', module)
  .add('hello world', () => (
    <div>Hello world</div>
  ))

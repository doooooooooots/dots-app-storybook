import React from 'react';
import { action } from '@storybook/addon-actions';
import { ActionButton } from '../components/Button';

export default {
  title: 'Button',
  component: ActionButton
};

export const Default = () => <ActionButton onClick={action('clicked')}>Default Button</ActionButton>;

export const Primary = () => (
  <ActionButton primary onClick={action('clicked')}>
    Primary Button
  </ActionButton>
);

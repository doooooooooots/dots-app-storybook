import React from 'react';
import { action } from '@storybook/addon-actions';
import ActionButton from '../components/Button';
import ButtonAccept from '../components/ButtonAccept';
import ButtonAgree from '../components/ButtonAgree';
import ButtonCancel from '../components/ButtonCancel';
import ButtonConfirm from '../components/ButtonConfirm';
import ButtonDelete from '../components/ButtonDelete';
import ButtonEdit from '../components/ButtonEdit';
import ButtonPopper from '../components/ButtonPopper';
import ButtonFilter from '../components/ButtonFilter';

export default {
  title: 'Design System/Button',
  component: ActionButton
};

export const Default = () => <ActionButton onClick={action('clicked')}>Default Button</ActionButton>;

export const Primary = () => (
  <ActionButton primary onClick={action('clicked')}>
    Primary Button
  </ActionButton>
);

export const Accept = () => <ButtonAccept>Primary Button</ButtonAccept>;
export const Agree = () => <ButtonAgree>Primary Button</ButtonAgree>;
export const Cancel = () => <ButtonCancel>Primary Button</ButtonCancel>;
export const Confirm = () => <ButtonConfirm>Primary Button</ButtonConfirm>;
export const Delete = () => <ButtonDelete>Primary Button</ButtonDelete>;
export const Edit = () => <ButtonEdit>Primary Button</ButtonEdit>;
export const Filter = () => <ButtonFilter>Primary Button</ButtonFilter>;
export const Popper = () => <ButtonPopper renderPopper={<div>This is it Hello</div>}>Primary Button</ButtonPopper>;

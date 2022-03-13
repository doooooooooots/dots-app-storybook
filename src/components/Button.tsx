import React from 'react';
import Button from '@mui/material/Button'
export interface ButtonProps {
  primary?: boolean
}

const ActionButton = ({primary = false}) => <Button variant='contained' color='secondary'>{primary ? 'Click ICI' : 'Click plutot lààà'}</Button>

ActionButton.displayName = 'ActionButton';

export default ActionButton
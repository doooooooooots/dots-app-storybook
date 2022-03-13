import React from 'react';

export interface ButtonProps {
  primary?: boolean
}

export const Button = ({primary = false}) => <button>{primary ? 'Click ICI' : 'Click plutot lààà'}</button>

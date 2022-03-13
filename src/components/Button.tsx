import React from 'react';

export interface ButtonProps {
  primary?: boolean
}

export const Button = ({primary:Boolean = false}) => <button>Clic ici</button>

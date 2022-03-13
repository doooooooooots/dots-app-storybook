import React from 'react';
import Button from '@mui/material/Button'
export interface ButtonProps {
  primary?: boolean
}

export const ActionButton = ({primary = false}) => <Button variant='contained' color='secondary' sx={{
  backgroundColor: (theme) => {
    console.log(theme);
    return theme.palette.secondary.main}
}}>{primary ? 'Click ICI' : 'Click plutot lààà'}</Button>
import React from 'react';
import { Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ButtonAccept = (props: { [x: string]: any; onClick: any; variant?: "contained" | undefined; color?: "primary" | 'secondary'; children?: "J'accepte" | any; }) => {
  const { onClick, variant = 'contained', color = 'primary', children = "J'accepte", ...other } = props;
  return (
    <Button onClick={onClick} variant={variant} color={color} startIcon={<ThumbUpIcon />} {...other}>
      {children}
    </Button>
  );
}

ButtonAccept.displayName ="ButtonAccept"

export default ButtonAccept

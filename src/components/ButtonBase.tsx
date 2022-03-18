import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
  500: '#0024F9',
  600: '#0022E4',
  700: '#001DC4'
};

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function ButtonBase(props) {
  const { size = 'medium' } = props;
  return (
    <ButtonUnstyled
      sx={[
        size === 'xSmall' && {
          paddingTop: 0.2,
          paddingBottom: 0.2,
          paddingLeft: 2,
          paddingRight: 2,
          minHeight: 'auto',
          height: 30
        }
      ]}
      {...props}
      component={CustomButtonRoot}
    />
  );
}

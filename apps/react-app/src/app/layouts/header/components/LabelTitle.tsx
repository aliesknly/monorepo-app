import { Typography } from '@mui/material';
import { SxDisplayTypePropsInterface } from '../../../models';

export default function LabelTitle({
  children,
  xs = 'none',
  md = 'none',
}: Partial<SxDisplayTypePropsInterface>) {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs, md },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {children}
    </Typography>
  );
}

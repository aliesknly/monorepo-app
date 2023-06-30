import { Box } from '@mui/material';
import { SxDisplayTypePropsInterface } from '../../../models';

export default function BoxContainer({ children, ...props }: any) {
  return <Box {...props}>{children}</Box>;
}

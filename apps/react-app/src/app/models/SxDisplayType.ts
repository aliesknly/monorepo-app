import { PropsChildren } from './PropsChildren.interface';

export type SxDisplayType = 'none' | 'flex';

export interface SxDisplayTypePropsInterface extends PropsChildren {
  xs: SxDisplayType;
  md: SxDisplayType;
}

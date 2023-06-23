import { Menu } from '@mui/material';
import { ComponentType, MouseEventHandler } from 'react';
import { RouterHeaderListType, routesHeaderList } from '../../models';

interface Props {
  anchorElNav: null | HTMLElement;
  handleCloseUserMenu: MouseEventHandler<HTMLLIElement> | undefined;
  handleCloseNavMenu: MouseEventHandler<HTMLLIElement> | undefined;
}

export function menuWithMenuList(
  WrapperComponent: ComponentType<RouterHeaderListType>
) {
  const Component = (props: Props) => {
    return (
      <Menu
        id="menu-appbar"
        anchorEl={props.anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(props.anchorElNav)}
        onClose={props.handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {routesHeaderList.map((route) => (
          <WrapperComponent key={route.name} {...props} {...route} />
        ))}
      </Menu>
    );
  };

  return Component;
}

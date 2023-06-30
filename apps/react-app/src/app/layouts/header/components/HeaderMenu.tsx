import { Menu, MenuItem, Typography } from "@mui/material";
import { MouseEventHandler } from "react";
import { routesHeaderList } from "../../../models";
import { Link } from "react-router-dom";

interface Props {
    anchorElNav: null | HTMLElement,
    handleCloseUserMenu: MouseEventHandler<HTMLLIElement> | undefined,
    handleCloseNavMenu: MouseEventHandler<HTMLLIElement> | undefined
}


export default function HeaderMenu({ anchorElNav, handleCloseUserMenu, handleCloseNavMenu }: Props) {
    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
        >
            {routesHeaderList.map((route) => (
                <MenuItem key={route.name} onClick={handleCloseNavMenu}>
                    <Link to={route.url}>
                        <Typography textAlign="center">{route.labeId}</Typography>
                    </Link>
                </MenuItem>
            ))}
        </Menu>
    )
}
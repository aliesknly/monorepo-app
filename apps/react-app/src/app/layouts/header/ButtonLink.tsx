import { MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ButtonLink({ name, url, labeId, handleCloseNavMenu }: any) {
    return (
        <MenuItem key={name} onClick={handleCloseNavMenu}>
            <Link to={url}>
                <Typography textAlign="center">{labeId}</Typography>
            </Link>
        </MenuItem>
    )
}
import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {Camera as CameraIcon} from "@material-ui/icons"
import useStyles from "./useStyles";

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};
export default Header;

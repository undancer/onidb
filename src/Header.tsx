import React from "react";
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
import {Camera as CameraIcon} from "@material-ui/icons"
import useStyles from "./useStyles";


const Header: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event: {}, newValue: number) => {
        setValue(newValue);
    };

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <CameraIcon className={classes.icon}/>
                <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography>
            </Toolbar>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Item One" {...a11yProps(0)}/>
                <Tab label="Item Two" {...a11yProps(1)}/>
                <Tab label="Item Three" {...a11yProps(2)}/>
            </Tabs>
        </AppBar>
    )
};
export default Header;

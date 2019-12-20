import React from "react";
import {Typography} from "@material-ui/core";
import {Copyright} from "@material-ui/icons";
import useStyles from "./useStyles";

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
            </Typography>
            <Copyright/>
        </footer>
    )
};
export default Footer;

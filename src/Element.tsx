import React from "react";
import {Card, CardContent, Container, Divider, Grid, Input} from "@material-ui/core";
import elements from "./oni";
import ToUnderscore from "./utils/StringUtils";
import useStyles from "./useStyles";

// function a11yProps(index: {}) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// function TabPanel(props: { children: {}, value: {}, index: {} }) {
//     const {children, value, index, ...other} = props;
//
//     return (
//         <Typography
//             component="div"
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && <Box p={3}>{children}</Box>}
//         </Typography>
//     );
// }

const Element: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: {}, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container style={{marginTop: 32, marginBottom: 32}}>
            {/*<div className={classes.root}>*/}
            {/*    <AppBar position="static">*/}
            {/*        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">*/}
            {/*            <Tab label="Item One" {...a11yProps(0)} />*/}
            {/*            <Tab label="Item Two" {...a11yProps(1)} />*/}
            {/*            <Tab label="Item Three" {...a11yProps(2)} />*/}
            {/*        </Tabs>*/}
            {/*    </AppBar>*/}
            {/*    <TabPanel value={value} index={0}>*/}
            {/*        Item One*/}
            {/*    </TabPanel>*/}
            {/*    <TabPanel value={value} index={1}>*/}
            {/*        Item Two*/}
            {/*    </TabPanel>*/}
            {/*    <TabPanel value={value} index={2}>*/}
            {/*        Item Three*/}
            {/*    </TabPanel>*/}
            {/*</div>*/}

            {/*<Divider/>*/}

            <form className={classes.root} noValidate autoComplete="off">
                <Input defaultValue="Hello world" inputProps={{'aria-label': 'description'}}/>
                <Input placeholder="Placeholder" inputProps={{'aria-label': 'description'}}/>
                <Input defaultValue="Disabled" disabled inputProps={{'aria-label': 'description'}}/>
                <Input defaultValue="Error" error inputProps={{'aria-label': 'description'}}/>
            </form>

            <Divider/>

            <Grid container spacing={3} style={{marginTop: 64}}>
                {
                    elements.map(element => {
                        let id = element['elementId'];
                        let name = ToUnderscore(id);
                        let src = "assets/elements/" + name + ".png";
                        return (
                            <Card key={id} style={{
                                width: 75,
                                height: 111,
                                padding: 2,
                                marginTop: 5,
                                marginBottom: 5,
                                marginLeft: 2,
                                marginRight: 2
                            }}>
                                <CardContent>
                                    <img style={{
                                        maxWidth: 64,
                                        maxHeight: 64,
                                        textAlign: "center"
                                    }} src={src}
                                         alt={name}/>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Grid>

        </Container>
    );
};
export default Element;

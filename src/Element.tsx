import React from "react";
import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    Input,
    TextField,
    Tooltip,
    Typography
} from "@material-ui/core";
import elements from "./oni/elements";
import ToUnderscore from "./utils/StringUtils";
import {
    FormatAlignCenter as FormatAlignCenterIcon,
    FormatAlignLeft as FormatAlignLeftIcon,
    FormatAlignRight as FormatAlignRightIcon,
    FormatBold as FormatBoldIcon,
    FormatItalic as FormatItalicIcon,
    FormatUnderlined as FormatUnderlinedIcon,
    Refresh as RefreshIcon,
    Search as SearchIcon
} from "@material-ui/icons";
import useStyles from "./useStyles";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";


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
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event: {}, newValue: number) => {
    //     setValue(newValue);
    // };


    return (
        <main>
            <div style={{height: 64 + 48 + 48}}></div>
            <Container>
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

                <Grid container alignItems="center" className={classes.root}>
                    <FormatAlignLeftIcon/>
                    <FormatAlignCenterIcon/>
                    <FormatAlignRightIcon/>
                    <Divider orientation="vertical"/>
                    <FormatBoldIcon/>
                    <FormatItalicIcon/>
                    <FormatUnderlinedIcon/>
                </Grid>

                <Divider/>

                <FormattedMessage id="foo" defaultMessage="Foo"/>;

                <Divider/>

                <Grid container spacing={2} alignItems="center">

                    <Grid item>
                        <SearchIcon color="inherit"/>
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            placeholder="Search by email address, phone number, or user UID"
                            InputProps={{
                                disableUnderline: true,
                                // className: classes.searchInput,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        {/*className={classes.addUser}*/}
                        <Button variant="contained" color="primary">
                            Add user
                        </Button>
                        <Tooltip title="Reload">
                            <IconButton>
                                {/*className={classes.block}*/}
                                <RefreshIcon color="inherit"/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>

                <Divider/>


                <Grid container spacing={3} style={{marginTop: 64}}>
                    {
                        elements.map(element => {
                            let id = element['elementId'];
                            let name = ToUnderscore(id);
                            let src = "assets/elements/" + name + ".png";
                            let key = element['localizationID'];

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
                                        <Typography style={{fontSize: 10}}>
                                            <FormattedHTMLMessage id={key} defaultMessage="元素遗失"/>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </Grid>

            </Container>
            <div style={{height: 64 + 48}}></div>
        </main>
    );
};
export default Element;

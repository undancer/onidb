import React from "react";
import {Card, CardContent, Container, Grid} from "@material-ui/core";
import elements from "./oni";
import ToUnderscore from "./utils/StringUtils";

const Element: React.FC = () => {
    return (

        <Container>
            <Grid container spacing={3}>
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

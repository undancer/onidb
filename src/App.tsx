import React from 'react';
import './App.css';
import {Card, CardContent, Container, Grid} from "@material-ui/core";
import elements from "./oni";

const App: React.FC = () => {

    let ToUnderscore = (input: string) => {
        let p = /([A-Z])/g;
        let str = input.replace(p, '_$1').toLowerCase();
        if (str.startsWith("_")) {
            str = str.substr(1);
        }
        return str;
    };

    return (
        <div className="App">

            <div style={{height: 64}}></div>

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
        </div>
    );
};

export default App;

import React from 'react';
import './App.css';
import {CssBaseline} from "@material-ui/core";
import {Redirect, Route, Router, Switch} from "react-router";
import Element from "./Element";
import {createBrowserHistory} from "history";
import Footer from "./Footer";
import Header from "./Header";

const App: React.FC = () => {


    let browserHistory = createBrowserHistory();


    return (
        <div className="App">
            <CssBaseline/>
            <Header/>
            <Router history={browserHistory}>
                {/*<DefaultLayout component={Root}/>*/}
                {/*<Redirect path="/" exact to="/element"/>*/}
                {/*<Route path="/element" component={Element}/>*/}
                <Switch>
                    {/*<Route path="/" exact component={Root}/>*/}
                    <Redirect path="/" exact to="/element"/>
                    <Route path="/element" component={Element}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
};

export default App;

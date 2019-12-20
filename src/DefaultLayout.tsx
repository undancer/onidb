import React from "react";
import {Route, RouteComponentProps} from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout: React.FC<any> = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(matchProps: RouteComponentProps) => (
            <div className="DefaultLayout">
                <Header/>
                <Component {...matchProps} />
                <Footer/>
            </div>
        )}>
        </Route>
    )
};


export default DefaultLayout;

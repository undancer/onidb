import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {defineMessages, IntlProvider} from "react-intl";
import zh_CN from "./oni/strings/zh_CN.json";

const locale = navigator.language;

const zhData: {} = defineMessages({...zh_CN});
const messages: {} = {};
Object.assign(messages, zhData);

ReactDOM.render(
    (
        <IntlProvider locale={locale} messages={messages} defaultLocale="en">
            <App/>
        </IntlProvider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

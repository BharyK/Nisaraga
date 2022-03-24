/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './android/app/src/Routes';
import { createBrowserHistory } from 'history';
import { routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import { fork } from 'redux-saga/effects';
import App from './App'

//import { reducer as formReducer } from 'redux-form';
import createStore from './android/app/src/store';

//TODO:: Import Reduces
import authReducer from './android/app/src/reducers/Auth';

//TODO:: Import Sagas
import authSagas from './android/app/src/sagas/Auth';

const reducer = {
    auth: authReducer
}

const sagas = [
    fork(authSagas)
]

const browserHistory = createBrowserHistory();



ReactDom.render(
    <React.StrictMode>
        <Provider store={createStore(reducer, sagas, browserHistory)}>
            <Router history={browserHistory}>
                AppRegistry.registerComponent(appName, () => App);
            </Router>
        </Provider>
    </React.StrictMode>
)

AppRegistry.registerComponent(appName, () => App);

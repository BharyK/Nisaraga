// /**
//  * @format
//  */

 import { AppRegistry } from 'react-native';
 import { name as appName } from './app.json';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './android/app/src/Routes';
import { Provider } from 'react-redux';
import { fork } from 'redux-saga/effects';
  import App from './App'
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

const RNRedux = () => (
        <Provider store={createStore(reducer, sagas)}>
                <App Routes={RoutesComponent} />
        </Provider>
)  

AppRegistry.registerComponent(appName, () => RNRedux);

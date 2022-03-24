/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './android/app/src/Routes';
import { createBrowserHistory } from 'history';
import { routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';




AppRegistry.registerComponent(appName, () => App);

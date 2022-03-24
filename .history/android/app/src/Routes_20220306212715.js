import React, { memo } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LandingPage from './containers/LandingPage/LandingPage'
import Home from './containers/Home/Home'
import Reports from './containers/Reports/Reports'
import Profile from './containers/Profile/Profile'


const RoutesComponent = () => {
    return (
        <Router>
            <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            </Scene>
        </Router>
    )
}

export default RoutesComponent;
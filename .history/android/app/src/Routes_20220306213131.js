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
                <Scene key = "LandingPage" component = {LandingPage} title = "LandingPage" initial = {true} />
                <Scene key = "about" component = {Home} title = "Home" />
            </Scene>
        </Router>
    )
}

export default RoutesComponent;
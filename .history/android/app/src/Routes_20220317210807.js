import React, { memo } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LandingPage from './containers/LandingPage/LandingPage'
import Home from './containers/Home/Home'
import Reports from './containers/Reports/Reports'
import Profile from './containers/Profile/Profile'
import { NativeRouter, Route, Link } from "react-router-native";

const RoutesComponent = () => {
    return (
        <NativeRouter>
            <Scene key = "root">
                <Scene path = "/" key = "landingPage" component = {LandingPage} title = "LandingPage" initial = {true} />
                <Scene key = "home" component = {Home} title = "Home" />
                <Scene key = "profile" component = {Profile} title = "Profile" />
            </Scene>
        </NativeRouter>
    )
}

export default RoutesComponent;
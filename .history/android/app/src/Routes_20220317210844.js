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
            
                <Route path = "/" key = "landingPage" component = {LandingPage} />
                <Route key = "home" component = {Home} title = "Home" />
                <Route key = "profile" component = {Profile} title = "Profile" />
           
        </NativeRouter>
    )
}

export default RoutesComponent;
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
                <Route path = "/" element = {<LandingPage />} />
                <Route key = "home" element = {<Home/>} />
                <Route key = "profile" element = {<Profile/>} />
        </NativeRouter>
    )
}

export default RoutesComponent;
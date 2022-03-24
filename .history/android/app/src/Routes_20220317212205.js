import React, { memo } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LandingPage from './containers/LandingPage/LandingPage'
import Home from './containers/Home/Home'
import Reports from './containers/Reports/Reports'
import Profile from './containers/Profile/Profile'
import { NativeRouter, Route, Link } from "react-router-native";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const RoutesComponent = () => {
    return (
        <Routes>
                <Route path = "/" element = {<LandingPage />} />
                <Route key = "home" element = {<Home/>} />
                <Route key = "profile" element = {<Profile/>} />
        </Routes>
    )
}

export default RoutesComponent;
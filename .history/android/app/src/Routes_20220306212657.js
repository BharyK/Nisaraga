import React, { memo } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LandingPage from './containers/LandingPage/LandingPage'
import Home from './containers/Home/Home'
import Reports from './containers/Reports/Reports'
import Profile from './containers/Profile/Profile'


const RoutesComponent = () => {
    return (
        <Router>
            <Scene  >
                <Stack.Screen
                    name="Home"
                    component={LandingPage}
                //options={{ title: 'Welcome' }}
                />
            </Scene>
        </Router>
    )
}

export default RoutesComponent;
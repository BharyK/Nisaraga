import React, { memo } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import loadable from 'react-loadable';
//import Spinner from './components/Spinner/Spinner';
import { NavigationContainer } from '@react-navigation/native';

// const load = loader => loadable({
//     loader, loading: Spinner
// })


const LandingPage = load(() =>
    import('./containers/LandingPage/LandingPage')
);
const Home = load(() =>
import('./containers/Home/Home')
);

const Reports =  load(() =>
import('./containers/Reports/Reports')
);

const Profile =  load(() =>
import('./containers/Profile/Profile')
);

const RoutesComponent = () => {
    return (
        <Routes>
            <Route exact element={<LandingPage/>} path="/" />
            <Route exact element={<Home/>} path="/home" />
            <Route exact element={<Reports/>} path="/reports" />
            <Route exact element={<Profile/>} path="/profile" />
        </Routes>
    )
}

export default RoutesComponent;
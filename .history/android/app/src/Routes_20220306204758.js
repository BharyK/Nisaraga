import React, { memo } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import loadable from 'react-loadable';
import Spinner from './components/Spinner/Spinner';

const load = loader => loadable({
    loader, loading: Spinner
})


const LandingPage = load(() =>
    import('./container/LandingPage/LandingPage')
);
const SignInPage = load(() =>
import('./container/Home/Home')
);

const RoutesComponent = () => {
    return (
        <Routes>
            <Route exact element={<LandingPage/>} path="/" />
            <Route exact element={<SignInPage/>} path="/home" />
        </Routes>
    )
}

export default RoutesComponent;
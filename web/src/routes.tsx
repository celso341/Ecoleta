import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>        {/* O "exact": ele verifica a igualdade do barra da URL*/}
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
    );
}

export default Routes;
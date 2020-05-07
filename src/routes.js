import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const Routes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/search" component={Search} />
                <Home><Route exact path="/home/login"><Login/></Route></Home>
            </Switch>
        </App>
    );
};

export default Routes;
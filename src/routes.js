import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyRepositories from './pages/MyRepositories/MyRepositories';
import Profile from './pages/Profile/Profile';

const Routes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/search" component={Search} />
                <Route exact path="/myrepositories" component={MyRepositories} />
                <Route exact path="/profile" component={Profile}/>
                <Home><Route exact path="/home/login"><Login/></Route></Home>
            </Switch>
        </App>
    );
};

export default Routes;
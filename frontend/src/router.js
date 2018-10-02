import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './home-screen';
import NotFoundScreen from './not-found-screen';

let Router = () =>
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="*" component={NotFoundScreen} />
            </Switch>
        </div>
    </HashRouter>

export default Router;
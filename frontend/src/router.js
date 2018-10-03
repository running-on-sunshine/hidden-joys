import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './home-screen';
import SearchMapScreen from './search-map-screen';
import NotFoundScreen from './not-found-screen';

let Router = () =>
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/search" component={SearchMapScreen} />
                <Route path="*" component={NotFoundScreen} />
            </Switch>
        </div>
    </HashRouter>

export default Router;
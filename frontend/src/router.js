import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './home-screen';
import AboutScreen from './about-screen';
import SearchMapScreen from './search-map-screen';
import AddItemScreen from './add-item-screen';
import ItemDetailsScreen from './item-details-screen';
import SubmissionSuccessfulScreen from './submission-successful-screen';
import FoundItemsScreen from './found-items-screen';
import FoundSuccessfulScreen from './found-successful-screen';
import NotFoundScreen from './not-found-screen';

let Router = () =>
    <HashRouter>
        <div className="full-screen">
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path='/about' component={AboutScreen} />
                <Route exact path="/search" component={SearchMapScreen} />
                <Route exact path="/add" component={AddItemScreen} />
                <Route exact path="/items/:id" component={ItemDetailsScreen} />
                <Route exact path="/submit-success" component ={SubmissionSuccessfulScreen} />
                <Route exact path="/found" component={FoundItemsScreen} />
                <Route exact path="/found-success" component={FoundSuccessfulScreen} />
                <Route path="*" component={NotFoundScreen} />
            </Switch>
        </div>
    </HashRouter>

export default Router;
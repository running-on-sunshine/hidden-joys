import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';

let app = <Provider store={store}>
    <Router />
</Provider>

ReactDOM.render(app, document.getElementById('root'));
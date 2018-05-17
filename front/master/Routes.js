import React, { Component } from 'react';
import { Route } from 'react-router';
import './less/style.less';

import Home from './controllers/Home';

export default class RouteList extends Component  {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
            </div>
        );
    }
}
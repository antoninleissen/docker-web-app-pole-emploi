import React, { Component } from 'react';
import HomeContainer from '../components/Home';
import GlobalHeader from '../components/GlobalHeader';

export default class Home extends Component {
    render() {
        return (
            <div>
                <GlobalHeader />
                <div className="content-page">
                    <HomeContainer />
                </div>
            </div>
        );
    }
}
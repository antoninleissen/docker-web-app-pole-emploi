import React, { Component } from 'react';
import AppContainer from '../components/App';
import { CSSTransitionGroup } from 'react-transition-group';
import RouteList from '../Routes';
import '../less/style.less';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        let key = document.URL.split('/')[3];
        return (
            <div>
                <CSSTransitionGroup
                    transitionName="contentTransition"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <div key={key}>
                        <AppContainer>
                            <RouteList/>
                            {this.props.children}
                        </AppContainer>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
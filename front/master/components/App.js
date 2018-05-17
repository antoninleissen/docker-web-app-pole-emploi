import React, { Component } from 'react';
import '../less/reset.less';
import '../less/style.less';
import PropTypes from 'prop-types';

class App extends Component {
    UNSAFE_componentWillMount() {
        this.props.load();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    load: PropTypes.func.isRequired,
    children: PropTypes.object,
};

export default App;
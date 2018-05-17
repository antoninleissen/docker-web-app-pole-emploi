import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../less/header.less';
import '../less/style.less';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class GlobalHeader extends Component {

    handleSearch(e, history, term) {
        e.preventDefault();
        history.push('/products/search/' + term);
        return false;
    }

    render() {

        const { history } = this.props;

        return (
            <div id="headerReplacement">
                <header>
                    <div id="headerContentBloc" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="contentHeader col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Link className="headerLogo" to="/">
                                <img className="logo logo-big" src="http://workshop.local/static/images/header-logo-pole-emploi-mono.png" alt="Bonum" />
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

GlobalHeader.propTypes = {
    history: PropTypes.object.isRequired,
};

export default withRouter(GlobalHeader);
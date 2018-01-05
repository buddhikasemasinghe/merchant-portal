import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class HomePageHeader extends Component {
    render() {
        return (
            <div className="home-page-header">
                <div className="company-logo">
                    <img
                        src="https://s3-ap-southeast-2.amazonaws.com/buyiteer-static-media/images/Buyiteer-main-screen-logo.png"/>
                </div>
                <div className="header-top-menu">
                    <div>What we do</div>
                    <div>How it works</div>
                    <div>Latest News</div>
                </div>
                <div className="header-button-panel">
                    <Link to="full">
                    <Button primary>Merchant Signup</Button>
                    </Link>
                    <Link to="signin">
                    <Button primary>Merchant Login</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

HomePageHeader.propTypes = {};

export default HomePageHeader;

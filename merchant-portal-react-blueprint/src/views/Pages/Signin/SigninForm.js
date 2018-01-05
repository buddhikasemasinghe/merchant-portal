import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import HomePageFooter from "../../../components/Footer/HomePageFooter";

class SigninForm extends Component {
    render() {
        return (
            <div class="signin-page-wrapper">
                <div>
                </div>
                <div>
                    <Form class="ui form">
                        <div class="field">
                            <label>Email address</label>
                            <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <button class="ui large button" type="submit">Submit</button>
                    </Form>
                </div>
                <HomePageFooter/>
            </div>
        );
    }
}

SigninForm.propTypes = {};

export default SigninForm;

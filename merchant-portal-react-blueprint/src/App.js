import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './views/Pages/HomePage/HomePage'
import SigninForm from "./views/Pages/Signin/SigninForm";
import MainContent from "./containers/MainContent/MainContent";

const App = () => (
    <div className="ui">
        <Route path="/" exact component={HomePage}/>
        <Route path="/signin" exact component={SigninForm}/>
        <Route path="/loggedIn" exact component={MainContent}/>
    </div>
);

export default App;

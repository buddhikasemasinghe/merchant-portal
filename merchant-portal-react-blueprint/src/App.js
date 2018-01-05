import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './views/Pages/HomePage/HomePage'
import SigninForm from "./views/Pages/Signin/SigninForm";
import Full from "./containers/Full/Full";

const App = () => (
    <div className="ui">
        <Route path="/" exact component={HomePage}/>
        <Route path="/signin" exact component={SigninForm}/>
        <Route path="/full" exact component={Full}/>
    </div>
);

export default App;

import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import App from './App';


 const Routes = (
    <Router history={browserHistory}>
        <Route path='/users' component={App} />
    </Router>
)

export default Routes;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import SignUp from './components/signUp'
import NotFound from './components/notFound'
import * as serviceWorker from './serviceWorker';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signup" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

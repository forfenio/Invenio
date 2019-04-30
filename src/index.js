import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Login from './components/login'
import SignUp from './components/signUp'
import Home from './components/home';
import { createStore } from "redux"
import { Provider } from "react-redux"

import NotFound from './components/notFound';
import AppContainer from './components/AppContainer';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const initialState = {
  userName: 'aaa',
  password: 'bbb',
  postImgs: []
}

function reducer (state = initialState, action) {
  // console.log(action);
  switch(action.type) {
    case 'LOGIN':
      return action.user;
    default: 
      return state
  }
}

const store = createStore(reducer);

const routing = (
  <Provider store={store}>
    <Router>
        <div>
          <Switch>
            
            <Route exact path="/" render={props => <App {...props} />} />
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" render={props => <Home {...props} />} />
            <Route path="/app" render={props => <AppContainer {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

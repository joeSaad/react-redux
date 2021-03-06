import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

class World extends Component {
  render() {
    return (
      <div>World</div>
    )
  }
}

render(
  <Provider store={ createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Hello } />
        <Route path="/hello" component={ Hello } />
        <Route path="/world" component={ World } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

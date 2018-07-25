import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// create 2 seperate components for testing

class Hello extends React.Component {
  render() { return <div>hello</div> }
}

class Farewell extends React.Component {
  render() { return <div>Farewell</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      {// path = string for the path url
      }
      <div>
        navigation header here
        <Route path="/hello" component={Hello} />
        <Route path="/farewell" component={Farewell} />
        <Route />
      </div>

    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

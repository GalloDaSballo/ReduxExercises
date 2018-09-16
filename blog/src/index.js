import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import PostsIndex from './components/posts_index'


/**
 * Ajax
 */
import promise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

/**
 * Import Statements for ReactRouter
 * BrowserRouter -> Interacts with History it works with the whole URL
 * Route -> Config for routes based on URL
 */
import { BrowserRouter, Route } from 'react-router-dom'


/**2 Small React Components just for debug */
class Hello extends React.Component{
  render(){
    return <div>Hello!</div>
  }
}

class Goodbye extends React.Component{
  render(){
    return <div>Goodbye!</div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>This header is permanent</h1>
        {/*Route needs path and component to work*/}
        <Route path="/" component={PostsIndex} />
        {/*  \ :id means that it's a widlcard */}
        <Route path="/posts/:id" component={PostsIndex} />
        <Route path="/posts/new" component={PostsIndex} />

        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

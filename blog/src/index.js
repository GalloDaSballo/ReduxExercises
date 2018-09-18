import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostShow from './components/post_show'

/**
 * Ajax
 */
import ReduxPromise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

/**
 * Import Statements for ReactRouter
 * BrowserRouter -> Interacts with History it works with the whole URL
 * Route -> Config for routes based on URL
 */
import { BrowserRouter, Route, Switch } from 'react-router-dom'


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
        {/* With the switch the first route matched is the only one showed */}
        <Switch>
          {/*Route needs path and component to work*/}
          <Route path="/posts/new" component={PostsNew} />

          {/*  \ :id means that it's a widlcard, this needs to be second so that the # will be the wildcard match */}
          <Route path="/posts/:id" component={PostShow} />

          <Route path="/" component={PostsIndex} />

          <Route path="/hello" component={Hello} />
          <Route path="/goodbye" component={Goodbye} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

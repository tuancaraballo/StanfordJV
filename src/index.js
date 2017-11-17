import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
import {addPost} from './actions/actions.js'
// import {fetchPosts} from './actions/actions.js'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

/**
  PROJECT STATUS: fetchPost in SearchList is not working
*/

let obj = {
  title:"Help grow the Stanford community",
  Description: "While we eat nice meals in the States, there are thousands of kids who are starving",
}
store.dispatch(addPost(obj));
//debugger;
//store.dispatch(fetchPosts());

ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>
    , document.getElementById('root'));
registerServiceWorker();

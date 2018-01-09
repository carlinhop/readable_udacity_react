import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'; 
import reducer from "./reducers/reducer";
import { HELLO } from "./actions/hello";


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);  

export const store = createStoreWithMiddleware(reducer,
                         window.__REDUX__DEVTOOLS_EXTENSION__ && window.__REDUX__DEVTOOLS_EXTENSION__());


console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();

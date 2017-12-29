import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import { HELLO } from "./actions/hello";
import { showHello } from "./actions/hello";



const store = createStore(reducer,
                         window.__REDUX__DEVTOOLS_EXTENSION__ && window.__REDUX__DEVTOOLS_EXTENSION__());

store.dispatch(showHello());
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();

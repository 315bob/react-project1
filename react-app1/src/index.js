import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import signupReducer from "./store/reducers/signup";
import loginReducer from "./store/reducers/login";
import searchReducer from "./store/reducers/search";
import productReducer from "./store/reducers/product";

import thunk from "redux-thunk";
import { compose } from "redux";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.common["Authorization"] = null;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  request => {
    console.log(request);
    request.headers.Authorization = localStorage.getItem("token");
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  search: searchReducer,
  product: productReducer
});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

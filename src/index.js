import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';
import Login from './pages/login/login.page'
import HomePage from './pages/home/home.page'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(

  <Router>
  <React.StrictMode>
    <div>
    <Route exact={true} path="/" component={HomePage}/>
    <Route exact={true} path={"/login"} component={Login}/>
    </div>
   
  </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

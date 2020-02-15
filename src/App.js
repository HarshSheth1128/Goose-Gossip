import React, { Component } from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ChatPage from './pages/ChatPage/ChatPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CONSTANTS from './constants/constants'
import { createBrowserHistory } from "history";
import ViewPage from './pages/ViewPage/ViewPage';
import ProtectedRoute from './common/ProtectedRoute/ProtectedRoute.jsx';
import socket from './common/socket';
import auth from './common/auth';

let axios = require('axios').default;

axios.defaults.baseURL = CONSTANTS.SERVER.HOSTNAME;


const history = createBrowserHistory();
const { NOT_LOGGED_IN } = CONSTANTS.LOGIN_STATE;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: NOT_LOGGED_IN,
      username: null,
      user_id: null,
    };
    let authObject = JSON.parse(localStorage.getItem('auth'));
    if (authObject) {
      auth.isLoggedIn = authObject.isLoggedIn;
      auth.username = authObject.username;
      auth.user_id = authObject.user_id;
    }
  }

  componentDidMount() {
    socket.on('chat response', function (msg) {
      console.log("SENT BACK ", msg);
    });
  }

  handleLogin = (username, user_id) => {
    auth.isLoggedIn = true;
    auth.username = username;
    auth.user_id = user_id;
    localStorage.setItem('auth', JSON.stringify(auth));
    console.log(auth);
  }


  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={() => <LoginPage handleLogin={this.handleLogin} />} />
          <Route exact path="/app" component={() => <HomePage loginState={this.state.loginState} />} />
          <ProtectedRoute path="/app/test" state={{ ...this.state }} component={ChatPage} />
          <Route path="/app/categories" component={() => <ViewPage loginState={this.state.loginState} />} />
          <Route path="/app/chats" component={() => <ViewPage loginState={this.state.loginState} />} />
        </Switch>
      </Router >
    );
  };
}

export default App;

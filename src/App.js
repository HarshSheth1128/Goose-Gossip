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
import socketIOClient from 'socket.io-client';
const axios = require('axios').default;
const socket = socketIOClient(CONSTANTS.SERVER.HOSTNAME);


axios.defaults.baseURL = CONSTANTS.SERVER.HOSTNAME;


const history = createBrowserHistory();
const { GUEST_LOGIN, USER_LOGIN, NOT_LOGGED_IN } = CONSTANTS.LOGIN_STATE;
const { GUEST_ENTRY, LOGIN_ENTRY, SIGNUP_ENTRY } = CONSTANTS.LOGIN_TYPE;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: NOT_LOGGED_IN,
      username: null,
      user_id: null
    };

  }

  componentDidMount() {
    socket.on('chat response', function (msg) {
      console.log("SENT BACK ", msg);
    });
  }

  handleLogin = (LOGIN_TYPE, username, user_id) => {
    switch (LOGIN_TYPE) {
      case GUEST_ENTRY:
        this.setState({ loginState: GUEST_LOGIN, username, user_id });
        break;
      case LOGIN_ENTRY:
        this.setState({ loginState: USER_LOGIN, username, user_id });
        break;
      case SIGNUP_ENTRY:
        this.setState({ loginState: USER_LOGIN, username, user_id });
        break;
      default:
        this.setState({ loginState: NOT_LOGGED_IN, username, user_id });
        break;
    }
    console.log(this.state);
  }


  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={() => <LoginPage handleLogin={this.handleLogin} />} />
          <Route exact path="/app" component={() => <HomePage loginState={this.state.loginState} />} />
          <Route path="/app/*" component={() => <ChatPage socket={socket} {...this.state} />} />
        </Switch>
      </Router >
    );
  };
}

export default App;

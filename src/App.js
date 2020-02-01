import React, {Component} from 'react';
import './App.css';
//import NavBar from "./common/BottomNavBar/BottonNavBar"
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CONSTANTS from './constants/constants'
import { createBrowserHistory } from "history";
const axios = require('axios').default;

axios.defaults.baseURL = CONSTANTS.SERVER.HOSTNAME;

const history = createBrowserHistory();
const { GUEST_LOGIN, USER_LOGIN, NOT_LOGGED_IN } = CONSTANTS.LOGIN_STATE;
const { GUEST_ENTRY, LOGIN_ENTRY, SIGNUP_ENTRY } = CONSTANTS.LOGIN_TYPE;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: NOT_LOGGED_IN
    };
  }
  
  handleLogin = (LOGIN_TYPE) => {
    switch (LOGIN_TYPE) {
      case GUEST_ENTRY:
        this.setState({ loginState: GUEST_LOGIN });
        break;
      case LOGIN_ENTRY:
        this.setState({ loginState: USER_LOGIN });
        break;
      case SIGNUP_ENTRY:
        this.setState({ loginState: USER_LOGIN })
        break;
      default:
        this.setState({ loginState: NOT_LOGGED_IN })
        break;
    }
  }


  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={() => <LoginPage handleLogin={this.handleLogin} />} />
          <Route exact path="/app" component={() => <HomePage loginState={this.state.loginState} />} />
        </Switch>
      </Router >
    );
  };
}

export default App;

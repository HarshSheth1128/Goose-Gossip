import React, { Component } from 'react';
import './LoginPage.css'
import Goose from '../../images/goose.png';
import Modal from '../../common/Modal/Modal';
import CONSTANTS from '../../constants/constants';
import { withRouter } from "react-router";
import AuthAPI from '../../api/Auth';

const axios = require('axios');

const { GUEST_ENTRY, LOGIN_ENTRY, SIGNUP_ENTRY } = CONSTANTS.LOGIN_TYPE;
const { AUTHENTICATE, REGISTER } = CONSTANTS.SERVER;

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            email: '',
            username: '',
            password: '',
            entryVersion: GUEST_ENTRY,
            loginFail: false
        }
    }

    handleLogInSignUp = (buttonType) => {
        if (buttonType === "LogIn") {
            if (this.state.entryVersion !== LOGIN_ENTRY) {
                this.setState({ entryVersion: LOGIN_ENTRY });
            } else {
                this.setState({ entryVersion: GUEST_ENTRY });
            }
        } else {
            if (this.state.entryVersion === SIGNUP_ENTRY) {
                this.setState({ entryVersion: GUEST_ENTRY });
            } else {
                this.setState({ entryVersion: SIGNUP_ENTRY });
            }

        }
    }

    handleChange = (key, value) => {
        this.setState({ [key]: value });
    }

    handleSubmit = () => {
        let { username, password, email, entryVersion } = this.state;
        if (entryVersion === SIGNUP_ENTRY) {
            AuthAPI.register_user({ username, password, email })
                .then((res) => {
                    this.props.handleLogin(
                        res.data.username,
                        res.data.id
                    );
                })
                .then(this.props.history.push('/app/test'))
                .catch(this.setState({ loginFail: true }));
        } else {
            const User = (entryVersion === GUEST_ENTRY) ? null : { username, password }
            AuthAPI.authenticate_user(User)
                .then((res) => {
                    this.props.handleLogin(
                        res.data.username,
                        res.data.id
                    );
                })
                .then(this.props.history.push('/app/test'))
                .catch(this.setState({ loginFail: true }));
        }
    }

    render() {
        return (
            <>
                <div className="Root">
                    <div className="LeftContentContainer">
                        <p id="InfoText" onClick={(e) => { this.setState({ showModal: true }) }}>What is this?</p>
                    </div>
                    <div className="CenterContentContainer">
                        <img id="gooseImage" src={Goose} alt="goose" />
                        <div id="input-root">
                            {this.state.entryVersion === SIGNUP_ENTRY &&
                                <input className={(this.state.loginFail) ? "fail" : "input"} value={this.state.email} onChange={(e) => { this.handleChange('email', e.target.value) }} placeholder="Email"></input>
                            }
                            {this.state.entryVersion !== GUEST_ENTRY &&
                                <>
                                    <input className={(this.state.loginFail) ? "fail" : "input"} value={this.state.username} onChange={(e) => { this.handleChange('username', e.target.value) }} placeholder="Username"></input>
                                    <input className={(this.state.loginFail) ? "fail" : "input"} type="password" value={this.state.password} onChange={(e) => { this.handleChange('password', e.target.value) }} placeholder="Password"></input>
                                </>
                            }
                            {this.state.loginFail && <span className="failText">Invalid Username/Password</span>}
                        </div>
                        <div className="ButtonWrapper">
                            <button className="MainPageEntryButton" onClick={this.handleSubmit}><b>{(this.state.entryVersion === GUEST_ENTRY) ? "Enter as Guest" : "Enter"}</b></button>
                        </div>
                    </div>
                    <div className="RightContentContainer">
                        <button className="LogInSignUpButton" onClick={(e) => this.handleLogInSignUp("LogIn")}><b>{(this.state.entryVersion === LOGIN_ENTRY) ? 'Guest Entry' : 'Log In'}</b></button>
                        <button className="LogInSignUpButton" onClick={(e) => this.handleLogInSignUp("SignUp")}><b>{(this.state.entryVersion === SIGNUP_ENTRY) ? 'Guest Entry' : 'Sign Up'}</b></button>
                    </div>
                </div>
                <Modal show={this.state.showModal} handleClose={() => { this.setState({ showModal: false }) }}>
                    <div id="modalFlex">
                        <div id="modalSplash">
                            <div id="modalStartDiv">
                                <p id="modalTitle"><b>What is this?</b></p>
                                <button onClick={() => { this.setState({ showModal: false }) }} id="closeButton">X</button>
                            </div>
                            <div>
                                <p>Goose Gossip is an anonymous chatroom and forum for Waterloo students to discuss anything and everything.
                                We think having to use Facebook + Discord + Reddit + Slack + Google Calendar is a waste of time and doesn't create community.
                                It leaves you feeling all over the place and doesn't provide a place where all your fellow students can come gather.
                                On Goose Gossip we have chatrooms for classes, different years, different buildings on campus, different moods, different languages, clubs.
                                The list goes on and on, you can even make your own rooms if you feel something is missing!</p>
                            </div>
                            <div>
                                <p>No information is saved or recorded about any of its users, so go ahead and indulge your wildest thoughts.
                                Speak freely without fear of being reprimanded or located, and connect with people based off of just their words.
                                Just don’t be a silly goose, and use the anonymity responsibly, and most of all have fun.</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}

export default withRouter(LoginPage);

/*
Goose Gossip is an anonymous chatroom and forum for Waterloo students to discuss anything and everything.
We think having to use Facebook + Discord + Reddit + Slack + Google Calendar is a waste of time and doesn't create community.
It leaves you feeling all over the place and doesn't provide a place where all your fellow students can come gather.
On Goose Gossip we have chatrooms for classes, different years, different buildings on campus, different moods, different languages, clubs.
The list goes on and on, you can even make your own rooms if you feel something is missing!

No information is saved or recorded about any of its users, so go ahead and indulge your wildest thoughts.
Speak freely without fear of being reprimanded or located, and connect with people based off of just their words.
Just don’t be a silly goose, and use the anonymity responsibly, and most of all have fun.
*/
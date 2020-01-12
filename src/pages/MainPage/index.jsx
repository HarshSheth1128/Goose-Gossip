import React, { Component } from 'react';
import './index.css'
import Goose from '../../images/goose.png';
import Modal from '../../common/Modal';
import LogInSignUp from '../../common/LogInSignUp';

class MainPage extends Component {
    state = {
        showModal: false,
        email: '',
        username: '',
        password: '',
        entryVersion: -1
    }

    handleLogInSignUp = (buttonType) => {
        if (buttonType === "LogIn") {
            if (this.state.entryVersion !== 0) {
                this.setState({ entryVersion: 0 });
            } else {
                this.setState({ entryVersion: -1 });
            }
        } else {
            if (this.state.entryVersion === 1) {
                this.setState({ entryVersion: -1 });
            } else {
                this.setState({ entryVersion: 1 });
            }

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
                        <LogInSignUp formState={this.state.entryVersion} />
                        <div className="ButtonWrapper">
                            <button className="MainPageEntryButton"><b>{(this.state.entryVersion === -1) ? "Enter as Guest" : "Enter"}</b></button>
                        </div>
                    </div>
                    <div className="RightContentContainer">
                        <button className="LogInSignUpButton" onClick={(e) => this.handleLogInSignUp("LogIn")}><b>{(this.state.entryVersion === 0) ? 'Guest ' : ''}Log In</b></button>
                        <button className="LogInSignUpButton" onClick={(e) => this.handleLogInSignUp("SignUp")}><b>{(this.state.entryVersion === 1) ? 'Guest Log In' : 'Sign Up'}</b></button>
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

export default MainPage;

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
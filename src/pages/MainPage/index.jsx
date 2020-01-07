import React, { Component } from 'react';
import './MainPage.css'
import Goose from '../../images/goose';
import Modal from '../../common/Modal';

class MainPage extends Component {
    state = {
        showModal: false
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
                        <div className="ButtonWrapper">
                            <button className="MainPageEntryButton"><b>Enter as Guest</b></button>
                        </div>
                    </div>
                    <div className="RightContentContainer">
                        <button className="LogInSignUpButton"><b>Log In</b></button>
                        <button className="LogInSignUpButton"><b>Sign Up</b></button>
                    </div>
                </div>
                <Modal show={this.state.showModal} handleClose={() => { this.setState({ showModal: false }) }}>
                    <div id="modalFlex">
                        <div id="modalSplash">
                            <button onClick={() => { this.setState({ showModal: false }) }} id="closeButton">X</button>
                            <div id="modalStartDiv">
                                <p id="modalTitle">What is this?</p>
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
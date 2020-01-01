import React, { Component } from 'react';
import './MainPage.css'
import Goose from '../images/goose.png';

class MainPage extends Component {
    state = {}
    render() {
        return (
            <div className="Root">
                <div className="LeftContentContainer">
                    <p id="InfoText">What is this?</p>
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
        );
    }
}

export default MainPage;
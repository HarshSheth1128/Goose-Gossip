import React, { Component } from 'react';
import './MainPage.css'
import Goose from '../images/goose.png';

class MainPage extends Component {
    state = {}
    render() {
        return (
            <div className="Root">
                <div className="CenterContentContainer">
                    <img id="gooseImage" src={Goose} alt="goose" />
                    <div className="ButtonWrapper">
                        <button className="MainPageEntryButton"><b>Enter as Guest</b></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
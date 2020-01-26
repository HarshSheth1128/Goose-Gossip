import React, { Component } from 'react';
import SearchBar from '../../common/SearchBar/SearchBar';
import './ChatPage.css';
import { withRouter } from "react-router";

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatType: "all"
        };
    }


    render() {
        return (
            <div className="chat-page-root">
                <div className="side-bar-root">
                    <h id="chat-header"> <b>Chats</b> </h>
                    <div className="chat-sort-button-container">
                        <button className={`chat-sort-button ${(this.state.chatType === "all") ? "activated" : ""}`} onClick={() => { this.setState({ chatType: "all" }) }}><b>All</b></button>
                        <button className={`chat-sort-button ${(this.state.chatType === "direct") ? "activated" : ""}`} onClick={() => { this.setState({ chatType: "direct" }) }}> <b>Direct</b> </button>
                    </div>
                    <SearchBar />
                </div >
                <div className="chat-area-root">

                </div>
            </div >
        );
    }
}

export default withRouter(ChatPage);
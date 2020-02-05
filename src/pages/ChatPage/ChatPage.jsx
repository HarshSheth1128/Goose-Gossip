import React, { Component } from 'react';
import SearchBar from '../../common/SearchBar/SearchBar';
import './ChatPage.css';
import { withRouter } from "react-router";
import ContentEditable from 'react-contenteditable'

const axios = require('axios');
const CONSTANTS = require('../../constants/constants');
const { CHATS } = CONSTANTS.SERVER;

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatType: "all",
            message: "",
            chatShowType: "all",
            filterString: "",
            chatTyping: false,
            messages: [
                {
                    messageID: 1,
                    sentBy: "harsh",
                    content: "yoyoyo"
                },
                {
                    messageID: 2,
                    sentBy: "bob",
                    content: "hihihi"
                },
            ],
            rooms: [
                {
                    id: 1,
                    chat_name: "CS241 Fanclub",
                    latestMessage: "hi whats, this is a really long text i like long texts, but i should make this even longer. but then what happens if its THIS long, Will this break everything? Probably not, but this will ;)",
                    roomIcon: "CS 241",
                    isActive: true,
                    type: "room"
                },
                {
                    id: 2,
                    chat_name: "Nullptr Exception Gang",
                    latestMessage: "nothing much",
                    roomIcon: "CS 350",
                    isActive: false,
                    type: "room"
                },
                {
                    id: 3,
                    chat_name: "Anjali",
                    latestMessage: "yo i am a baby",
                    roomIcon: "Anjali",
                    isActive: false,
                    type: "direct"
                }
            ]
        };
    }

    componentDidMount() {
        this.props.socket.on('chat response', (msg) => {
            console.log("SENT ", msg);
            this.setState({
                messages: [
                    ...this.state.messages,
                    // { messageID: "test", sentBy: "harsh", content: msg },
                    { messageID: "test", sentBy: "bob", content: msg }
                ]
            });
        });
        this.props.socket.on('chat typing', (isTyping) => {
            console.log(isTyping);
            this.setState({
                chatTyping: isTyping
            })
        });
        console.log(this.props);
        axios.get(`${CHATS}/${this.props.user_id}`).then((res) => {
            this.setState({ rooms: res.data });
        })
    }

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value }, () => {
            this.props.socket.emit('chat typing', this.state.message !== '');
        });
    }

    sendMessage = (e) => {
        console.log(this.state.message);
        let message = this.state.message.replace("<div>", "");
        console.log("edited", message);
        if (message === "") return;
        this.props.socket.emit('chat message', message);
        this.setState({
            message: "",
            messages: [
                ...this.state.messages,
                { messageID: 5, sentBy: "harsh", content: message }
            ]
        });
    }

    renderMessages = () => {
        console.log("render");
        return this.state.messages.map((message) => {
            let class_name = (message.sentBy === "harsh") ? "user-message" : "server-message";
            return <div className={class_name}><span>{message.content}</span></div>
        })
    }

    renderChatRooms = () => {
        return this.state.rooms.map((room) => {
            if (((this.state.chatShowType === "direct" && room.type === "direct") || this.state.chatShowType === "all") && room.chat_name.includes(this.state.filterString)) {
                return <div className={`chat-room${(room.isActive) ? " active" : ""}`}>
                    <div className="chat-room-icon">{room.roomIcon}</div>
                    <div className="chat-room-info">
                        <span>{room.chat_name}</span>
                        <span class="chat-room-message">{room.latestMessage}</span>
                    </div>
                </div >
            } else {
                return null;
            }
        });
    }

    handleEnterSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.sendMessage();
        }
    }


    render() {
        return (
            <div className="chat-page-root">
                <div className="side-bar-root">
                    <h id="chat-header"> <b>Chats</b> </h>
                    <div className="chat-sort-button-container">
                        <button className={`chat-sort-button ${(this.state.chatShowType === "all") ? "activated" : ""}`} onClick={() => { this.setState({ chatShowType: "all" }) }}><b>All</b></button>
                        <button className={`chat-sort-button ${(this.state.chatShowType === "direct") ? "activated" : ""}`} onClick={() => { this.setState({ chatShowType: "direct" }) }}> <b>Direct</b> </button>
                    </div>
                    <SearchBar />
                    {this.renderChatRooms()}
                </div >
                <div className="chat-area-root">
                    <div className="chat-root">
                        {this.renderMessages()}
                        {this.state.chatTyping && <div className="server-message">...</div>}

                    </div>
                    <div className="chat-box">
                        <ContentEditable html={this.state.message} id="message-input" onKeyPress={this.handleEnterSubmit} onChange={this.handleMessageChange}></ContentEditable>
                        <button className="chat-box-button" onClick={this.sendMessage}>
                            <span><i aria-hidden="false" id="chat-chevron" className="fas fa-chevron-up"></i></span>
                        </button>
                        <button className="chat-box-button">
                            {/* <span><i aria-hidden="true" id="chat-chevron" className="fas fa-smile"></i></span> */}
                        </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(ChatPage);
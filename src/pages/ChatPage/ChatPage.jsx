import React, { Component } from 'react';
import SearchBar from '../../common/SearchBar/SearchBar';
import './ChatPage.css';
import { withRouter } from "react-router";
import ContentEditable from 'react-contenteditable'
import socket from '../../common/socket';
import auth from '../../common/auth';
import ChatAPI from '../../api/Chats';

const axios = require('axios');
const CONSTANTS = require('../../constants/constants');
const { CHATS, MESSAGES } = CONSTANTS.SERVER;


class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatType: "all",
            message: "",
            chatShowType: "all",
            filterString: "",
            chatTyping: false,
            activeChat: null,
            messages: [],
            rooms: []
        };
        this.setupSocket();
        this.getChats();
    }

    setupSocket() {
        socket.on('chat response', (msg) => {
            console.log("SENT ", msg);
            this.setState({
                messages: [
                    ...this.state.messages,
                    { messageID: "test", sentBy: "bob", content: msg }
                ]
            });
        });
        socket.on('chat typing', (isTyping) => {
            console.log(isTyping);
            this.setState({
                chatTyping: isTyping
            })
        });
    }

    getChats() {
        ChatAPI.get_chats_by_user_id().then((res) => {
            res.data.forEach((room) => {
                return { ...room, isActive: false };
            });
            if (res.data[0]) res.data[0].isActive = true;
            this.setState({ rooms: res.data, activeChat: res.data[0] });
        }).then(() => {
            this.getMessagesForCurrentChat();
        });
    }

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value }, () => {
            socket.emit('chat typing', this.state.message !== '');
        });
    }

    sendMessage = (e) => {
        const { message } = this.state;

        // Don't send blank messages
        if (message === "") return;

        // Get active chat
        let activeChatID;
        for (let room of this.state.rooms) {
            if (room.isActive) activeChatID = room.isActive;
        }

        // Send message to api, state, then socket
        ChatAPI.send_message({
            sent_by: auth.user_id,
            sent_to: activeChatID,
            content: message
        }).then(() => {
            this.setState({
                message: "",
                messages: [
                    ...this.state.messages,
                    { messageID: this.state.message.length + 1, sent_by: auth.user_id, content: message }
                ]
            });
            socket.emit('chat message', message);
        });
    }

    renderMessages = () => {
        return this.state.messages.map((message) => {
            let class_name = (message.sent_by === auth.user_id) ? "user-message" : "server-message";
            return <div className={class_name}><span>{message.content}</span></div>
        })
    }

    setChatActive = (roomID) => {
        for (let i = 0; i < this.state.rooms.length; i++) {
            if (this.state.rooms[i].id === roomID) {
                let newRooms = this.state.rooms;
                newRooms[i].isActive = true;
                this.setState({ rooms: newRooms, activeChat: newRooms[i] }, () => {
                    this.getMessagesForCurrentChat();
                });
            } else if (this.state.rooms[i].isActive) {
                let newRooms = this.state.rooms;
                newRooms[i].isActive = false;
                this.setState({ rooms: newRooms });
            }
        }
    }

    renderChatRooms = () => {
        return this.state.rooms.map((room) => {
            if (((this.state.chatShowType === "direct" && room.type === "direct") || this.state.chatShowType === "all") && room.chat_name.includes(this.state.filterString)) {
                return <div className={`chat-room${(room.isActive) ? " active" : ""}`} onClick={() => this.setChatActive(room.id)}>
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

    getMessagesForCurrentChat = () => {
        let activeChatID;
        for (let room of this.state.rooms) {
            if (room.isActive) activeChatID = room.id;
        }
        ChatAPI.get_messages_for_chat(activeChatID).then((res) => {
            this.setState({ messages: res.data })
        })
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
                    <div className="chat-title">
                        <div className="chat-room-icon-title"></div>
                        <div className="chat-info-text">
                            <span class="chat-title-text"><strong>{(this.state.activeChat) ? this.state.activeChat.chat_name : ""}</strong></span>
                            <span class="chat-subtitle-text">Subtitle here</span>
                        </div>
                    </div>
                    <div className="chat-root">
                        {this.renderMessages()}
                        {this.state.chatTyping && <div className="server-message">...</div>}

                    </div>
                    <div className="chat-box">
                        <ContentEditable html={this.state.message} id="message-input" onKeyPress={this.handleEnterSubmit} onChange={this.handleMessageChange}></ContentEditable>
                        <button className="chat-box-button" onClick={this.sendMessage}>
                            <span><i aria-hidden="false" id="chat-chevron" className="fas fa-chevron-up"></i></span>
                        </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(ChatPage);
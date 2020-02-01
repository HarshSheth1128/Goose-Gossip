import React, { Component } from 'react';
import './ChatRoomButton.css';

const ChatRoomButton = ({onClick, chatName, lastMessage, memberCount}) => {
    return (
        <>
        <div className="ChatRoomButtonWrapper">
            <button className="ChatRoomButtonRoot" onClick={onClick}>
                <div className="MainContentWrapper">
                    <div className="ChatNameContainer">
                        <div className="ChatName">{chatName}</div>
                    </div>
                    <div className="LastMessageContainer line-clamp">{lastMessage}</div>
                    <div className="MemberCountContainer">
                        <div className="ContentWrapper">
                            <div className="MemberCount">{memberCount}</div>
                            <div className="MemberText">warriors here right now</div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        </>
    );
}

export default ChatRoomButton;
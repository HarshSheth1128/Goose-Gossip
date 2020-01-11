import React, { Component } from 'react';
import './index.css';

const Category = ({onClick, categoryName, lastMessage, memberCount}) => {
    return (
        <>
            <button className="CategoryRoot" onClick={onClick}>
                <div className="MainContentWrapper">
                <div className="CategoryNameContainer">
                    <div className="CategoryName">{categoryName}</div>
                </div>
                <div className="LastMessageContainer line-clamp">{lastMessage}</div>
                <div className="CategoryMemberCountContainer">
                    <div className="ContentWrapper">
                        <div className="MemberCount">{memberCount}</div>
                        <div className="MemberText">warriors here right now</div>
                    </div>
                </div>
                </div>
            </button>
        </>
    );
}

export default Category;
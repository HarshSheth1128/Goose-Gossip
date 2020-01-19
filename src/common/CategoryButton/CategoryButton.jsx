import React, { Component } from 'react';
import './CategoryButton.css';

const CategoryButton = ({onClick, categoryName, roomCount}) => {
    return (
        <>
            <button className="ButtonRoot" onClick={onClick}>
                <div className="MainContentWrapper">
                    <div className="RoomCountContainer">
                        <div className="ContentWrapper">
                            <div className="RoomCount">{roomCount}</div>
                            <div className="DescriptionText">goose rooms</div>
                        </div>
                    </div>
                    <div className="CategoryNameContainer">
                        <div className="CategoryName">{categoryName}</div>
                    </div>
                </div>
            </button>
        </>
    );
}

export default CategoryButton;
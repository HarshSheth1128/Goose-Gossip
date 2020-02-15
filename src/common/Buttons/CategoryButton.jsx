import React, { Component } from 'react';
import './CategoryButton.css';

const CategoryButton = ({onClick, categoryName, roomCount}) => {
    return (
        <>
        <div className="CategoryButtonWrapper">
            <button className="CategoryButtonRoot" onClick={onClick}>
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
        </div>
        </>
    );
}

export default CategoryButton;
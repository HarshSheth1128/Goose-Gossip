import React, { Component } from 'react';
import './MenuBar.css';
import GooseImage from '../../images/goose.png'
import HomeIcon from '../../images/home.svg'
import BoardIcon from '../../images/board.svg'

import CONSTANTS from '../../constants/constants';

const { HOME_PAGE, CATEGORIES_LIST_PAGE, CHATS_LIST_PAGE} = CONSTANTS.PAGE_PATHS;

const MenuBar = ({show, handleSubmit}) => {
    const MenuBarClassName = show ? "MenuBarRoot" : "MenuBarRootHide";
    const MenuBarContentClass = show ? "MenuBarContentWrapper" : "MenuBarContentWrapperHide";
    return (
        <>
            <header className={MenuBarClassName}>
                <nav className={MenuBarContentClass}>
                    <img src={GooseImage} className="GooseImage" />
                    <div className="Spacer"></div>
                    <div className="MenuBarNavigation">
                        <ul>
                            <li><a onClick={(e) => handleSubmit(CHATS_LIST_PAGE)}>Rooms</a></li>
                            <li><div className="VerticalSeperator"></div></li>
                            <li><a onClick={(e) => handleSubmit(CATEGORIES_LIST_PAGE)}>Categories</a></li>
                            <li><div className="VerticalSeperator"></div></li>
                            <li><img src={BoardIcon} className="BoardIcon"/></li>
                            <li><div className="VerticalSeperator"></div></li>
                            <li><img src={HomeIcon} onClick={(e) => handleSubmit(HOME_PAGE)} /></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default MenuBar;
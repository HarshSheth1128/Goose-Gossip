import React, { Component } from 'react';
import './MenuBar.css';
import GooseImage from '../../images/goose.png'
import HomeIcon from '../../images/home.svg'
import BoardIcon from '../../images/board.svg'

const MenuBar = ({show}) => {
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
                            <li><a href="/">Rooms</a></li>
                            <li><div className="VerticalSeperator"></div></li>
                            <li><a href="/">Categories</a></li>
                            <li><div className="VerticalSeperator"></div></li>
                            <li><img src={BoardIcon} className="BoardIcon"/></li>
                            <li><div className="VerticalSeperator"></div></li>
                            <li><img src={HomeIcon} /></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default MenuBar;
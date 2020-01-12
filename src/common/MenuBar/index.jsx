import React, { Component } from 'react';
import './index.css';
import GooseImage from '../../images/goose.png'
import HomeIcon from '../../images/home.svg'
import BoardIcon from '../../images/board.svg'

const MenuBar = () => {
    return (
        <>
            <header className="MenuBarRoot">
                <nav className="MenuBarContentWrapper">
                    <img src={GooseImage} className="GooseImage" />
                    <div className="Spacer"></div>
                    <div className="MenubarNavigation">
                        <ul>
                            <li><a href="/">Rooms</a></li>
                            <li><div className="VerticalSeperator"></div></li>
                            <li><a href="/">Categories</a></li>
                            <li><div className="VerticalSeperator"></div></li>
                            <li><img src={BoardIcon} /></li>
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
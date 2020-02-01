import React, { Component } from 'react';
import './BottomNavBar.css';
import ChatIcon from '../../images/chat.svg'
import MessageIcon from '../../images/email.svg'
import BoardIcon from '../../images/board_mobile.svg'


const NavBar = ({show}) => {
    const NavBarClassName = show ? "NavBarRoot" : "NavBarRootHide";
    const NavBarContentClass = show ? "NavBarContentWrapper" : "NavBarContentWrapperHide";
    return (
        <>
            <header className={NavBarClassName}>
                <nav className={NavBarContentClass}>
                    <img src={ChatIcon} className="Icons" />
                    <div className="Spacer"></div>
                    <img src={MessageIcon} className="Icons" />
                    <div className="Spacer"></div>
                    <img src={BoardIcon} className="Icons" />
                </nav>
            </header>
        </>
    );
}

export default NavBar;
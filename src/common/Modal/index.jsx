import React, { Component } from 'react';
import './index.css';

const Modal = ({ show, children, handleClose }) => {
    const modalClassName = show ? "ModalRoot" : "display-none";

    return (
        <>{show &&
            <div className={modalClassName}>
                {children}
            </div>
        }</>
    );

}

export default Modal;
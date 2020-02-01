import React, { useState, Children } from 'react';

const ToggleButton = ({ children, ...rest }) => {
    const [toggled, setToggle] = useState(false);

    return (
        <button {...rest}>{children}</button>
    );
}

export default ToggleButton;
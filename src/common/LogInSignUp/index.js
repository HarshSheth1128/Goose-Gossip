import React, { useState } from 'react';
import './index.css'

const LogInSignUpForm = ({ formState }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div id="input-root">
            {formState === 1 && <input className="input" placeholder="Email"></input>}
            {formState !== -1 &&
                <>
                    <input className="input" placeholder="Username"></input>
                    <input type="password" className="input" placeholder="Password"></input>
                </>}
        </div>
    );
}

export default LogInSignUpForm;
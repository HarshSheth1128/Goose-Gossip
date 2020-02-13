import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";
import CONSTANTS from '../../constants/constants.js';
import auth from '../../common/auth';
console.log(CONSTANTS);
const { NOT_LOGGED_IN } = CONSTANTS.LOGIN_STATE;


const ProtectedRoute = ({ component: Component, state, ...rest }) => (
    < Route {...rest} render={(props) => (
        auth.isLoggedIn === true
            ? <Component {...state} />
            : <Redirect to='/' />
    )} />
);

export default ProtectedRoute;
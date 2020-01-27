import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        console.log(props.loginState);
    }

    render() {
        console.log("hello");
        return (<div className="HomePageRoot"></div>);
    }
}

export default withRouter(HomePage);
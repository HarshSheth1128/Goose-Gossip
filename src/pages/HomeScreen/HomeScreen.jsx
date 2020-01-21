import React, { Component } from 'react';
import '../../common/BottomNavBar/BottonNavBar';
import NavBar from '../../common/BottomNavBar/BottonNavBar';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            showNavBar: true,
            prevScrollpos: 0
        };
    }

    componentDidMount() {
        this.setState({ prevScrollpos: window.scrollY });
        window.addEventListener('scroll', e => this.handleNavigation(e));
    }
        

    handleNavigation = (e) => {
        const isBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight);
        const screen = e.currentTarget;
        if (isBottom) {
            //console.log("THERE");
            this.setState({ showNavBar: true });
        }
        else if (this.state.prevScrollpos > screen.scrollY) {
            //console.log("scrolling up");
            //console.log(this.state.showNavBar);
            this.setState({ showNavBar: true });
        } else if (this.state.prevScrollpos < screen.scrollY) {
            //console.log("scrolling down");
            //console.log(this.state.showNavBar);
            this.setState({ showNavBar: false });
        }
        this.setState({ prevScrollpos: window.scrollY });
    };

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <>
            <NavBar show={this.state.showNavBar} />
            </>
        );
    }
}

export default HomeScreen;

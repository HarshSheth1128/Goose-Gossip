import React, { Component } from 'react';
import '../../common/BottomNavBar/BottonNavBar';
import NavBar from '../../common/BottomNavBar/BottonNavBar';
import MenuBar from '../../common/MenuBar/MenuBar';
import CategoryButton from '../../common/CategoryButton/CategoryButton';
import ChatRoomButton from '../../common/ChatRoomButton/ChatRoomButton'

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            showNavBar: true,
            prevScrollpos: 0,
            lastScrollUp: true
        };
    }

    componentDidMount() {
        this.setState({ prevScrollpos: window.scrollY });
        window.addEventListener('scroll', e => this.handleNavigation(e));
    }
        

    handleNavigation = (e) => {
        const screen = e.currentTarget;
        if ((this.state.prevScrollpos > screen.scrollY) && !this.state.lastScrollUp) {
            //console.log("scrolling up");
            this.setState({ showNavBar: true, lastScrollUp: true});
        } else if ((this.state.prevScrollpos < screen.scrollY) && this.state.prevScrollpos) {
            //console.log("scrolling down");
            this.setState({ showNavBar: false, lastScrollUp: false});
        }
        this.setState({ prevScrollpos: window.scrollY });
    };

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <>
                <div className="HomeScreenRoot">
                    <MenuBar />
                    <div className="HomeScreenRootContentWrapper">
                        <ul>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                        </ul>
                    </div>
                    <NavBar show={this.state.showNavBar} />
                </div>
            </>
        );
    }
}

export default HomeScreen;

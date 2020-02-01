import React, { Component } from 'react';
import {useSpring } from "react-spring";
import { animated} from "react-spring";
import "./HomeScreen.css"
import '../../common/BottomNavBar/BottonNavBar';
import NavBar from '../../common/BottomNavBar/BottonNavBar';
import MenuBar from '../../common/MenuBar/MenuBar';
import CategoryButton from '../../common/Buttons/CategoryButton';
import ChatRoomButton from '../../common/Buttons/ChatRoomButton';
import SearchBar from '../../common/SearchBar/SearchBar';

class HomeScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            showNavBar: true,
            prevScrollpos: 0,
            lastScrollUp: true,
            chatRooms: new Array(30).fill({
                chatName: "CS246", 
                memberCount: "16" ,
                lastMessage: "GooseFighter69: That midterm absolutely destroyed my faith in Waterloo"
            }),
            categories: new Array(10).fill({
                categoryName: "CS246", 
                roomCount: "16" 
            })
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
        /*const AnimatedChatRoomButton = animated(ChatRoomButton);
        const style = useSpring({ cursor: PointerEvent, from: { cursor:  } })*/
        return (
            <>
                <div className="HomeScreenRoot">
                    <MenuBar show={this.state.showNavBar}/>
                    <div className="HomeScreenRootContentWrapper">
                        <div className="SearchBarContainer"><SearchBar /></div>
                        <div className="TopRowContainer">
                            <div className="Headings">Warrior's Top 10</div>
                            <div className="ListWrapper" {...this.props.bind()}>
                                {this.state.chatRooms.map(chatRoom =>(
                                    <animated.div className="ChatRoomWrapper" style={this.props.style}>
                                    <ChatRoomButton chatName={chatRoom.chatName} 
                                        memberCount={chatRoom.memberCount} 
                                        lastMessage={chatRoom.lastMessage}/>
                                    </animated.div>
                                ))}
                            </div>
                            <div className="LinkContainer">
                                <p id="ViewAllLink">View All</p>
                            </div>
                        </div>
                        <div className="BottomContentContainer">
                            <div className="Headings">Categories</div>
                            <div className="CategoriesContainer">
                                {this.state.categories.map(category => (
                                    <CategoryButton categoryName={category.categoryName} 
                                        roomCount={category.roomCount}>
                                    </CategoryButton>
                                ))}
                            </div>
                            <div className="LinkContainer">
                                <p id="ViewAllLink">View All</p>
                            </div>
                        </div>
                    </div>
                    <NavBar show={this.state.showNavBar} />
                </div>
            </>
        );
    }
}

export default HomeScreen;

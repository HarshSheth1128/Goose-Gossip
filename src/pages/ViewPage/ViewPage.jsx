import React, { Component } from 'react';
import MenuBar from '../../common/MenuBar/MenuBar'
import SearchBar from '../../common/SearchBar/SearchBar';
import './ViewPage.css';
import { withRouter } from "react-router";
import ChatRoomButton from '../../common/Buttons/ChatRoomButton';
import CategoryButton from '../../common/Buttons/CategoryButton'
import CONSTANTS from '../../constants/constants';

const { CATEGORIES_LIST_PAGE } = CONSTANTS.PAGE_PATHS;

class ViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            showNavBar: true,
            prevScrollpos: 0,
            lastScrollUp: true,

            CategoriesList: new Array(26).fill({
                List: new Array(8).fill({
                    name: "Mood",
                    roomCount: 16,
                    rooms: new Array(8).fill ({
                        name: "SLC 24/7",
                        memberCount: 12,
                        lastMessage: "DepressionLover69: Memebership now open for the crying club!"
                    })
                })
            }),

            ChatList: new Array(26).fill({
                List: new Array(8).fill({
                    name: "CS246",
                    memberCount: 20,
                    lastMessage: "That midterm absolutely destroyed my faith in waterloo"
                })
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
        window.removeEventListener('scroll', window.addEventListener('scroll', e => this.handleNavigation(e)));
    }

    handleSubmit = (nextPage) => {
        this.props.history.push(nextPage);
    }

    isCategoryListPage = () => {
        return  this.props.location.pathname === CATEGORIES_LIST_PAGE;
    }

    renderChatRooms() {
        return(
            <ul>
            {this.state.ChatList.map((alphagroup, i) => (
                <li>
                    <div className="spacer"></div>
                    <div className="CategoryListHolder">
                    {alphagroup.List.map((chatRoom) => (
                        <ChatRoomButton 
                            chatName={chatRoom.name} 
                            memberCount={chatRoom.memberCount} 
                            lastMessage={chatRoom.lastMessage}>
                        </ChatRoomButton>
                    ))}
                    </div>
                </li>
            ))}
            </ul>
        );
    }

    renderCategories() {
        return(
            <ul>
                {this.state.CategoriesList.map((alphagroup, i) => (
                <li>
                    <div className="CategoryListHolder">
                    {alphagroup.List.map((category) => (
                        <CategoryButton categoryName={category.name} 
                            roomCount={category.roomCount}>
                        </CategoryButton>
                    ))}
                    </div>
                </li>
            ))}
            </ul>
        );
    }

    render() {
        const isCategoriesPage = this.isCategoryListPage();
        return (
            <div className="ViewPageRoot">
                <MenuBar show={this.state.showNavBar} handleSubmit={this.handleSubmit} />
                <div className="ViewPageContentWrapper">
                    <div className="CategoriesTitle">{isCategoriesPage ? "Categories" : "Chat Rooms"}</div> 
                    <div className="SearchBarContainer"><SearchBar /></div> 
                    <div className="MainContentWrapper">
                    {isCategoriesPage ? 
                        this.renderCategories()
                    :
                        this.renderChatRooms()
                    }  
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ViewPage);

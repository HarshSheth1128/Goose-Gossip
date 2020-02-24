import React, { Component } from 'react';
import MenuBar from '../../common/MenuBar/MenuBar'
import SearchBar from '../../common/SearchBar/SearchBar';
import './ViewPage.css';
import { withRouter } from "react-router";
import ChatRoomButton from '../../common/Buttons/ChatRoomButton';
import CategoryButton from '../../common/Buttons/CategoryButton'
import CONSTANTS from '../../constants/constants';

import ChatAPI from '../../api/Chats';
import CategoryAPI from '../../api/Categories';
const { CATEGORIES_LIST_PAGE } = CONSTANTS.PAGE_PATHS;

class ViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCategories: '',
            rooms: [],
            categories: [],
            isdataloaded: false,

            showNavBar: true,
            prevScrollpos: 0,
            lastScrollUp: true,
        };
        this.getAllCategories();
        this.changeState = this.changeState.bind(this)
    }

    changeState = (searchTerm) => {
        this.setState({ searchCategories : searchTerm})
    }

    componentDidMount() {
        //this.setState({ prevScrollpos: window.scrollY });
        //window.addEventListener('scroll', e => this.handleNavigation(e));
    }
        
    handleNavigation = (e) => {
        const screen = e.currentTarget;
        if ((this.state.prevScrollpos > screen.scrollY) && !this.state.lastScrollUp) {
            this.setState({ showNavBar: true, lastScrollUp: true});
        } else if ((this.state.prevScrollpos < screen.scrollY) && this.state.prevScrollpos) {
            this.setState({ showNavBar: false, lastScrollUp: false});
        }
        this.setState({ prevScrollpos: window.scrollY });
    };

    componentWillUnmount() {
        //window.removeEventListener('scroll', e => this.handleNavigation(e));
    }

    getAllCategories() {
        CategoryAPI.get_all_categories().then((res) => {
            this.setState({ categories: res.data.sort(function (a, b){ 
                return a.category_name > b.category_name})});
    }).then(() => {this.getCategoryChatRooms()});
    }

    getCategoryChatRooms() {
        this.state.categories.map((category, key) => {
            return CategoryAPI.get_category_chats(category.id).then((resp) => {
                return category["rooms"] = resp.data.length;
            }).then(() => {
                if (key === (this.state.categories.length - 1)) 
                this.sortCategories();
            });
        });
    }

    sortCategories () {
        let sortedArr = new Array(26).fill();
        let a = 97;
        this.state.categories.map((category) => (
            Array.isArray(sortedArr[category.category_name.toLowerCase().charCodeAt(0) - a]) ?
            sortedArr[category.category_name.toLowerCase().charCodeAt(0) - a].push(category) :
            sortedArr[category.category_name.toLowerCase().charCodeAt(0) - a] = [category]
        ));
        console.log(sortedArr);   
        this.setState({categories : sortedArr}); 
        this.getAllChats();  
    }

    getAllChats() {
        ChatAPI.get_all_chats().then((res) => {
            this.setState({ rooms: res.data});
            console.log(this.state.rooms);
            this.state.rooms.map(room => (console.log(room ? room.chat_name : null)));
        }).then(() => {this.getChatMembers()});
    }

    getChatMembers() {
        this.state.rooms.map((chatRoom, key) => {
            return ChatAPI.get_chat_members(chatRoom.id).then((resp) => {
                return chatRoom["memberCount"] = resp.data.length;
            }).then(() => {
                if (key === (this.state.rooms.length - 1)){ 
                this.state.rooms.map(room => (console.log(room)));
                //this.setState({ isdataloaded: true});
                this.sortChat();
                }
            });
        });
    }

    sortChat () {
        let sortedArr = new Array(26).fill();
        let a = 97;
        console.log(this.state.rooms);
        this.state.rooms.map((category) => (
            Array.isArray(sortedArr[category.chat_name.toLowerCase().charCodeAt(0) - a]) ?
            sortedArr[category.chat_name.toLowerCase().charCodeAt(0) - a].push(category) :
            sortedArr[category.chat_name.toLowerCase().charCodeAt(0) - a] = [category]
        ));
        
        console.log(sortedArr);   
        this.setState({rooms : sortedArr}); 
        this.setState({ isdataloaded: true});
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
            {this.state.searchCategories === '' ? 
                this.state.rooms.map((alphagroup, i) => (
                <li>
                    {alphagroup ? 
                    <div className="ListHolder">
                    {alphagroup.map((chatRoom, key) => (
                        <ChatRoomButton 
                            chatName={chatRoom.chat_name}
                            memberCount={chatRoom.memberCount} 
                            lastMessage={"GooseFighter69: That midterm absolutely destroyed my faith in waterloo"}>
                        </ChatRoomButton>
                    ))}
                    </div> 
                : null}
                </li>
                )) 
                : 
                this.state.rooms.map((alphagroup, i) => ( 
                <li>
                    <div className="SortedListHolder">
                    {alphagroup ? 
                    alphagroup.filter((room) => (room && room.chat_name.toLowerCase().startsWith(this.state.searchCategories.toLowerCase()))).map((room) => ( room ?
                        <ChatRoomButton 
                            chatName={room.chat_name}
                            memberCount={room.memberCount} 
                            lastMessage={"GooseFighter69: That midterm absolutely destroyed my faith in waterloo"}>
                        </ChatRoomButton>
                        : null))
                    : null}
                    </div> 
                    </li>    
                ))
            }
            </ul>
        );
    }

    renderCategories() {
        return(
            <ul>
                {this.state.searchCategories === '' ? 
                    this.state.categories.map((alphagroup, i) => ( 
                    <li>
                        {alphagroup ? 
                        <div className="ListHolder">
                        {alphagroup.map((category) => (
                            <CategoryButton categoryName={category.category_name} 
                                roomCount={category.rooms}>
                            </CategoryButton>
                        ))}
                        </div> 
                        : null}
                    </li>
                    )) 
                    : 
                    this.state.categories.map((alphagroup, i) => ( 
                        <li>
                        <div className="SortedListHolder">
                        {alphagroup ? 
                        alphagroup.filter((category) => (category && category.category_name.toLowerCase().startsWith(this.state.searchCategories.toLowerCase()))).map((category) => ( category ? 
                            
                                <CategoryButton categoryName={category.category_name} 
                                    roomCount={category.rooms}>
                                </CategoryButton>
                            : null))
                        : null}
                        </div> 
                        </li>    
                    ))
                }
            </ul>
        );
    }

    render() {
        const isCategoriesPage = this.isCategoryListPage();
        return (
            <div className="ViewPageRoot">
                <MenuBar show={this.state.showNavBar} handleSubmit={this.handleSubmit} />
                {this.state.isdataloaded && <div className="ViewPageContentWrapper">
                    <div className="CategoriesTitle">{isCategoriesPage ? "Categories" : "Chat Rooms"}</div> 
                    <div className="SearchBarContainer"><SearchBar changeState={this.changeState} /></div> 
                    <div className="MainContentWrapper">
                    {isCategoriesPage ? 
                        this.renderCategories()
                    :
                        this.renderChatRooms()
                    }  
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default withRouter(ViewPage);

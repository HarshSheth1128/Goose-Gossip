import React, { Component } from 'react';
import './index.css';
//import './SearchBar.css'
import SearchIcon from '../../images/search.svg'
//import { ReactComponent as SearchIcon } from '../../images/search.svg';

const SearchBar = () => {
    return (
        <>
        <div className="SearchBarRoot">
            <div className="SearchBarWrapper">
                <input className="SearchBarInput" type="text" placeholder="Type to search" />
                <button className="SearchBarSubmit" >
                    <img className="SearchIcon" src={SearchIcon} alt="Search"/>
                </button>
            </div>
        </div>
        </>
    );

}

export default SearchBar;
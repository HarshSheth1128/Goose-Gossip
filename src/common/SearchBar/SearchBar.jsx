import React, { Component } from 'react';
import './SearchBar.css';
import SearchIcon from '../../images/search.svg'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_term: ''
        }
    }

    handleChange = (e) => {
        this.setState({ search_term: e.target.value});
        this.props.changeState(e.target.value);
    }

    render() {
        return (
            <div className="search-root">
                <span id="search-icon"><i className="fas fa-search"></i></span>
                <input className="search-input" placeholder="Search here" value={this.state.search_term} onChange={(e) => {this.handleChange(e)}}></input>
            </div>
        );
    }
}

export default SearchBar;
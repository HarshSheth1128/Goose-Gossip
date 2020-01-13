import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage/";
import ChatRoomButton from "./common/ChatRoomButton/"
import CategoryButton from "./common/CategoryButton/"
import MenuBar from "./common/MenuBar/"
import SearchBar from "./common/SearchBar"

function App() {
  return (
    <SearchBar />
    /*<MenuBar />*/
    /*<CategoryButton 
      categoryName="CS246" 
      roomCount="16" 
    />*/
    //<MainPage />
  );
}

export default App;

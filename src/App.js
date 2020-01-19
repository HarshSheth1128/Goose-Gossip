import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import ChatRoomButton from "./common/ChatRoomButton/ChatRoomButton"
import CategoryButton from "./common/CategoryButton/CategoryButton"
import MenuBar from "./common/MenuBar/MenuBar"
import SearchBar from "./common/SearchBar/SearchBar"

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

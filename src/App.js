import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage/";
import ChatRoomButton from "./common/ChatRoomButton/"
import CategoryButton from "./common/CategoryButton/"

function App() {
  return (
    <CategoryButton 
      categoryName="CS246" 
      roomCount="16" 
    />
    //<MainPage />
  );
}

export default App;

import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage/";
import Category from "./common/Category/"

function App() {
  return (
    <Category 
      categoryName="CS246" 
      memberCount="16" 
      lastMessage="GooseFighter69: That midterm absolutey destroyed my faith"
    />
    //<MainPage />
  );
}

export default App;

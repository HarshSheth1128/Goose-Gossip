import React from 'react';
import {useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import ChatRoomButton from "./common/ChatRoomButton/ChatRoomButton"
import CategoryButton from "./common/CategoryButton/CategoryButton"
import MenuBar from "./common/MenuBar/MenuBar"
import SearchBar from "./common/SearchBar/SearchBar"
import NavBar from "./common/BottomNavBar/BottonNavBar"
import HomeScreen from "./pages/HomeScreen/HomeScreen"

function App() {

  const [style, setFunction] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const clamp = (value) => {
    const clampAt = 30;
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  }

  const bind = useScroll(event => {
    setFunction({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  return (
    /*<SearchBar />*/
    <HomeScreen style={style} setFunction={setFunction} bind={bind}/>
    /*<CategoryButton 
      categoryName="CS246" 
      roomCount="16" 
    />*/
    /*<ChatRoomButton 
      chatName="CS246" 
      memberCount="16" 
      lastMessage="This is a sample msg for the sake of testing"
    />*/
    //<MainPage />
  );
}

export default App;

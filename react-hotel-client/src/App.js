import React from 'react';
import Dropdown from './Components/RoomDropdown'
import RoomContextProvider from './Contexts/RoomContext';
import AppRouter from './Components/AppRouter';
import NavBar from './Components/NavBar';
import MoneyContextProvider from './Contexts/MoneyContext'

function App() {
  return (
    <div className="App">
    <MoneyContextProvider>
    <RoomContextProvider>
      <NavBar/>
      <AppRouter/>
    </RoomContextProvider>
    </MoneyContextProvider>
    </div>
  );
}

export default App;

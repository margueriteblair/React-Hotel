import React from 'react';
import Dropdown from './Components/RoomDropdown'
import RoomContextProvider from './Contexts/RoomContext';
import AppRouter from './Components/AppRouter';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
    <RoomContextProvider>
      <NavBar/>
      <AppRouter/>
    </RoomContextProvider>
    </div>
  );
}

export default App;

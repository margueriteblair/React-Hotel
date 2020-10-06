import React from 'react';
import Dropdown from './Components/RoomDropdown'
import RoomContextProvider from './Contexts/RoomContext';

function App() {
  return (
    <div className="App">
    <RoomContextProvider>
      <h1>Welcome to the React Hotel, Gremlins!</h1>
      <Dropdown/>
    </RoomContextProvider>
    </div>
  );
}

export default App;

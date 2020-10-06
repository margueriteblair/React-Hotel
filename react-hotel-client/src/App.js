import React from 'react';
import Dropdown from './Components/RoomDropdown'
import RoomContext from './Contexts/RoomContext';

function App() {
  return (
    <div className="App">
    <RoomContext>
      <h1>Welcome to the React Hotel, Gremlins!</h1>
      <Dropdown/>
    </RoomContext>
    </div>
  );
}

export default App;

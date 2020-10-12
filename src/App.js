import React, { Component } from 'react';
import './css/App.css';
import WeekContainer from './Components/WeekContainer';

class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <WeekContainer />
      </div>
    );
  }
}

export default App;

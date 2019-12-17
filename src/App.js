import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todolist from './Components/Todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div>

          <Todolist />

        </div>

      </div>
    );
  }
}

export default App;

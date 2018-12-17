import React, { Component } from 'react';
import { Header } from './components/Header/';
import TaskOne from './components/TaskOne/';
import TaskTwo from './components/TaskTwo/';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TaskOne />
        <TaskTwo />
      </div>
    )
  }
}

export default App;

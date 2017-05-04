import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <form method="post" action="/users">
          <input type="text" name="email" />
          <input type="password" name="password"/>
          <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;

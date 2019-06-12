import React, { Component } from 'react';

//main home page, will render all album covers
//search bar organized by params
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { key: 'value' }
  }
  render() {
    return (
      <div>
        Welcome to da Tunes!
      </div>
    )
  }
}

export default App;

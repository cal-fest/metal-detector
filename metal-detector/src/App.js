import React, { Component } from 'react';
import Nav from './Nav';
import DisplayMain from './DisplayMain';
const axios = require('axios');

//main home page, will render all album covers
//search bar organized by params
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbData: [],
      eightData: []
    }
  }

  componentDidMount() {
    axios('http://localhost:8080/albums', {
      method: 'GET'
    })
      .then(res => {
        this.setState({
          dbData: res.data.rows
        })
      })
      .catch(err => {
        console.log('Error in axios get for art')
      })
  }

  render() {
    const albumCovers = this.state.dbData;
    return (
      <div className="main">
        <Nav />
        <DisplayMain albumCovers={albumCovers} />
      </div>
    )
  }
}

export default App;

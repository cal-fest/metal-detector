import React, { Component } from 'react';
import Nav from './Nav';
const axios = require('axios');

//main home page, will render all album covers
//search bar organized by params
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { key: 'value' }
  }
  // componentDidMount() {
  //   //fetch album covers from server
  //   axios.get('/getalbumcovers')
  //     .then(res => {
  //       console.log('in res')
  //       console.log('this is my response', res)
  //     })
  //     .catch(err => {
  //       console.log('in err')
  //       console.log('this is my err', err)
  //     })
  // }
  render() {
    return (
      <div>
        <Nav />
        {/* hello */}
      </div>
    )
  }
}

export default App;

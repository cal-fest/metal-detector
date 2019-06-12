import React from "react";

class AlbumBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const albumBox = e.target;
    albumBox.style.display = 'block';
    this.setState({ isToggleOn: !this.state.isToggleOn })
    this.state.isToggleOn ?
      albumBox.style.backgroundColor = 'white' :
      albumBox.style.backgroundColor = 'black';
    // albumBox.style.color = 'lime';
    let firstRect = albumBox.getBoundingClientRect();
    // let lastRect = detailItem.getBoundingClientRect();

  }
  render() {
    return (
      <div className="album-art" onMouseDown={(e) => this.handleClick(e)}>
        <h1>AlbumBox</h1>
      </div >
    )
  }
}

export default AlbumBox;
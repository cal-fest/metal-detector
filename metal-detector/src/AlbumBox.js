import React from "react";

class AlbumBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(e) {
    const albumBox = e.target;
    albumBox.style.display = 'block';
    albumBox.style.color = 'lime';
    albumBox.style.backgroundColor = 'white';

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
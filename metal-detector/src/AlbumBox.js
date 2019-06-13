import React from "react";
import './App.css';
class AlbumBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }
  // const items = document.querySelectorAll('.item');
  // const detailItem = document.querySelector('.detail');
  // const detailScene = document.querySelector('.scene.-detail');

  // detailScene.style.display = 'none';

  // items.forEach(item => {
  // item.addEventListener('click', () => {
  handleClick(e) {
    const itemImage = e.target;

    // detailItem.
    //   setAttribute('data-image', item.getAttribute('data-key'));

    // detailItem.
    //   querySelector('img').
    //   setAttribute('src', itemImage.getAttribute('src'));

    // detailScene.style.display = 'block';
    // itemImage.style.opacity = 0;

    let firstRect = itemImage.getBoundingClientRect();
    // let lastRect = detailItem.getBoundingClientRect();
    console.log('firstReact', firstRect)
    itemImage.animate([
      {
        transform: `
            translateX(${firstRect.left - 0}px)
            translateY(${firstRect.top - 650}px)
            scale(${firstRect.width / 600})
          ` },

      {
        transform: `
            translateX(0)
            translateY(0)
            scale(1)
           ` } ],

      {
        duration: 600,
        easing: 'cubic-bezier(0.2, 0, 0.2, 1)'
      });

  }

  // });
  // });

  // detailItem.addEventListener('click', () => {
  //   const itemImage = document.querySelector(`[data-key="${detailItem.getAttribute('data-image')}"]`);

  //   let itemImageRect = itemImage.getBoundingClientRect();
  //   let detailItemRect = detailItem.getBoundingClientRect();

  //   detailScene.style.display = 'none';
  //   itemImage.style.opacity = 1;

  //   itemImage.animate([
  //     {
  //       zIndex: 2,
  //       transform: `
  //         translateX(${detailItemRect.left - itemImageRect.left}px)
  //         translateY(${detailItemRect.top - itemImageRect.top}px)
  // scale(${detailItemRect.width / itemImageRect.width})
  //       ` },

  //     {
  //       zIndex: 2,
  //       transform: `
  //         translateX(0)
  //         translateY(0)
  //         scale(1)
  //        ` } ],

  //     {
  //       duration: 600,
  //       easing: 'cubic-bezier(0.2, 0, 0.2, 1)'
  //     });

  // });
  // handleClick(e) {
  //   const albumBox = e.target;
  //   albumBox.style.display = 'block';
  //   this.setState({ isToggleOn: !this.state.isToggleOn })
  //   this.state.isToggleOn ?
  //     albumBox.style.backgroundColor = 'white' :
  //     albumBox.style.backgroundColor = 'black';
  //   // albumBox.style.color = 'lime';
  //   let firstRect = albumBox.getBoundingClientRect();
  //   // let lastRect = detailItem.getBoundingClientRect();

  // }
  render() {
    return (
      <div className="album-art flip-card" >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="fill"
              src={this.props.src}
              onMouseDown={(e) => this.handleClick(e)}
              alt={this.props.album_name}
            />
          </div>
          <div className="flip-card-back">
            <h2>Artist:<br />{this.props.artistName}</h2>
            <h3>Album:<br />{this.props.albumName}</h3>
            <h3>Release Date:<br />{this.props.releaseDate}</h3>
          </div>
        </div>
      </div >
    )
  }
}

export default AlbumBox;
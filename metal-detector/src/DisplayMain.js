import React from "react";
import AlbumBox from "./AlbumBox";


const DisplayMain = props => {
  console.log('props', props)
  const covers = props.albumCovers.map(obj =>
    <img src={obj.album_artwork} alt={'album cover'} />
  )
  return (
    < div className="display-main" >
      {covers}
    </div >
  )
}

export default DisplayMain;
import React from "react";
import AlbumBox from "./AlbumBox";


const DisplayMain = props => {

  const covers = props.albumCovers.map(obj =>
    <AlbumBox key={obj.id} src={obj.album_artwork} alt={'album cover'} />
  )
  return (
    < div className="display-main" >
      {covers}
    </div >
  )
}

export default DisplayMain;
import React from "react";
import AlbumBox from "./AlbumBox";


const DisplayMain = props => {

  const albumInfo = props.albumData.map(obj =>
    <AlbumBox key={obj.id} artistName={obj.artist_name} albumName={obj.album_name} releaseDate={obj.release_date} src={obj.album_artwork} alt={'album cover'} />
  )
  return (
    < div className="display-main" >
      {albumInfo}
    </div >
  )
}

export default DisplayMain;
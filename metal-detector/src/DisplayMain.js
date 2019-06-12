import React from "react";
import AlbumBox from "./AlbumBox";


const DisplayMain = props => {
  let renderArr = [];
  const covers = props.albumCovers
  let minNum = 0;
  let maxNum = 8;

  console.log('renderArr', renderArr)


  // const covers = props.albumCovers.map(obj =>
  //   <AlbumBox src={obj.album_artwork} alt={'album cover'} />
  // )
  return (
    < div className="display-main" >
      {renderArr}
    </div >
  )
}

export default DisplayMain;